import { useEffect, useCallback } from 'react';
import { useTranslation } from 'next-i18next';
import { styled, TextField, InputAdornment, Box } from '@mui/material';

import { useCustomTheme, useSearchContext } from '~/hooks';
import { SIconButton } from '~/containers';
import { Icon } from '~/components';

export const SearchBar = () => {
  const { t } = useTranslation();
  const { searchTerm, setSearchTerm, closeSearch, isSearch, navigateToSearch } = useSearchContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const closeSearchHandler = useCallback(() => {
    closeSearch();
  }, [closeSearch]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isSearch) {
        closeSearchHandler(); // Call closeSearch when Esc is pressed
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearch, closeSearchHandler]);

  return (
    <SearchContainer data-testid='search-bar'>
      <StyledTextField
        variant='outlined'
        value={searchTerm}
        onChange={handleChange}
        placeholder={t('HOME.DASHBOARD.search')}
        onClick={navigateToSearch}
        aria-label={t('HOME.DASHBOARD.search')}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Icon icon='search' alt='Search icon' size={24} />
            </InputAdornment>
          ),
        }}
      />
      {isSearch && (
        <SIconButton onClick={closeSearch} aria-label='close-search'>
          <Icon icon='close' alt='Close search icon' size={24} />
        </SIconButton>
      )}
    </SearchContainer>
  );
};

const SearchContainer = styled(Box)(() => {
  const { currentTheme } = useCustomTheme();
  const { isSearch } = useSearchContext();

  return {
    display: 'flex',
    ...(isSearch && {
      width: '100%',
      padding: currentTheme.padding,
      justifyContent: 'space-between',
      gap: currentTheme.gap,
    }),
  };
});

const StyledTextField = styled(TextField)(() => {
  const { theme, currentTheme } = useCustomTheme();
  const { isSearch } = useSearchContext();

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
        border: `0.0625rem solid ${currentTheme.textPrimary}`,
        borderRadius: currentTheme.borderRadius,
      },
    },
  };
});
