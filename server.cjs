require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const MAIL_TO = process.env.MAIL_TO;
const MAIL_FROM = `"BCA Technologies" <${process.env.SMTP_USER}>`;

/* ── Formulaire de contact ── */
app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Champs requis manquants." });
  }
  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      replyTo: `"${name}" <${email}>`,
      to: MAIL_TO,
      subject: `[Contact] ${subject || "Nouveau message"} — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:linear-gradient(135deg,#143278,#008CBE);padding:24px 32px">
            <h2 style="color:#fff;margin:0;font-size:20px">Nouveau message — BCA Technologies</h2>
          </div>
          <div style="padding:32px;background:#fff">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Nom</td><td style="padding:8px 0;font-weight:600;color:#111">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0;color:#111"><a href="mailto:${email}" style="color:#143278">${email}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Objet</td><td style="padding:8px 0;color:#111">${subject || "—"}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
            <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Message :</p>
            <p style="font-size:14px;color:#111;line-height:1.6;white-space:pre-wrap">${message}</p>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;font-size:12px;color:#9ca3af;text-align:center">
            BCA Technologies Limited — Cocody Angré 9ème tranche, Abidjan, Côte d'Ivoire
          </div>
        </div>
      `,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("[/api/contact]", err.message);
    res.status(500).json({ ok: false, error: "Erreur lors de l'envoi." });
  }
});

/* ── Formulaire d'avis ── */
app.post("/api/avis", async (req, res) => {
  const { name, company, rating, message } = req.body;
  if (!name || !message) {
    return res.status(400).json({ ok: false, error: "Champs requis manquants." });
  }
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  try {
    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `[Avis client] ${stars} — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:linear-gradient(135deg,#143278,#008CBE);padding:24px 32px">
            <h2 style="color:#fff;margin:0;font-size:20px">Nouvel avis client — BCA Technologies</h2>
          </div>
          <div style="padding:32px;background:#fff">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#6b7280;width:120px">Nom</td><td style="padding:8px 0;font-weight:600;color:#111">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Entreprise</td><td style="padding:8px 0;color:#111">${company || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#6b7280">Note</td><td style="padding:8px 0;color:#f59e0b;font-size:18px">${stars} <span style="color:#111;font-size:14px">(${rating}/5)</span></td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0"/>
            <p style="font-size:13px;color:#6b7280;margin:0 0 8px">Commentaire :</p>
            <p style="font-size:14px;color:#111;line-height:1.6;white-space:pre-wrap">${message}</p>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;font-size:12px;color:#9ca3af;text-align:center">
            BCA Technologies Limited — Cocody Angré 9ème tranche, Abidjan, Côte d'Ivoire
          </div>
        </div>
      `,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error("[/api/avis]", err.message);
    res.status(500).json({ ok: false, error: "Erreur lors de l'envoi." });
  }
});

/* ── En production : sert le build React ── */
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));
app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
