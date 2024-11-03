interface IButton {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  title: string;
  variant?: "fullColor" | "outline";
  rounded?: "full" | "middle" | "small";
  disabled?: boolean;
  loading?: boolean;
  loadingColor?: "primary-spinner" | "white-spinner";
}

export default IButton;