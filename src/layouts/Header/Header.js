import classNames from "classnames/bind";
import style from "./Header.module.scss";
const cx = classNames.bind(style);
function Header() {
  return <div className={cx("wrapper")}></div>;
}

export default Header;
