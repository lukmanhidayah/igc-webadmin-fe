import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "@redux/language/languageReduxSelector";
import { setLanguage } from "@redux/language/languageReduxReducer";

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const { t } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    dispatch(setLanguage(value));
  };

  return {
    t,
    language,
    handleChangeLanguage,
  };
};
