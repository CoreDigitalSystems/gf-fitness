import { useState } from 'react';
import { IconCheck, IconArrow } from './Icons';
import { SectionLabel, SectionHeading } from './Primitives';

export const Contact = () => {
  const [form, setForm] = useState({ first: '', last: '', email: '', phone: '', location: '', zip: '' });
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k) => (e) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: null });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.first.trim()) e.first = 'Required';
    if (!form.last.trim()) e.last = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Required';
    if (!form.location) e.location = 'Pick one';
    if (!form.zip.trim()) e.zip = 'Required';
    else if (!/^\d{5}$/.test(form.zip)) e.zip = '5 digits';
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-[#111111] py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mx-auto h-16 w-16 rounded-full bg-[#4B5EFF] flex items-center justify-center mb-8">
            <IconCheck className="h-8 w-8 text-white" />
          </div>
          <SectionHeading className="mb-5">You're in.</SectionHeading>
          <p className="text-[#cccccc] text-lg">
            Look for a confirmation email with your 7-day pass and welcome guide. See you on the floor, {form.first}.
          </p>
        </div>
      </section>
    );
  }

  const field = (k, label, type, placeholder) => (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/60 mb-2">
        {label} {errors[k] && <span className="text-red-400 normal-case ml-1">· {errors[k]}</span>}
      </label>
      <input
        type={type || 'text'}
        value={form[k]}
        onChange={set(k)}
        placeholder={placeholder}
        className={`field w-full px-4 py-3.5 rounded-md text-sm ${errors[k] ? 'border-red-400/60' : ''}`}
      />
    </div>
  );

  return (
    <section id="contact" className="bg-[#111111] py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <SectionLabel>09 · Free Trial</SectionLabel>
          <SectionHeading>
            Try us for 7 days.<br />On the house.
          </SectionHeading>
          <p className="text-[#cccccc] mt-5 max-w-xl mx-auto">
            Full club access, every class, zero commitment. Tell us where to send your pass.
          </p>
        </div>

        <form onSubmit={submit} className="bg-[#0a0a0a] border border-white/10 p-6 lg:p-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {field('first', 'First Name', 'text', 'Alex')}
            {field('last',  'Last Name',  'text', 'Carter')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {field('email', 'Email', 'email', 'you@example.com')}
            {field('phone', 'Phone', 'tel',   '(555) 123-4567')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-white/60 mb-2">
                Select Location {errors.location && <span className="text-red-400 normal-case ml-1">· {errors.location}</span>}
              </label>
              <select
                value={form.location}
                onChange={set('location')}
                className={`field w-full px-4 py-3.5 rounded-md text-sm appearance-none ${errors.location ? 'border-red-400/60' : ''}`}
                style={{
                  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff88' stroke-width='2'><path d='M6 9l6 6 6-6'/></svg>\")",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '16px',
                }}
              >
                <option value="">Choose a club...</option>
                <option>Acworth, GA</option>
                <option>Bristol, CT</option>
                <option>Sugar Hill, GA</option>
              </select>
            </div>
            {field('zip', 'Zip Code', 'text', '30101')}
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full rounded-full bg-[#4B5EFF] hover:bg-[#6171ff] active:bg-[#3d4fe3] text-white font-semibold py-4 text-sm uppercase tracking-[0.2em] transition-colors inline-flex items-center justify-center gap-2"
            >
              Claim My Free Trial <IconArrow className="h-4 w-4" />
            </button>
          </div>

          <p className="text-white/40 text-xs text-center leading-relaxed max-w-md mx-auto">
            By submitting, you agree to receive marketing messages from GF Fitness. Message rates may apply. View our privacy policy.
          </p>
        </form>
      </div>
    </section>
  );
};
