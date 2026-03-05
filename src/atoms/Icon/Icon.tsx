import React from 'react';

interface IconProps {
  children: React.ReactNode;
  size?: number;
}

export default function Icon({ children, size = 16 }: IconProps) {
  return <span style={{ display: 'inline-block', width: size, height: size }}>{children}</span>;
}
