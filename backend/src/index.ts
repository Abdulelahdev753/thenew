import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import paymentRouter from "./routes/payment";
import webhookRouter from "./routes/webhook";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(
  express.json({
    verify: (req, _res, buf) => {
      (req as any).rawBody = buf;
    },
  })
);

app.use("/api", paymentRouter);
app.use("/api", webhookRouter);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
