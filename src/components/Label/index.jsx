//react
import { Link } from "react-router-dom";
//react-icons
import { BiRightArrow } from "react-icons/bi";

//style
import { LabelStyle } from "./style";

export const Label = ({ label, icon, path }) => {
  return (
    <LabelStyle>
      <Link to={path}>{label}</Link>
      {icon && <BiRightArrow />}
    </LabelStyle>
  );
};
