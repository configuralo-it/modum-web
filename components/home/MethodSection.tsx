import { method } from '@/lib/content';

export function MethodSection() {
  return (
    <section id="approach" className="section shell" aria-labelledby="approach-title">
      <header className="section-head grid">
        <h2 id="approach-title" className="heading">{method.title}</h2>
      </header>

      <ol className="steps grid" role="list">
        {method.steps.map((step, index) => (
          <li key={step.title} className="step">
            <span className="step-number" aria-hidden="true">{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
