import { useSnackbar } from 'notistack';
import { useCallback } from 'react';

export const useHandleEnqueue = (message: string, variant: 'success' | 'error') => {
  const { enqueueSnackbar } = useSnackbar();

  const handleEnqueue = useCallback(() => {
    enqueueSnackbar(message, {
      autoHideDuration: 2000,
      variant,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    });
  }, [enqueueSnackbar, message, variant]);

  return { handleEnqueue };
};
