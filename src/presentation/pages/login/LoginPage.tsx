// src/presentation/components/LoginPage.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AuthUseCase from "@domain/useCases/AuthUseCase";
import LoginViewModel from "@viewModels/LoginViewModel";
import Message from "@components/message/Message";
import useErrorMessage, {
  initUseErrorMessage,
} from "@lib/hooks/useErrorMessage";
import { IAuthForm } from "@domain/entities/UserEntity";
import LoginRightContent from "@components/login/LoginRightContent";
import LoginLeftContent from "@components/login/LoginLeftContent";

const LoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage, hiddenMessage, clearMessageTimeout] =
    useErrorMessage({ ...initUseErrorMessage });
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }: IAuthForm) => {
    try {
      const authUseCase = new AuthUseCase();
      const loginViewModel = new LoginViewModel(authUseCase, dispatch);

      setIsLoading(true);
      await loginViewModel.login({ email, password });
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      const authUseCase = new AuthUseCase();
      const loginViewModel = new LoginViewModel(authUseCase, dispatch);

      await loginViewModel.loginWithGoogle();
    } catch (error) {
      handleError(error);
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
      <LoginRightContent
        onSubmit={handleLogin}
        loading={isLoading}
        handleLoginWithGoogle={handleLoginWithGoogle}
      />
    </div>
  );
};

export default LoginPage;
