

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote: '“The site felt like a product launch, not a generic agency template. It gave the brand a much sharper identity.”',
    author: 'Founder',
    role: 'SaaS startup',
  },
  {
    quote: '“The build was fast, structured, and easy to extend. We finally have a system our team can keep improving.”',
    author: 'Operations Lead',
    role: 'Growing company',
  },
  {
    quote: '“The level of polish stood out immediately. It feels modern, intentional, and ready to scale.”',
    author: 'Creative Director',
    role: 'Digital studio',
  },
];

export const Testimonials = () => {
  return (
    <section className="section testimonials-section">
      <div className="section-heading reveal">
        <span className="section-kicker">Why teams choose Verplexo</span>
        <h2>Premium output, direct communication, and a strong sense of momentum.</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, idx) => (
          <blockquote className="testimonial reveal" key={idx}>
            <p>{item.quote}</p>
            <footer>
              <strong>{item.author}</strong>
              <span>{item.role}</span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

// verplexo-optim-iter-7

// verplexo-optim-iter-19

// verplexo-optim-iter-31
