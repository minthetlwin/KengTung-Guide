import { useState, type FormEvent } from 'react'
import { useLanguage } from '../context/language-context'

export function ContactPage() {
  const { t } = useLanguage()
  const c = t.contactPage
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="mx-auto w-full max-w-[900px] px-gutter py-14 md:px-gutter-lg">
      <div className="mb-10 flex flex-col gap-1.5">
        <div className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-primary">
          <span className="material-symbols-outlined text-[18px]">mail</span>
          {c.eyebrow}
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-text lg:text-4xl">{c.title}</h1>
        <p className="max-w-2xl font-sans text-sm leading-relaxed text-text-muted md:text-base">{c.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
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

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="font-sans text-xs font-bold uppercase tracking-wide text-text-muted">
              {c.formName}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              className="rounded-lg border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary"
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
              className="rounded-lg border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary"
            />
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
              className="rounded-lg border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary"
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
              className="resize-none rounded-lg border border-border bg-bg px-4 py-2.5 font-sans text-sm text-text outline-none transition-colors focus:border-primary"
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

        <div className="flex flex-col gap-3 rounded-2xl border border-border bg-bg-elevated p-6 shadow-soft">
          <span className="material-symbols-outlined text-[24px] text-primary">school</span>
          <h3 className="font-serif text-base font-bold text-text">{c.infoTitle}</h3>
          <p className="font-sans text-sm leading-relaxed text-text-muted">{c.infoText}</p>
        </div>
      </div>
    </div>
  )
}
