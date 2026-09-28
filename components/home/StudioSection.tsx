import { Frame, FrameCaption } from '@/components/Frame';
import { studio } from '@/lib/content';

export function StudioSection() {
  const [first, second] = studio.founders;

  return (
    <section id="studio" className="section shell" aria-labelledby="studio-title">
      <div className="studio grid">
        <div className="studio-text">
          <h2 id="studio-title" className="heading">{studio.title}</h2>
          <p>{studio.body}</p>
          <p className="founders">
            {first}
            <span className="slash" aria-hidden="true">/</span>
            <span className="visually-hidden"> e </span>
            {second}
          </p>
        </div>

        <figure className="studio-figure">
          <Frame format="portrait" frame={studio.frame} />
          <FrameCaption frame={studio.frame} />
        </figure>
      </div>
    </section>
  );
}
