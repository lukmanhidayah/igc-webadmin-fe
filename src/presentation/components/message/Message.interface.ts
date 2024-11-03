interface IMessage {
  message?: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  type?: "error" | "success" | string;
}

export default IMessage;
