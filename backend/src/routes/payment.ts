import { Router, Request, Response } from "express";

const router = Router();

router.post("/create-payment-link", async (req: Request, res: Response) => {
  const { cityName } = req.body;

  if (!cityName || typeof cityName !== "string") {
    res.status(400).json({ error: "cityName is required" });
    return;
  }

  const apiKey = process.env.STREAM_PAY_API_KEY;
  const baseUrl = process.env.STREAM_PAY_BASE_URL;
  const productId = process.env.STREAM_PAY_PRODUCT_ID;
  const successUrl = process.env.SUCCESS_REDIRECT_URL;
  const failureUrl = process.env.FAILURE_REDIRECT_URL;

  if (!apiKey || !baseUrl || !productId) {
    console.error("Missing Stream Pay environment variables");
    res.status(500).json({ error: "Payment service not configured" });
    return;
  }

  try {
    const payload = {
      name: `GuiderPlan - ${cityName} Guide`,
      items: [{ product_id: productId, quantity: 1 }],
      success_redirect_url: successUrl,
      failure_redirect_url: failureUrl,
      custom_metadata: { city: cityName, source: "guiderplan-website" },
    };

    const response = await fetch(`${baseUrl}/payment_links`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Stream Pay error ${response.status}: ${errorBody}`);
      res.status(502).json({ error: "Payment gateway error" });
      return;
    }

    const data = (await response.json()) as { url: string; id: string };
    res.json({ paymentUrl: data.url, paymentId: data.id });
  } catch (err) {
    console.error("Payment link creation failed:", err);
    res.status(500).json({ error: "Failed to create payment link" });
  }
});

export default router;
