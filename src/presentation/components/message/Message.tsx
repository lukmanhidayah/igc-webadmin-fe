import CloseRoundedIcon from "@components/icon/CloseRoundedIcon";
import classes from "./Message.module.css";
import IMessage from "./Message.interface";

const Message = ({
  message = "Terjadi kesalahan, silahkan coba lagi.",
  onClose,
  type = "error",
}: IMessage): JSX.Element => {
  return (
    <div className={`${classes["message-container"]} ${classes[type]}`}>
      <p className={classes["message-text"]}>{message}</p>
      <div className={classes["message-icon"]} onClick={onClose}>
        <CloseRoundedIcon
          data-testid="test-message-icon"
          className={`${
            type === "error" ? "tw-text-red-800" : "tw-text-green-800"
          }`}
        />
      </div>
    </div>
  );
};

export default Message;
