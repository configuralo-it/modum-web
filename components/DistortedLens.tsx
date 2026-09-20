export function DistortedLens() {
  return (
    <div className="distorted-lens" aria-hidden="true">
      <svg width="0" height="0" focusable="false" aria-hidden="true">
        <filter id="modum-distort">
          <feTurbulence type="fractalNoise" baseFrequency="0.018 0.035" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="B" />
        </filter>
      </svg>
      <span className="distorted-lens__inner" />
      <span className="distorted-lens__label">INSPECT / 01</span>
    </div>
  );
}
