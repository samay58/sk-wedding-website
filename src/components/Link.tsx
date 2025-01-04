import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  // If it's an external link (starts with http or https), use regular anchor tag
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  // For internal links, use React Router's Link component
  return (
    <RouterLink to={href} className={className} {...props}>
      {children}
    </RouterLink>
  );
}