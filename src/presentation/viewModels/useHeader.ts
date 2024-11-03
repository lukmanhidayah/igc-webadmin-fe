import { useDispatch, useSelector } from "react-redux";
import { setUserToken } from "@redux/user/userReduxReducer";
import { selectFullName } from "@redux/user/userReduxSelector";
import { auth } from "../../infrastructure/firebase/firebaseConfig";

const useHeader = () => {
  const dispatch = useDispatch();
  const fullName = useSelector(selectFullName);

  const onLogout = () => {
    deleteAuthToken();
    dispatch(setUserToken(""));
  };

  const deleteAuthToken = async () => {
    await auth.signOut();
  };

  return { fullName, onLogout };
};

export default useHeader;
