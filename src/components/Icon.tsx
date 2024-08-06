import Image from 'next/image';

import { useCustomTheme } from '~/hooks';

interface IconProps {
  darkIcon: string;
  lightIcon: string;
  size: number;
  alt: string;
}

export const Icon = ({ darkIcon, lightIcon, size, alt }: IconProps) => {
  const { theme } = useCustomTheme();

  return (
    <>
      {theme === 'dark' ? (
        <Image src={darkIcon} alt={alt} width={size} height={size} />
      ) : (
        <Image src={lightIcon} alt={alt} width={size} height={size} />
      )}
    </>
  );
};
