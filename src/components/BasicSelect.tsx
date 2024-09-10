import { useState } from 'react';
import { styled, MenuProps, Menu, Box, Button, MenuItem } from '@mui/material';

import { useCustomTheme } from '~/hooks';
import { Icon } from '~/components';

interface BasicSelectProps {
  label?: string;
  value: string;
  setValue: (explorer: string) => void;
  list: string[];
  disabled?: boolean;
  dataTest?: string;
}

export const BasicSelect = ({ list, value, setValue, disabled, dataTest }: BasicSelectProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const selectItem = (explorer?: string) => {
    setAnchorEl(null);

    if (!explorer) return;
    setValue(explorer);
  };

  const endIcon = disabled ? null : <Icon icon='arrowDown' alt='arrow-down' size={24} />;

  return (
    <SBox>
      <MenuButton
        aria-controls={open ? 'basic-select-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        variant='contained'
        disableElevation
        onClick={handleClick}
        endIcon={endIcon}
        fullWidth
        disabled={disabled}
        data-testid={dataTest}
      >
        {value}
      </MenuButton>

      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={() => selectItem()}
        MenuListProps={{
          'aria-labelledby': 'basic-select-button',
        }}
      >
        {list.map((explorer) => (
          <SMenuItem key={explorer} value={explorer} onClick={() => selectItem(explorer)}>
            {explorer}
          </SMenuItem>
        ))}
      </StyledMenu>
    </SBox>
  );
};

export const SBox = styled(Box)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    display: 'flex',
    gap: currentTheme.gap,
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  };
});

const MenuButton = styled(Button)(({ theme }) => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '7.5rem',
    height: '3.5rem',
    backgroundColor: currentTheme.backgroundSecondary,
    borderRadius: currentTheme.borderRadius,
    textTransform: 'none',
    fontSize: '1rem',
    color: currentTheme.textPrimary,
    '&:hover': {
      backgroundColor: currentTheme.backgroundHover,
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      justifyContent: 'space-between',
      padding: currentTheme.padding,
      alignItems: 'center',
    },
  };
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    {...props}
  />
))(() => {
  const { currentTheme } = useCustomTheme();
  return {
    '& .MuiPaper-root': {
      marginTop: '0.4rem',
      borderRadius: currentTheme.borderRadius,
      backgroundColor: currentTheme.backgroundSecondary,

      '& .MuiMenu-list': {
        padding: '0.4rem 0',
      },

      '& .MuiMenuItem-root': {
        padding: '1rem 2rem',
        gap: '0.8rem',
        fontSize: '1rem',
        borderRadius: currentTheme.borderRadius,

        '&:hover': {
          backgroundColor: currentTheme.backgroundTertiary,
          borderRadius: currentTheme.borderRadius,
        },

        '&:active': {
          backgroundColor: currentTheme.backgroundSecondary,
        },
      },

      '@media (max-width: 600px)': {
        ul: {
          padding: '0.2rem 0',
        },
        '& .MuiMenu-list': {
          width: '21rem',
        },
        '& .MuiMenuItem-root': {
          fontSize: '1rem',
        },
      },
    },
  };
});

export const SMenuItem = styled(MenuItem)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    fontSize: '1rem',
    borderRadius: currentTheme.borderRadius,
  };
});
