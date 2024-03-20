import { EnqueueSnackbar } from 'notistack';

export const handleEnqueue = (
  message: string,
  variant: 'success' | 'error',
  enqueueSnackbar: EnqueueSnackbar,
) => {
  enqueueSnackbar(message, {
    autoHideDuration: 2000,
    variant,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
  });
};
