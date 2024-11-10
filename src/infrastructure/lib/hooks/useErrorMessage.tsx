import { useRef, useState } from "react";

export const initUseErrorMessage = {
  isShow: false,
  content: "",
  type: "error",
};

type TInitMessage = typeof initUseErrorMessage;

const useErrorMessage = (
  props: TInitMessage
): [
  message: TInitMessage,
  setMessage: React.Dispatch<React.SetStateAction<TInitMessage>>,
  hiddenMessage: () => void,
  clearMessageTimeout: () => void
] => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [message, setMessage] = useState({ ...props });

  const hiddenMessage = () => {
    const id = setTimeout(() => {
      setMessage(initUseErrorMessage);
    }, 3000);

    timeoutRef.current = id;
  };

  const clearMessageTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage(initUseErrorMessage);
  };

  return [message, setMessage, hiddenMessage, clearMessageTimeout];
};

export default useErrorMessage;
