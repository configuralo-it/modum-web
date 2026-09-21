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

  if (variant === 'detail') {
    return (
      <svg
        className={className}
        viewBox="0 0 900 650"
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative ? true : undefined}
      >
        <defs>
          <linearGradient id="modum-detail-shell" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f5efea" />
            <stop offset=".5" stopColor="#cbc1b8" />
            <stop offset="1" stopColor="#8f8983" />
          </linearGradient>
          <linearGradient id="modum-detail-metal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#676b70" />
            <stop offset=".45" stopColor="#d7d6d2" />
            <stop offset=".7" stopColor="#8a8d91" />
            <stop offset="1" stopColor="#55595e" />
          </linearGradient>
          <filter id="modum-detail-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#3c3f45" floodOpacity=".18" />
          </filter>
        </defs>

        <ellipse cx="474" cy="553" rx="282" ry="38" fill="#3c3f45" opacity=".08" />

        <g filter="url(#modum-detail-shadow)" transform="rotate(-7 450 320)">
          <path
            d="M140 166 C230 94 483 75 654 116 C747 138 790 210 752 284 C714 358 572 410 378 400 C233 392 137 349 104 276 C84 232 95 202 140 166 Z"
            fill="url(#modum-detail-shell)"
            stroke="#3c3f45"
            strokeOpacity=".16"
            strokeWidth="2"
          />
          <path
            d="M159 185 C260 124 489 111 642 143 C708 157 738 198 714 245 C681 309 562 348 392 344 C266 341 178 311 145 263 C121 228 126 205 159 185 Z"
            fill="none"
            stroke="#3c3f45"
            strokeOpacity=".12"
            strokeWidth="2"
          />
          <path
            d="M387 357 C479 362 575 348 650 318"
            fill="none"
            stroke="#fff7f4"
            strokeOpacity=".74"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </g>

        <path
          d="M230 403 C224 463 228 505 259 533 C293 563 366 566 432 564"
          fill="none"
          stroke="url(#modum-detail-metal)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <path
          d="M676 348 C684 432 675 500 641 531 C612 558 555 563 486 563"
          fill="none"
          stroke="url(#modum-detail-metal)"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <line x1="376" y1="488" x2="622" y2="451" stroke="#ff4d00" strokeWidth="14" strokeLinecap="round" />
        <circle cx="229" cy="399" r="23" fill="#ff4d00" stroke="#bd390d" strokeWidth="8" />
        <circle cx="675" cy="345" r="23" fill="#ff4d00" stroke="#bd390d" strokeWidth="8" />

        <g fill="#3c3f45" fontFamily="Montserrat Variable, Arial" fontSize="13" letterSpacing="2">
          <text x="78" y="470">SHELL / EDGE</text>
          <text x="646" y="432">JOINT / 03</text>
        </g>
        <g stroke="#3c3f45" strokeOpacity=".24">
          <line x1="80" y1="483" x2="196" y2="483" />
          <line x1="655" y1="443" x2="742" y2="443" />
        </g>
      </svg>
    );
  }

  if (variant === 'exploded') {
    return (
      <svg
        className={className}
        viewBox="0 0 1000 760"
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : label}
        aria-hidden={decorative ? true : undefined}
      >
        <defs>
          <linearGradient id="modum-ex-shell" x1="0" y1="0" x2=".9" y2="1">
            <stop offset="0" stopColor="#f6f0eb" />
            <stop offset=".54" stopColor="#d3c9c0" />
            <stop offset="1" stopColor="#aaa199" />
          </linearGradient>
          <linearGradient id="modum-ex-metal" x1="0" y1="0" x2="1" y2=".4">
            <stop offset="0" stopColor="#565b60" />
            <stop offset=".42" stopColor="#d9d7d2" />
            <stop offset=".7" stopColor="#85898e" />
            <stop offset="1" stopColor="#55595e" />
          </linearGradient>
          <filter id="modum-ex-shadow" x="-30%" y="-30%" width="160%" height="180%">
            <feDropShadow dx="0" dy="18" stdDeviation="19" floodColor="#3c3f45" floodOpacity=".14" />
          </filter>
        </defs>

        <g opacity=".12" stroke="#3c3f45">
          <line x1="120" y1="80" x2="120" y2="700" />
          <line x1="310" y1="80" x2="310" y2="700" />
          <line x1="500" y1="80" x2="500" y2="700" />
          <line x1="690" y1="80" x2="690" y2="700" />
          <line x1="880" y1="80" x2="880" y2="700" />
        </g>

        <g filter="url(#modum-ex-shadow)">
          <path
            d="M220 110 C300 61 604 58 744 103 C814 126 848 184 819 240 C779 316 626 350 443 332 C301 318 216 278 190 220 C171 177 183 139 220 110 Z"
            fill="url(#modum-ex-shell)"
            stroke="#3c3f45"
            strokeOpacity=".14"
            strokeWidth="2"
          />
          <path
            d="M252 137 C345 99 595 95 722 127 C767 139 789 169 773 202 C744 261 619 291 464 280 C345 272 275 246 249 210 C230 185 231 156 252 137 Z"
            fill="none"
            stroke="#3c3f45"
            strokeOpacity=".12"
            strokeWidth="2"
          />
        </g>

        <g fill="none" stroke="url(#modum-ex-metal)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
          <path d="M305 420 L287 592 Q287 638 342 647 L455 647" />
          <path d="M695 420 L713 592 Q713 638 658 647 L545 647" />
          <path d="M386 435 L377 543" />
          <path d="M614 435 L623 543" />
        </g>

        <line x1="390" y1="552" x2="610" y2="552" stroke="#ff4d00" strokeWidth="16" strokeLinecap="round" />

        <g fill="#ff4d00" stroke="#bd390d" strokeWidth="7">
          <circle cx="305" cy="420" r="21" />
          <circle cx="695" cy="420" r="21" />
          <circle cx="386" cy="435" r="15" />
          <circle cx="614" cy="435" r="15" />
        </g>

        <g stroke="#8c8f93" strokeWidth="7" strokeLinecap="round">
          <line x1="302" y1="365" x2="302" y2="393" />
          <line x1="386" y1="380" x2="386" y2="407" />
          <line x1="614" y1="380" x2="614" y2="407" />
          <line x1="698" y1="365" x2="698" y2="393" />
        </g>

        <g fill="#3c3f45" fontFamily="Montserrat Variable, Arial" fontSize="13" letterSpacing="2">
          <text x="806" y="178">SHELL</text>
          <text x="806" y="501">FRAME</text>
          <text x="118" y="425">JOINT</text>
          <text x="118" y="565">CROSSBAR</text>
        </g>
        <g stroke="#3c3f45" strokeOpacity=".22">
          <line x1="766" y1="183" x2="794" y2="183" />
          <line x1="738" y1="506" x2="794" y2="506" />
          <line x1="177" y1="430" x2="272" y2="430" />
          <line x1="214" y1="570" x2="365" y2="570" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 1000 760"
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
    >
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
          <feDropShadow dx="0" dy="28" stdDeviation="25" floodColor="#3c3f45" floodOpacity=".16" />
        </filter>
      </defs>

      <ellipse cx="525" cy="663" rx="284" ry="35" fill="#3c3f45" opacity=".075" />

      <g filter="url(#modum-hero-shadow)">
        <path
          d="M202 178 C289 102 603 92 755 148 C832 177 854 247 809 312 C754 392 605 421 425 397 C282 378 194 330 173 261 C160 219 171 195 202 178 Z"
          fill="url(#modum-hero-shell)"
          stroke="#3c3f45"
          strokeOpacity=".15"
          strokeWidth="2"
        />
        <path
          d="M230 199 C328 140 592 136 728 174 C777 188 794 223 771 260 C728 326 601 349 446 333 C327 321 254 292 225 249 C206 220 209 211 230 199 Z"
          fill="none"
          stroke="#3c3f45"
          strokeOpacity=".12"
          strokeWidth="2"
        />
        <path
          d="M255 319 C359 362 617 370 757 302"
          fill="none"
          stroke="#fff7f4"
          strokeOpacity=".7"
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>

      <g fill="none" stroke="url(#modum-hero-metal)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
        <path d="M303 390 L287 575 Q286 624 341 636 L448 636" />
        <path d="M711 390 L727 575 Q728 624 673 636 L566 636" />
      </g>

      <line x1="390" y1="548" x2="627" y2="548" stroke="#ff4d00" strokeWidth="15" strokeLinecap="round" />

      <g fill="#ff4d00" stroke="#bd390d" strokeWidth="8">
        <circle cx="303" cy="390" r="23" />
        <circle cx="711" cy="390" r="23" />
      </g>

      <g stroke="#3c3f45" strokeOpacity=".17" strokeWidth="2">
        <line x1="809" y1="190" x2="913" y2="190" />
        <line x1="751" y1="424" x2="913" y2="424" />
        <line x1="122" y1="395" x2="267" y2="395" />
      </g>
      <g fill="#3c3f45" fontFamily="Montserrat Variable, Arial" fontSize="13" letterSpacing="2">
        <text x="828" y="177">FORM</text>
        <text x="793" y="411">MATERIAL</text>
        <text x="122" y="382">JOINT / 03</text>
      </g>
    </svg>
  );
}
