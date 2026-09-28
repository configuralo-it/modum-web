import { Fragment } from 'react';
import { Frame, FrameCaption } from '@/components/Frame';
import { opening } from '@/lib/content';

export function Opening() {
  return (
    <section id="top" className="opening" aria-labelledby="opening-title">
      <div className="opening-grid">
        <div className="opening-text">
          <h1 id="opening-title" className="title">
            {opening.title.map((phrase, index) => (
              <Fragment key={phrase}>
                {index > 0 ? ' ' : null}
                <span className="phrase">{phrase}</span>
              </Fragment>
            ))}
          </h1>
          <div className="opening-lead">
            <p>{opening.body}</p>
            <a className="action" href="#contact">{opening.action}</a>
          </div>
        </div>

        <figure className="opening-figure">
          <Frame format="stage" frame={opening.frame} priority />
          <FrameCaption frame={opening.frame} />
        </figure>
      </div>
    </section>
  );
}
