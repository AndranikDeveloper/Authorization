interface IInitialState<T> {
  error?: string;
  isLoading: boolean;
  response: T | null;
}
