import { Frame, FrameNote } from '@/components/Frame';
import { study } from '@/lib/content';
import { getService, type ServiceId } from '@/lib/services';
import { studyFrames } from '@/lib/study';

type FigureLayout = 'wide' | 'wide-end' | 'narrow' | 'broad' | 'half';

function StudyFigure({ service, layout }: { service: ServiceId; layout: FigureLayout }) {
  const frame = studyFrames[service];
  const { name, description } = getService(service);

  return (
    <figure id={`work-${service}`} className={`study-figure study-figure-${layout}`}>
      <Frame format={frame.format} frame={frame} />
      <figcaption className="study-text">
        <div className="study-service">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <p className="caption">
          <FrameNote frame={frame} />
        </p>
      </figcaption>
    </figure>
  );
}

export function StudySection() {
  return (
    <section id="work" className="section shell" aria-labelledby="work-title">
      <header className="section-head grid">
        <h2 id="work-title" className="heading">{study.title}</h2>
        <p>{study.intro}</p>
      </header>

      <div className="study-row grid">
        <StudyFigure service="rendering" layout="wide" />
      </div>

      <div className="study-row grid">
        <StudyFigure service="catalogs" layout="broad" />
        <StudyFigure service="photo-video" layout="narrow" />
      </div>

      <div className="study-row grid">
        <StudyFigure service="configurators" layout="wide-end" />
      </div>

      <div className="study-row grid">
        <StudyFigure service="web" layout="half" />
        <StudyFigure service="automation" layout="half" />
      </div>
    </section>
  );
}
