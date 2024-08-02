import { useTranslation } from 'next-i18next';
import { styled, TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';

import SearchDark from '~/assets/icons/searchDark.svg';
import SearchLight from '~/assets/icons/searchLight.svg';
import { useCustomTheme, useStateContext } from '~/hooks';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { searchTerm, setSearchTerm } = useStateContext();
  const { theme } = useCustomTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  return (
    <StyledTextField
      variant='outlined'
      value={searchTerm}
      onChange={handleChange}
      placeholder={t('HOME.DASHBOARD.search')}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Image src={theme === 'dark' ? SearchDark : SearchLight} alt='search' />
          </InputAdornment>
        ),
      }}
    />
  );
};

const StyledTextField = styled(TextField)(() => {
  const { currentTheme } = useCustomTheme();

  return {
    width: '15rem',
    height: '3.5rem',
    borderRadius: `${currentTheme.borderRadius}`,
    border: `1px solid ${currentTheme.backgroundSecondary}`,
    backgroundColor: `${currentTheme.backgroundTertiary}`,
    opacity: 1,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
  };
});
