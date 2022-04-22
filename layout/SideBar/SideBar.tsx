import { SideBarProps } from "./SideBarProps";
import styles from "./SideBar.module.css";
import cn from "classnames";

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
