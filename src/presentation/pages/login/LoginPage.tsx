// src/presentation/components/LoginPage.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import LoginViewModel from "@viewModels/LoginViewModel";
import Message from "@components/message/Message";
import useErrorMessage, {
  initUseErrorMessage,
} from "@lib/hooks/useErrorMessage";
import { ILoginRequest } from "@domain/entities/LoginEntity";
import LoginRightContent from "@components/login/LoginRightContent";
import LoginLeftContent from "@components/login/LoginLeftContent";
import LoginUseCase from "@domain/useCases/LoginUseCase";

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage, hiddenMessage, clearMessageTimeout] =
    useErrorMessage({ ...initUseErrorMessage });
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }: ILoginRequest) => {
    try {
      const loginUseCase = new LoginUseCase();
      const loginViewModel = new LoginViewModel(loginUseCase, dispatch);

      setIsLoading(true);
      await loginViewModel.login({ email, password });
    } catch (error: any) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleError = (error: any) => {
    setMessage({
      isShow: true,
      type: "error",
      content: error.message || "Terjadi Kesalahan, silahkan coba lagi.",
    });
    hiddenMessage();
  };

  return (
    <div className="tw-flex tw-justify-center lg:tw-justify-between tw-h-screen">
      {/* Message */}
      {message.isShow && (
        <Message
          type={message.type}
          message={message.content}
          onClose={clearMessageTimeout}
        />
      )}

      {/* Left Section */}
      <LoginLeftContent />

      {/* Right Section */}
      <LoginRightContent onSubmit={handleLogin} loading={isLoading} />
    </div>
  );
};

export default LoginPage;
