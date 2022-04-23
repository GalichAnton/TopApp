import { SideBarProps } from "./SideBarProps";
import { Menu } from "../Menu/Menu";

export const SideBar = ({ ...props }: SideBarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};
