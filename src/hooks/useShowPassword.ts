import { useState } from 'react';

export const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  return {
    showPassword,
    handleClickShowPassword,
    showConfirmPassword,
    handleClickShowConfirmPassword,
  };
};
