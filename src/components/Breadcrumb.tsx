import { usePathname } from 'next/navigation';
import { Link, Typography, styled } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { useData, useCustomTheme } from '~/hooks';
import SmallArrowDark from '~/assets/icons/smallArrowDark.svg';
import SmallArrowLight from '~/assets/icons/smallArrowLight.svg';

interface BreadcrumbProps {
  isChain: boolean;
}

export const Breadcrumb = ({ isChain }: BreadcrumbProps) => {
  const pathname = usePathname();
  const { chainData } = useData();
  const { theme } = useCustomTheme();
  const { t } = useTranslation();

  const pathNames = pathname ? pathname.split('/').filter((path) => path) : [];

  const breadcrumbItems = pathNames.map((path, index) => {
    const isLast = index === pathNames.length - 1;
    const displayName = isChain && isLast ? chainData?.metadata?.name || path : path;
    const href = `/${pathNames.slice(0, index + 1).join('/')}`;

    return {
      key: index,
      isLast,
      displayName,
      href,
    };
  });

  return (
    <BreadcrumbNav aria-label='breadcrumb'>
      <BreadcrumbLink href='/' data-testid='home-breadcrumb'>
        {t('HOME.home')}
      </BreadcrumbLink>

      {breadcrumbItems.map(({ key, isLast, displayName, href }) => (
        <BreadcrumbItem key={key}>
          <ArrowIcon
            src={theme === 'dark' ? SmallArrowDark : SmallArrowLight}
            alt='Arrow icon indicating next breadcrumb'
          />
          {isLast ? (
            <BreadcrumbCurrent aria-current='page'>{displayName}</BreadcrumbCurrent>
          ) : (
            <BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbNav>
  );
};

const BreadcrumbNav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1.5rem',
});

const BreadcrumbLink = styled(Link)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    alignItems: 'center',
    color: currentTheme.textPrimary,
    textDecoration: 'none',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  };
});

const BreadcrumbItem = styled('span')({
  display: 'flex',
  alignItems: 'center',
});

const ArrowIcon = styled(Image)({
  width: '1.25rem',
  height: '0.75rem',
});

const BreadcrumbCurrent = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '0.875rem',
    color: currentTheme.textSecondary,
    lineHeight: '1.25rem',
  };
});
