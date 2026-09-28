import type { FrameFormat, PageFrame } from '@/lib/study';
import { frameStatus } from '@/lib/study';

type FrameProps = {
  format: FrameFormat;
  frame: PageFrame;
  /** Loads the image eagerly; for the first screen only. */
  priority?: boolean;
};

/** Image slot. Empty, at the size of the image to come, until the frame has an image. */
export function Frame({ format, frame, priority = false }: FrameProps) {
  const { image, medium } = frame;

  if (image) {
    return (
      <div className={`frame frame-${format} frame-filled`}>
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`frame frame-${format}`} role="img" aria-label={`${medium}. ${frameStatus}`}>
      <span className="voice" aria-hidden="true">{medium}</span>
    </div>
  );
}

/** What the image shows, followed by the status line while the frame is empty. */
export function FrameNote({ frame }: { frame: PageFrame }) {
  return (
    <>
      <span>{frame.caption}</span>
      {frame.image ? null : <span className="caption-status">{frameStatus}</span>}
    </>
  );
}

export function FrameCaption({ frame }: { frame: PageFrame }) {
  return (
    <figcaption className="caption">
      <FrameNote frame={frame} />
    </figcaption>
  );
}
