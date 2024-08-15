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

interface TvlProps {
  isLast: boolean;
}

export const TvlContentBox = ({ avatar, token, total, tokenName, isLast }: TvlContentBoxProps) => {
  return (
    <ContentBox>
      <TopBox>
        <TokenLogo src={avatar} alt={token} isLast={isLast || false} />

        <TextBox>
          <TokenName isLast={isLast || false}>{tokenName}</TokenName>
          <TokenTicker isLast={isLast || false}>{token}</TokenTicker>
        </TextBox>
      </TopBox>

      <TvlAmount isLast={isLast ? isLast : false}>{formatDataNumber(total, 0, true)}</TvlAmount>
    </ContentBox>
  );
};

const ContentBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  zIndex: 1,
  width: '100%',
  height: '100%',
});

const TopBox = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: currentTheme.gap,
    width: '100%',
  };
});

const TokenLogo = styled(Avatar)<TvlProps>(({ isLast }) => ({
  width: `${isLast ? '1.25rem' : '2.5rem'}`,
  height: `${isLast ? '1.25rem' : '2.5rem'}`,
}));

const TvlAmount = styled(Typography)<TvlProps>(({ isLast }) => ({
  fontSize: `${isLast ? '0.75rem' : '0.875rem'}`,
  fontWeight: 400,
}));

const TextBox = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  };
});

const TokenName = styled(Typography)<TvlProps>(({ isLast }) => ({
  fontSize: `${isLast ? '0.75rem' : '0.875rem'}`,
  fontWeight: 400,
  whiteSpace: 'nowrap',
  margin: '0',
}));

const TokenTicker = styled(Typography)<TvlProps>(({ isLast }) => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: `${isLast ? '0.75rem' : '0.875rem'}`,
    fontWeight: 400,
    color: currentTheme.textSecondary,
    whiteSpace: 'nowrap',
    margin: '0',
  };
});
