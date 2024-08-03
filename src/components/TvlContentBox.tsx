import { Box, Avatar, Typography, styled } from '@mui/material';
import { useCustomTheme } from '~/hooks';
import { formatDataNumber } from '~/utils';

interface TvlContentBoxProps {
  avatar: string;
  token: string;
  total: number;
  tokenName: string;
  isLast?: boolean;
}

export const TvlContentBox = ({ avatar, token, total, tokenName, isLast }: TvlContentBoxProps) => {
  return (
    <ContentBox>
      <TopBox>
        <TokenLogo src={avatar} alt={token} isLast={isLast || false} />
        <TokenName>{tokenName}</TokenName>
        <TokenTicker>{token}</TokenTicker>
      </TopBox>

      <Typography>{formatDataNumber(total, 0, true)}</Typography>
    </ContentBox>
  );
};

const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 1,
});

const TopBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

interface TokenLogoProps {
  isLast: boolean;
}

const TokenLogo = styled(Avatar)<TokenLogoProps>(({ isLast }) => ({
  width: `${isLast ? '1.25rem' : '2rem'}`,
  height: `${isLast ? '1.25rem' : '2rem'}`,
}));

const TokenTicker = styled(Typography)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '0.75rem',
    fontWeight: 400,
    color: currentTheme.textSecondary,
  };
});

const TokenName = styled(Typography)({
  fontSize: '0.75rem',
  fontWeight: 400,
});
