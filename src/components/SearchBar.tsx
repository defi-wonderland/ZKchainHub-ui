import { useTranslation } from 'next-i18next';
import { styled, TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';

import SearchDark from '~/assets/icons/searchDark.svg';
import SearchLight from '~/assets/icons/searchLight.svg';
import { useCustomTheme, useStateContext } from '~/hooks';
import { SIconButton } from '~/containers';

import CloseDark from '~/assets/icons/closeDark.svg';
import CloseLight from '~/assets/icons/closeLight.svg';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { searchTerm, setSearchTerm, setIsSearch, isSearch } = useStateContext();
  const { theme } = useCustomTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  return (
    <>
      <StyledTextField
        variant='outlined'
        value={searchTerm}
        onChange={handleChange}
        placeholder={t('HOME.DASHBOARD.search')}
        onClick={() => setIsSearch(true)}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Image src={theme === 'dark' ? SearchDark : SearchLight} alt='search' />
            </InputAdornment>
          ),
        }}
      />
      {isSearch && (
        <>
          <SIconButton onClick={() => setIsSearch(false)} aria-label='close-search'>
            <Image src={theme === 'dark' ? CloseDark : CloseLight} alt='close icon' />
          </SIconButton>
        </>
      )}
    </>
  );
};

const StyledTextField = styled(TextField)(() => {
  const { theme, currentTheme } = useCustomTheme();
  const { isSearch } = useStateContext();

  return {
    width: isSearch ? '95%' : '15rem',
    height: '3.5rem',
    borderRadius: currentTheme.borderRadius,
    border: currentTheme.border,
    backgroundColor: theme === 'dark' ? currentTheme.backgroundTertiary : currentTheme.backgroundSecondary,
    opacity: 1,
    '& .MuiOutlinedInput-root': {
      '& input': {
        color: currentTheme.textPrimary,
      },
      '&::placeholder': {
        color: currentTheme.textPrimary,
        opacity: 1,
      },
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
