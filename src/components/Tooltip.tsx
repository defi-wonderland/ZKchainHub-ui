import { Tooltip, TooltipProps, styled } from '@mui/material';

export const STooltip = styled(({ className, placement = 'top', ...props }: TooltipProps) => (
  <Tooltip classes={{ popper: className }} placement={placement} disableInteractive arrow {...props} />
))(() => {
  return {
    '& .MuiTooltip-tooltip': {
      fontSize: '1rem',
      borderRadius: '0.5rem',
      padding: '0.25rem 0.5rem',
      maxWidth: 'max-content',
    },
  };
});
