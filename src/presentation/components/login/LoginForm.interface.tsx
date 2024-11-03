interface LoginFormProps<T> {
  onSubmit: (props: T) => void;
  handleLoginWithGoogle?: () => void;
  loading: boolean;
}

export default LoginFormProps;
