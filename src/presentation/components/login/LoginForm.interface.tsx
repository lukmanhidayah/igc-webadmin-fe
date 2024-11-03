interface LoginFormProps<T> {
  onSubmit: (props: T) => void;
  loading: boolean;
}

export default LoginFormProps;
