import { Router, Request, Response } from "express";
import crypto from "crypto";

const router = Router();

function verifySignature(
  secret: string,
  signature: string,
  timestamp: string,
  rawBody: Buffer
): boolean {
  const expected = crypto
    .createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(expected)
    );
  } catch {
    return false;
  }
}

router.post("/webhooks/streampay", (req: Request, res: Response) => {
  const secret = process.env.STREAM_PAY_WEBHOOK_SECRET;
  const rawBody = (req as any).rawBody as Buffer | undefined;

  if (secret) {
    const signature = req.headers["x-webhook-signature"] as string | undefined;
    const timestamp = req.headers["x-webhook-timestamp"] as string | undefined;

    if (!signature || !timestamp) {
      console.warn("Webhook rejected: missing signature or timestamp header");
      res.status(401).json({ error: "Missing signature headers" });
      return;
    }

    if (!rawBody) {
      console.error("Webhook rejected: raw body not available");
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (!verifySignature(secret, signature, timestamp, rawBody)) {
      console.warn("Webhook rejected: invalid signature");
      res.status(401).json({ error: "Invalid signature" });
      return;
    }
  } else {
    console.warn(
      "STREAM_PAY_WEBHOOK_SECRET is not set — skipping signature verification"
    );
  }

  const { event_type, payment_id } = req.body;
  console.log(`[StreamPay Webhook] event=${event_type} payment_id=${payment_id}`);

  res.status(200).json({ received: true });
});

export default router;
