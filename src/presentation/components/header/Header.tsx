import { Select } from "antd";
import BurgerIcon from "@components/icon/BurgerIcon";
import ArrowDownIcon from "@components/icon/ArrowDownIcon";
import toSimpleName from "../../../infrastructure/lib/utils/toSimpleName";
import LogoutIcon from "@components/icon/LogoutIcon";
import languages from "../../../infrastructure/lib/utils/languages";

import "./Header.style.css";
import useHeader from "@lib/hooks/useHeader";
import { useLanguage } from "@lib/hooks/useLanguage";

interface IHeader {
  onBurgerClick: React.MouseEventHandler<HTMLDivElement>;
  onToggleModal: React.MouseEventHandler<HTMLButtonElement>;
  isHideUserMenu: boolean;
}

const Header = ({
  onBurgerClick,
  isHideUserMenu,
  onToggleModal,
}: IHeader): JSX.Element => {
  const { language, handleChangeLanguage } = useLanguage();
  const { fullName, onLogout } = useHeader();

  return (
    <header>
      <nav className="header tw-z-20">
        <div className="left-header">
          <div
            className="tw-block tw-cursor-pointer tw-rounded-full hover:tw-bg-white tw-p-2 hover:tw-bg-opacity-10 md:tw-hidden"
            onClick={onBurgerClick}
          >
            <BurgerIcon />
          </div>
        </div>
        <div className="right-header">
          <div className="tw-w-full tw-flex tw-justify-center tw-items-center">
            <Select
              suffixIcon
              value={language}
              className="tw-w-full"
              options={languages}
              onChange={handleChangeLanguage}
            />
          </div>
          <button onClick={onToggleModal} className="user-container tw-z-20">
            <div className="user-content">
              <div className="user-profile-container tw-z-20">
                <span className="user-profile">{toSimpleName(fullName)}</span>
              </div>

              <div className="user-name-container">
                <h4 className="tw-leading-tight tw-text-md tw-font-semibold">
                  {fullName}
                </h4>
                <p className="tw-text-xs tw-text-black">{"admin"}</p>
              </div>
            </div>
            <div className="icon-container">
              <ArrowDownIcon
                width={16}
                height={16}
                className={`icon ${
                  !isHideUserMenu && "tw-transform tw-rotate-180"
                }`}
              />
            </div>

            <div
              className={`user-menu-container ${
                isHideUserMenu && "tw-hidden"
              } tw-z-10`}
            >
              <ul>
                <li>
                  <div className="user-menu" onClick={onLogout}>
                    <p>Logout</p>
                    <LogoutIcon width={24} height={24} />
                  </div>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
