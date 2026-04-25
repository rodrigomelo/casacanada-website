"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [errors, setErrors] = useState<Record<string,string>>({});

  function validate(f: FormData) {
    const e: Record<string,string> = {};
    if (!f.get("name")) e.name = t("required");
    if (!f.get("email")) e.email = t("required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.get("email") as string)) e.email = t("invalid_email");
    if (!f.get("message")) e.message = t("required");
    return e;
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = new FormData(ev.currentTarget);
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    try {
      const ep = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/placeholder";
      const res = await fetch(ep, { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.get("name"), email: form.get("email"), phone: form.get("phone"), subject: form.get("subject"), message: form.get("message") }) });
      setStatus(res.ok ? "success" : "error");
    } catch { setStatus("error"); }
  }

  if (status === "success") return (
    <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl p-6 text-green-700">
      <CheckCircle size={24} /><p className="font-medium">{t("success")}</p>
    </div>
  );

  const subjects = ["visa","exchange","mission","event","translation","other"] as const;
  const inputCls = "w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-red-200 focus:border-red-600 outline-none transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t("name")} *</label>
        <input id="name" name="name" type="text" className={inputCls} />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t("email")} *</label>
          <input id="email" name="email" type="email" className={inputCls} />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t("phone")}</label>
          <input id="phone" name="phone" type="tel" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{t("subject")}</label>
        <select id="subject" name="subject" className={`${inputCls} bg-white`}>
          {subjects.map(s => <option key={s} value={s}>{t(`subjects.${s}`)}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t("message")} *</label>
        <textarea id="message" name="message" rows={5} className={`${inputCls} resize-y`} />
        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>
      {status === "error" && <div className="flex items-center gap-2 text-red-600 text-sm"><AlertCircle size={16} />{t("error")}</div>}
      <button type="submit" disabled={status==="sending"} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50">
        <Send size={18} />{status==="sending" ? "..." : t("send")}
      </button>
    </form>
  );
}
