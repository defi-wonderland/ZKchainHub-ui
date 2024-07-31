import { useState } from 'react';
import { styled, MenuProps, Menu, Box, Button, MenuItem } from '@mui/material';
import Image from 'next/image';

import arrowDown from '~/assets/icons/arrowDown.svg';
import { useCustomTheme } from '~/hooks';

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

  const endIcon = disabled ? null : <Image src={arrowDown} alt='arrow-down' width={16} height={16} />;

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
        data-test={dataTest}
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
          <MenuItem key={explorer} value={explorer} onClick={() => selectItem(explorer)}>
            {explorer}
          </MenuItem>
        ))}
      </StyledMenu>
    </SBox>
  );
};

const SBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

const MenuButton = styled(Button)(() => {
  const { currentTheme } = useCustomTheme();
  return {
    width: '7.5rem',
    height: '3.5rem',
    backgroundColor: `${currentTheme.backgroundSecondary}`,
    borderRadius: `${currentTheme.borderRadius}`,
    textTransform: 'none',
    fontSize: '1rem',
    color: `${currentTheme.textPrimary}`,
    '&:hover': {
      backgroundColor: `${currentTheme.backgroundSecondary}`,
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
      width: '7.5rem',

      '& .MuiMenu-list': {
        padding: '0.4rem 0',
      },

      '& .MuiMenuItem-root': {
        padding: '1.2rem 1.6rem',
        gap: '0.8rem',

        '&:hover': {
          backgroundColor: currentTheme.backgroundSecondary,
        },

        '&:active': {
          backgroundColor: currentTheme.backgroundSecondary,
        },
      },

      '@media (max-width: 600px)': {
        minWidth: 'calc(100% - 7.4rem)',
        ul: {
          padding: '0.2rem 0',
        },

        '& .MuiMenuItem-root': {
          fontSize: '1.4rem',
        },
      },
    },
  };
});
