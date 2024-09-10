import { Box, Avatar, Typography, styled } from '@mui/material';
import { useCustomTheme } from '~/hooks';
import { formatDataNumber } from '~/utils';

interface TokenInfoProps {
  avatar: string;
  token: string;
  total: string;
  tokenName: string;
  isLast?: string;
}

interface TvlProps {
  last?: string;
}

export const TokenInfo = ({ avatar, token, total, tokenName, isLast }: TokenInfoProps) => {
  return (
    <ContentBox>
      <TopBox>
        <TokenLogo src={avatar} alt={token} last={isLast} />

        <TextBox>
          <TokenName last={isLast}>{tokenName}</TokenName>
          <TokenTicker last={isLast}>{token}</TokenTicker>
        </TextBox>
      </TopBox>

      {total && <TvlAmount last={isLast}>{formatDataNumber(total, 0, true)}</TvlAmount>}
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

const TokenLogo = styled(Avatar)<TvlProps>(({ last }) => ({
  width: `${last === 'true' ? '1.25rem' : '2.5rem'}`,
  height: `${last === 'true' ? '1.25rem' : '2.5rem'}`,
}));

const TvlAmount = styled(Typography)<TvlProps>(({ last }) => ({
  fontSize: `${last === 'true' ? '0.75rem' : '0.875rem'}`,
  fontWeight: 400,
}));

const TextBox = styled(Box)(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  };
});

const TokenName = styled(Typography)<TvlProps>(({ last }) => ({
  fontSize: `${last === 'true' ? '0.75rem' : '0.875rem'}`,
  fontWeight: 400,
  whiteSpace: 'nowrap',
  margin: '0 0.25rem 0 0',
}));

const TokenTicker = styled(Typography)<TvlProps>(({ last }) => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: `${last === 'true' ? '0.75rem' : '0.875rem'}`,
    fontWeight: 400,
    color: currentTheme.textSecondary,
    whiteSpace: 'nowrap',
    margin: '0',
  };
});
