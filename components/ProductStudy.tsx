type ProductStudyVariant = 'hero' | 'detail' | 'exploded';

type ProductStudyProps = {
  variant?: ProductStudyVariant;
  className?: string;
  decorative?: boolean;
};

export function ProductStudy({
  variant = 'hero',
  className = '',
  decorative = false,
}: ProductStudyProps) {
  const label =
    variant === 'exploded'
      ? 'Exploded construction view of Modum Product Study 01'
      : variant === 'detail'
        ? 'Material and joint detail of Modum Product Study 01'
        : 'Modum Product Study 01 chair concept';

  const a11y = {
    role: decorative ? undefined : 'img',
    'aria-label': decorative ? undefined : label,
    'aria-hidden': decorative ? true : undefined,
  } as const;

  if (variant === 'detail') {
    return (
      <svg className={className} viewBox="0 0 900 650" {...a11y}>
        <defs>
          <linearGradient id="modum-detail-shell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f6f0eb" />
            <stop offset=".52" stopColor="#d0c6bd" />
            <stop offset="1" stopColor="#96908a" />
          </linearGradient>
          <linearGradient id="modum-detail-metal" x1="0" y1="0" x2="1" y2=".2">
            <stop offset="0" stopColor="#565b60" />
            <stop offset=".38" stopColor="#dad8d3" />
            <stop offset=".68" stopColor="#898d92" />
            <stop offset="1" stopColor="#50555a" />
          </linearGradient>
          <filter id="modum-detail-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#3c3f45" floodOpacity=".16" />
          </filter>
        </defs>

        <ellipse cx="482" cy="565" rx="270" ry="34" fill="#3c3f45" opacity=".07" />

        <g filter="url(#modum-detail-shadow)">
          <path
            d="M212 82 C300 36 596 43 690 107 C745 144 752 219 711 266 C654 331 481 344 348 305 C250 276 194 226 199 170 C202 130 222 101 212 82 Z"
            fill="url(#modum-detail-shell)"
            stroke="#3c3f45"
            strokeOpacity=".15"
            strokeWidth="2"
          />
          <path
            d="M247 111 C336 75 565 78 656 128 C693 149 702 194 676 224 C628 280 493 289 382 259 C299 237 253 204 247 164 C244 143 244 126 247 111 Z"
            fill="none"
            stroke="#3c3f45"
            strokeOpacity=".12"
            strokeWidth="2"
          />

          <path
            d="M253 316 C355 286 623 289 709 326 C751 344 756 382 718 405 C642 451 385 452 274 412 C228 395 214 344 253 316 Z"
            fill="url(#modum-detail-shell)"
            stroke="#3c3f45"
            strokeOpacity=".15"
            strokeWidth="2"
          />
          <path
            d="M280 335 C374 314 607 316 683 344"
            fill="none"
            stroke="#fff7f4"
            strokeOpacity=".75"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>

        <g fill="none" stroke="url(#modum-detail-metal)" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round">
          <path d="M310 414 L294 523 Q294 560 338 569 L424 569" />
          <path d="M677 410 L693 523 Q693 560 649 569 L563 569" />
          <path d="M315 302 L315 351" />
          <path d="M665 296 L665 349" />
        </g>

        <line x1="395" y1="493" x2="600" y2="493" stroke="#ff4d00" strokeWidth="13" strokeLinecap="round" />
        <circle cx="309" cy="412" r="21" fill="#ff4d00" stroke="#bd390d" strokeWidth="7" />
        <circle cx="678" cy="409" r="21" fill="#ff4d00" stroke="#bd390d" strokeWidth="7" />

        <g fill="#3c3f45" fontFamily="Montserrat Variable, Arial" fontSize="12" letterSpacing="2">
          <text x="75" y="205">BACK / SHELL</text>
          <text x="78" y="424">SEAT / EDGE</text>
          <text x="650" y="474">JOINT / 03</text>
        </g>
        <g stroke="#3c3f45" strokeOpacity=".24">
          <line x1="77" y1="218" x2="186" y2="218" />
          <line x1="80" y1="437" x2="205" y2="437" />
          <line x1="661" y1="485" x2="748" y2="485" />
        </g>
      </svg>
    );
  }

  if (variant === 'exploded') {
    return (
      <svg className={className} viewBox="0 0 1000 760" {...a11y}>
        <defs>
          <linearGradient id="modum-ex-shell" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="#f6f0eb" />
            <stop offset=".54" stopColor="#d2c8bf" />
            <stop offset="1" stopColor="#aaa199" />
          </linearGradient>
          <linearGradient id="modum-ex-metal" x1="0" y1="0" x2="1" y2=".4">
            <stop offset="0" stopColor="#555a60" />
            <stop offset=".42" stopColor="#dbd9d4" />
            <stop offset=".7" stopColor="#85898e" />
            <stop offset="1" stopColor="#50555a" />
          </linearGradient>
          <filter id="modum-ex-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="16" stdDeviation="17" floodColor="#3c3f45" floodOpacity=".13" />
          </filter>
        </defs>

        <g opacity=".11" stroke="#3c3f45">
          <line x1="120" y1="70" x2="120" y2="710" />
          <line x1="310" y1="70" x2="310" y2="710" />
          <line x1="500" y1="70" x2="500" y2="710" />
          <line x1="690" y1="70" x2="690" y2="710" />
          <line x1="880" y1="70" x2="880" y2="710" />
        </g>

        <g filter="url(#modum-ex-shadow)">
          <path
            d="M238 83 C316 43 598 47 700 106 C758 140 768 204 730 247 C677 307 519 319 390 285 C294 260 235 216 232 166 C230 132 231 103 238 83 Z"
            fill="url(#modum-ex-shell)"
            stroke="#3c3f45"
            strokeOpacity=".14"
            strokeWidth="2"
          />
          <path
            d="M279 327 C372 300 626 301 713 337 C754 354 757 388 722 409 C649 452 390 453 284 416 C240 401 237 348 279 327 Z"
            fill="url(#modum-ex-shell)"
            stroke="#3c3f45"
            strokeOpacity=".14"
            strokeWidth="2"
          />
        </g>

        <g stroke="#8b8f93" strokeWidth="7" strokeLinecap="round">
          <line x1="322" y1="282" x2="322" y2="315" />
          <line x1="678" y1="279" x2="678" y2="315" />
          <line x1="320" y1="430" x2="320" y2="466" />
          <line x1="680" y1="430" x2="680" y2="466" />
        </g>

        <g fill="none" stroke="url(#modum-ex-metal)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
          <path d="M320 485 L298 622 Q297 658 346 667 L446 667" />
          <path d="M680 485 L702 622 Q703 658 654 667 L554 667" />
        </g>

        <line x1="394" y1="580" x2="606" y2="580" stroke="#ff4d00" strokeWidth="15" strokeLinecap="round" />

        <g fill="#ff4d00" stroke="#bd390d" strokeWidth="7">
          <circle cx="320" cy="485" r="20" />
          <circle cx="680" cy="485" r="20" />
        </g>

        <g fill="#3c3f45" fontFamily="Montserrat Variable, Arial" fontSize="13" letterSpacing="2">
          <text x="794" y="157">BACKREST</text>
          <text x="794" y="367">SEAT</text>
          <text x="794" y="551">FRAME</text>
          <text x="112" y="495">JOINT</text>
          <text x="112" y="594">CROSSBAR</text>
        </g>
        <g stroke="#3c3f45" strokeOpacity=".22">
          <line x1="745" y1="162" x2="783" y2="162" />
          <line x1="739" y1="372" x2="783" y2="372" />
          <line x1="714" y1="556" x2="783" y2="556" />
          <line x1="165" y1="500" x2="287" y2="500" />
          <line x1="209" y1="599" x2="365" y2="599" />
        </g>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 1000 760" {...a11y}>
      <defs>
        <linearGradient id="modum-hero-shell" x1=".1" y1="0" x2=".9" y2="1">
          <stop offset="0" stopColor="#f7f1ec" />
          <stop offset=".48" stopColor="#d7cdc4" />
          <stop offset="1" stopColor="#a49b94" />
        </linearGradient>
        <linearGradient id="modum-hero-metal" x1="0" y1="0" x2="1" y2=".2">
          <stop offset="0" stopColor="#555a60" />
          <stop offset=".36" stopColor="#d9d7d3" />
          <stop offset=".62" stopColor="#888c91" />
          <stop offset="1" stopColor="#50555a" />
        </linearGradient>
        <filter id="modum-hero-shadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="28" stdDeviation="24" floodColor="#3c3f45" floodOpacity=".15" />
        </filter>
      </defs>

      <ellipse cx="515" cy="671" rx="278" ry="33" fill="#3c3f45" opacity=".07" />

      <g filter="url(#modum-hero-shadow)">
        <path
          d="M252 112 C334 65 622 70 726 133 C783 168 792 239 749 290 C694 355 526 369 389 331 C287 303 226 253 229 195 C231 157 238 130 252 112 Z"
          fill="url(#modum-hero-shell)"
          stroke="#3c3f45"
          strokeOpacity=".15"
          strokeWidth="2"
        />
        <path
          d="M289 140 C374 106 593 108 689 156 C728 176 738 219 710 252 C662 307 532 316 421 287 C337 265 291 232 285 190 C282 168 284 152 289 140 Z"
          fill="none"
          stroke="#3c3f45"
          strokeOpacity=".12"
          strokeWidth="2"
        />

        <path
          d="M267 336 C368 306 637 307 727 346 C771 365 775 403 736 426 C659 473 394 474 282 432 C234 414 225 360 267 336 Z"
          fill="url(#modum-hero-shell)"
          stroke="#3c3f45"
          strokeOpacity=".15"
          strokeWidth="2"
        />
        <path
          d="M297 354 C389 332 618 334 699 362"
          fill="none"
          stroke="#fff7f4"
          strokeOpacity=".72"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>

      <g fill="none" stroke="url(#modum-hero-metal)" strokeWidth="17" strokeLinecap="round">
        <path d="M321 312 L321 348" />
        <path d="M675 307 L675 347" />
      </g>

      <g fill="none" stroke="url(#modum-hero-metal)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
        <path d="M315 433 L294 596 Q293 635 343 645 L445 645" />
        <path d="M687 430 L708 596 Q709 635 659 645 L557 645" />
      </g>

      <line x1="395" y1="559" x2="607" y2="559" stroke="#ff4d00" strokeWidth="15" strokeLinecap="round" />

      <g fill="#ff4d00" stroke="#bd390d" strokeWidth="8">
        <circle cx="315" cy="433" r="22" />
        <circle cx="687" cy="430" r="22" />
      </g>

      <g stroke="#3c3f45" strokeOpacity=".17" strokeWidth="2">
        <line x1="750" y1="188" x2="904" y2="188" />
        <line x1="752" y1="381" x2="904" y2="381" />
        <line x1="118" y1="438" x2="277" y2="438" />
      </g>
      <g fill="#3c3f45" fontFamily="Montserrat Variable, Arial" fontSize="13" letterSpacing="2">
        <text x="783" y="175">BACK / SHELL</text>
        <text x="805" y="368">SEAT</text>
        <text x="118" y="425">JOINT / 03</text>
      </g>
    </svg>
  );
}
