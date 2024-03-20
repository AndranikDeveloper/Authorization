import { useEffect, useState } from 'react';

export const useThrottle = () => {
  const [disabled, setDisabled] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setDisabled(true);
      const timeout = setTimeout(() => {
        setDisabled(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [clicked]);

  return {
    disabled,
    setClicked,
  };
};
