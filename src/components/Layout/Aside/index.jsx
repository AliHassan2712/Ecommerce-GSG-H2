//style
import { StyleDiv ,StyleAside } from "./style";
//components
import { Label } from "../../Label";

const menuItems = [
  { label: "Woman's Fashion", icon: true, path: "/womens-fashion" },
  { label: "Men's Fashion", icon: true, path: "/mens-fashion" },
  { label: "Electronics", path: "/electronics" },
  { label: "Home & Outdoor", path: "/home-outdoor" },
  { label: "Sports", path: "/sports" },
  { label: "Baby's & Toys", path: "/babys-toys" },
  { label: "Groceries & Pets", path: "/groceries-pets" },
  { label: "Health & Beauty", path: "/health-beauty" },
];

export const Aside = () => {
  return (
    <>
      <StyleAside>
        <StyleDiv >
          {menuItems.map((item, index) => (
            <Label
              key={index}
              label={item.label}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </StyleDiv>
      </StyleAside>
    </>
  );
};
