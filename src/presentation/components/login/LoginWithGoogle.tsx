import Button from "../form/button/Button";
import GoogleIcon from "../icon/GoogleIcon";
import ILoginWithGoogleProps from "./LoginWithGoogle.interface";

const LoginWithGoogle = (props: ILoginWithGoogleProps) => {
  return (
    <Button
      onClick={props.onSubmit}
      type="button"
      variant="outline"
      title="Login with Google"
      icon={<GoogleIcon width={18} height={18} />}
      className="tw-gap-x-2 tw-text-primary-500 tw-border-primary-500"
    />
  );
};

export default LoginWithGoogle;
