import { usePathname } from 'next/navigation';
import { Link, Typography, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { useData, useCustomTheme } from '~/hooks';
import SmallArrow from '~/assets/icons/smallArrowDark.svg';

interface BreadcrumbProps {
  isChain: boolean;
}

export const Breadcrumb = ({ isChain }: BreadcrumbProps) => {
  const pathname = usePathname();
  const { chainData } = useData();
  const { t } = useTranslation();
  const pathNames = pathname ? pathname.split('/').filter((path) => path) : [];

  return (
    <BreadcrumbNav aria-label='breadcrumb'>
      <BreadcrumbLink href='/'>{t('HOME.home')}</BreadcrumbLink>
      {pathNames.map((path, index) => {
        const isLast = index === pathNames.length - 1;
        const displayName = isChain ? chainData?.metadata?.chainName : path;

        return (
          <BreadcrumbItem key={index}>
            <ArrowIcon src={SmallArrow} alt='arrow' />
            {isLast ? (
              <BreadcrumbCurrent aria-current='page'>{displayName}</BreadcrumbCurrent>
            ) : (
              <BreadcrumbLink href={`/${pathNames.slice(0, index + 1).join('/')}`}>{displayName}</BreadcrumbLink>
            )}
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbNav>
  );
};

export const BreadcrumbNav = styled('nav')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
});

export const BreadcrumbLink = styled(Link)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    color: currentTheme.textPrimary,
    textDecoration: 'none',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  };
});

export const BreadcrumbItem = styled('span')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
  };
});

export const ArrowIcon = styled(Image)(() => {
  return {
    width: '1.25rem',
  };
});

export const BreadcrumbCurrent = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '0.875rem',
    color: currentTheme.textSecondary,
    lineHeight: '1.25rem',
  };
});
