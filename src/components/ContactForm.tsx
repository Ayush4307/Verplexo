import { useState } from 'react';

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

interface FormFields {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = ({ onSubmitSuccess }: ContactFormProps) => {
  const [fields, setFields] = useState<FormFields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
    }
    if (name === 'email') {
      if (!value.trim()) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Please enter a valid email address';
    }
    if (name === 'message') {
      if (!value.trim()) return 'Message/Goals description is required';
      if (value.trim().length < 10) return 'Please describe your project in at least 10 characters';
    }
    return undefined;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {};
    const newTouched: Record<string, boolean> = {};

    Object.keys(fields).forEach((key) => {
      const fieldName = key as keyof FormFields;
      newTouched[fieldName] = true;
      const error = validateField(fieldName, fields[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
      }
    });

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Mock submit success
      onSubmitSuccess();
      // Reset form
      setFields({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
    }
  };

  return (
    <section id="contact" className="cta-section reveal">
      <div>
        <span className="section-kicker">Start here</span>
        <h2>Want a site or product experience that feels as good as it performs?</h2>
        <p>
          Share your idea, timeline, and goals. We’ll shape the right direction and build a
          launch-ready experience for Verplexo.
        </p>
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              className={`form-control ${errors.name ? 'error-field' : ''}`}
              type="text"
              id="name"
              name="name"
              placeholder="Elon Musk"
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <span className="form-error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              className={`form-control ${errors.email ? 'error-field' : ''}`}
              type="email"
              id="email"
              name="email"
              placeholder="elon@spacex.com"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <span className="form-error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Project Goals & Description</label>
            <textarea
              className={`form-control ${errors.message ? 'error-field' : ''}`}
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what you want to build, your timeline, and metrics..."
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ resize: 'vertical' }}
            />
            {errors.message && <span className="form-error-msg">{errors.message}</span>}
          </div>

          <div className="cta-actions" style={{ marginTop: '0.5rem' }}>
            <button className="button button-primary" type="submit" style={{ width: '100%' }}>
              Send Project Brief
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
