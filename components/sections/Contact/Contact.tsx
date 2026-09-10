"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { contactContent, site } from "@/lib/constants";

type FormState = "idle" | "loading" | "success" | "error";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialPayload: ContactPayload = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function Contact() {
  const [payload, setPayload] = useState<ContactPayload>(initialPayload);
  const [state, setState] = useState<FormState>("idle");

  const updateField = (field: keyof ContactPayload, value: string) => {
    setPayload((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setPayload(initialPayload);
      setState("success");
      return;
    }

    setState("error");
  };

  return (
    <section id="contacto" className="bg-technical-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-industrial-blue">Contacto</p>
            <h2 className="mt-4 text-3xl font-bold text-anthracite sm:text-4xl">{contactContent.title}</h2>
            <p className="mt-4 text-lg leading-8 text-anthracite/70">{contactContent.description}</p>
            <div className="mt-8 grid gap-4 text-sm text-anthracite/75">
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
                <Icon name="phone" className="text-industrial-blue" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
                <Icon name="mail" className="text-industrial-blue" />
                {site.email}
              </a>
              <div className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-soft">
                <Icon name="map" className="text-industrial-blue" />
                {site.location}
              </div>
            </div>
            <Button href={`https://wa.me/${site.whatsapp}`} className="mt-6">
              WhatsApp
            </Button>
          </div>
          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-anthracite">
                {contactContent.fields.name}
                <input
                  required
                  minLength={2}
                  value={payload.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  className="min-h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-industrial-blue"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-anthracite">
                {contactContent.fields.email}
                <input
                  required
                  type="email"
                  value={payload.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="min-h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-industrial-blue"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-anthracite sm:col-span-2">
                {contactContent.fields.phone}
                <input
                  type="tel"
                  value={payload.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="min-h-12 rounded-xl border border-slate-200 px-4 outline-none transition focus:border-industrial-blue"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-anthracite sm:col-span-2">
                {contactContent.fields.message}
                <textarea
                  required
                  minLength={10}
                  rows={5}
                  value={payload.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-industrial-blue"
                />
              </label>
            </div>
            <p className="mt-4 text-xs leading-5 text-anthracite/60">{contactContent.privacy}</p>
            <button
              type="submit"
              disabled={state === "loading"}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-electric-orange px-5 py-3 text-sm font-bold text-white shadow-lg shadow-electric-orange/20 transition hover:bg-[#e86f00] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {state === "loading" ? "Enviando..." : contactContent.submit}
            </button>
            {state === "success" ? <p className="mt-4 text-sm font-semibold text-industrial-blue">{contactContent.success}</p> : null}
            {state === "error" ? <p className="mt-4 text-sm font-semibold text-red-600">{contactContent.error}</p> : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
