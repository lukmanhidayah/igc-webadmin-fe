import CardIcon from "@components/icon/CardIcon";
import CertIcon from "@components/icon/CertIcon";
import ChartIcon from "@components/icon/ChartIcon";
import ClickIcon from "@components/icon/ClickIcon";
import CodeIcon from "@components/icon/CodeIcon";
import CreditCardIcon from "@components/icon/CreditCardIcon";
import DeleteIcon from "@components/icon/DeleteIcon";
import DollarIcon from "@components/icon/DollarIcon";
import DonateIcon from "@components/icon/DonateIcon";
import DotIcon from "@components/icon/DotIcon";
import ExcelIcon from "@components/icon/ExcelIcon";
import EyeIcon from "@components/icon/EyeIcon";
import EyeOffIcon from "@components/icon/EyeOff";
import FilterIcon from "@components/icon/FilterIcon";
import FlashIcon from "@components/icon/FlashIcon";
import GameIcon from "@components/icon/GameIcon";
import HomeIcon from "@components/icon/HomeIcon";
import ImageIcon from "@components/icon/ImageIcon";
import ListIcon from "@components/icon/ListIcon";
import MemoIcon from "@components/icon/MemoIcon";
import PercentIcon from "@components/icon/PercentIcon";
import PhoneIcon from "@components/icon/PhoneIcon";
import PromoIcon from "@components/icon/PromoIcon";
import SettingIcon from "@components/icon/SettingIcon";
import TagIcon from "@components/icon/TagIcon";
import TicketIcon from "@components/icon/TicketIcon";
import UserIcon from "@components/icon/UserIcon";
import WalletIcon from "@components/icon/WalletIcon";
import XIcon from "@components/icon/XIcon";

type MappingTIcon = {
  iconType: string;
};

const MappingIcon = (props: MappingTIcon) => {
  switch (props.iconType) {
    case "home":
      return <HomeIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "image":
      return <ImageIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "card":
      return <CardIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "list":
      return <ListIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "tag":
      return <TagIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "phone":
      return <PhoneIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "dollar":
      return <DollarIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "promo":
      return <PromoIcon height={28} width={28} />;
    case "flash":
      return <FlashIcon width={28} />;
    case "credit-card":
      return <CreditCardIcon width={28} />;
    case "game":
      return <GameIcon width={28} />;
    case "ticket":
      return <TicketIcon width={28} />;
    case "wallet":
      return <WalletIcon width={28} />;
    case "percent":
      return <PercentIcon width={28} />;
    case "eye":
      return <EyeIcon width={28} />;
    case "eye-off":
      return <EyeOffIcon width={28} />;
    case "setting":
      return <SettingIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "chart":
      return <ChartIcon width={24} height={24} viewBox="0 0 24 24" />;
    case "click":
      return <ClickIcon width={28} height={28} />;
    case "filter":
      return <FilterIcon width={24} height={24} />;
    case "excel":
      return <ExcelIcon width={24} height={24} />;
    case "cert":
      return <CertIcon width={24} height={24} />;
    case "memo":
      return <MemoIcon width={24} height={24} />;
    case "delete":
      return <DeleteIcon width={24} height={24} />;
    case "dot":
      return <DotIcon width={20} height={20} />;
    case "close":
      return <XIcon width={20} height={20} />;
    case "donate":
      return <DonateIcon width={24} height={24} />;
    case "code":
      return <CodeIcon width={24} height={24} />;
    case "user":
      return <UserIcon width={24} height={24} />;
    default:
      return <DotIcon width={20} height={20} />;
  }
};

export default MappingIcon;
