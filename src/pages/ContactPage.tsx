import { useState, type FormEvent } from 'react'
import { useLanguage } from '../context/language-context'
import { usePageMeta } from '../hooks/usePageMeta'

export function ContactPage() {
  const { t } = useLanguage()
  const c = t.contactPage
  const [submitted, setSubmitted] = useState(false)

  usePageMeta({
    title: `${c.title} · ${t.meta.title}`,
    description: c.description,
  })

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto w-full max-w-[1440px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">mail</span>
          {c.eyebrow}
        </div>
        <h1 className="font-serif text-[22px] font-bold tracking-tight text-text">{c.title}</h1>
        <p className="max-w-2xl font-sans text-[11px] leading-relaxed text-text-muted">{c.description}</p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft sm:p-8"
        >
          {submitted && (
            <div className="flex items-center gap-2 rounded-lg border border-secondary/30 bg-secondary-soft px-4 py-3 font-sans text-sm text-on-secondary-soft">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              {c.formSuccess}
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-name"
                className="font-sans text-xs font-bold uppercase tracking-wide text-text-muted"
              >
                {c.formName}
              </label>
              <input
                id="contact-name"
                type="text"
                required
                className="rounded-xl border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-email"
                className="font-sans text-xs font-bold uppercase tracking-wide text-text-muted"
              >
                {c.formEmail}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                className="rounded-xl border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-subject"
              className="font-sans text-xs font-bold uppercase tracking-wide text-text-muted"
            >
              {c.formSubject}
            </label>
            <input
              id="contact-subject"
              type="text"
              required
              className="rounded-xl border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="contact-message"
              className="font-sans text-xs font-bold uppercase tracking-wide text-text-muted"
            >
              {c.formMessage}
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              className="resize-none rounded-xl border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/15"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-on-primary shadow-soft transition-transform hover:scale-[1.02]"
          >
            {c.formSubmit}
            <span className="material-symbols-outlined text-[18px]">send</span>
          </button>
        </form>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft">
            <span
              className="material-symbols-outlined text-[26px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
            <h3 className="font-serif text-base font-bold text-text">{c.infoTitle}</h3>
            <p className="font-sans text-sm leading-relaxed text-text-muted">{c.infoText}</p>
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-5 shadow-soft">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">place</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {c.locationLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm text-text">{c.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-t border-border pt-3">
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">translate</span>
              <div>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-wide text-text-muted">
                  {c.languagesLabel}
                </span>
                <p className="mt-0.5 font-sans text-sm text-text">{c.languages}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
