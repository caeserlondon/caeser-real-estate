'use client';

import Link from 'next/link';

interface RollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function RollLink({ href, children, className = '', onClick }: Readonly<RollLinkProps>) {
  return (
    <Link href={href} className={`roll-link ${className}`.trim()} onClick={onClick}>
      <span className="roll-wrap">
        <span className="roll-text">{children}</span>
        <span className="roll-clone" aria-hidden>
          {children}
        </span>
      </span>
    </Link>
  );
}
