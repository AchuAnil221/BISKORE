import Link from 'next/link';
import Image from 'next/image';

interface BiskoreLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  variant?: 'full' | 'icon';
  className?: string;
  src?: string;
}

const sizes = {
  sm: { height: 40, width: 64 },
  md: { height: 55, width: 88 },
  lg: { height: 65, width: 104 },
  xl: { height: 90, width: 144 },
  '2xl': { height: 140, width: 224 },
  '3xl': { height: 200, width: 320 },
};

export default function BiskoreLogo({
  size = 'md',
  variant = 'full',
  className = '',
  src = '/images/logo_transparent_v2.png',
}: BiskoreLogoProps) {
  const { height, width } = sizes[size];

  return (
    <Link href="/" className={`flex items-center group ${className}`} aria-label="Biskore Dynamics LLP — Home">
      <Image
        src={src}
        alt="Biskore Dynamics LLP Logo"
        width={width}
        height={height}
        style={{ objectFit: 'contain', width: 'auto', height: `${height}px` }}
        priority
      />
    </Link>
  );
}
