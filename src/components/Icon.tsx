import Image from 'next/image';

import { useCustomTheme } from '~/hooks';
import { iconPaths } from '~/data';

interface IconProps {
  icon: keyof typeof iconPaths;
  size: number;
  alt: string;
}

export const Icon = ({ icon, size, alt }: IconProps) => {
  const { theme } = useCustomTheme();
  const iconSrc = theme === 'dark' ? iconPaths[icon]?.dark.src : iconPaths[icon]?.light.src;

  return <Image src={iconSrc} alt={alt} width={size} height={size} />;
};
