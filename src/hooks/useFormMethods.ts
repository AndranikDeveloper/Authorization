import { useForm } from 'react-hook-form';

export const useFormMethods = () => {
  const methods = useForm<Fields>({ mode: 'onSubmit' });
  const { handleSubmit } = methods;

  return { methods, handleSubmit };
};
