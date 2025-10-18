
//assets
import controller from "../assets/imgs/controller.png"
import KeyBoard from "../assets/imgs/Keyboard.png"
import Screen from "../assets/imgs/screen.png"
import Table from "../assets/imgs/Table.png"
import Office from "../assets/imgs/office.png"
import Stario from "../assets/imgs/Stario.png"
import Bag from "../assets/imgs/Bag.png"
import Woman from "../assets/imgs/Woman.jpg";
import PlayStation from "../assets/imgs/PlayStaion.png";
import Gucci from "../assets/imgs/Gucci.png";
import Speaker from "../assets/imgs/Speker.png";

//react icons
import { CiCamera, CiClock2, CiKeyboard, CiMonitor, CiSpeaker } from "react-icons/ci";   // Smartphone outline
import { SiGameandwatch } from "react-icons/si"
import { BiBus, BiHeadphone } from "react-icons/bi"
import { FaMoneyBillAlt } from "react-icons/fa"





export const products = [
  {
    id:1,
    discount: "-40%",
    imgSrc: controller,
    prodName: "HAVIT HV-G92 Gamepad",
    prodPrice: "59.99",
    ProdPriceAfter: "$99.99",
    rating: "4",
    ratingNum: "88"

  },

  {
    id:2,
    discount: "-35%",
    imgSrc: KeyBoard,
    prodName: "AK-900 Wired Keyboard",
    prodPrice: "960",
    ProdPriceAfter: "$1160",
    rating: "5",
    ratingNum: "99"
  },

  {
    id:3,
    discount: "-30%",
    imgSrc: Screen,
    prodName: "IPS LCD Gaming Monitor",
    prodPrice: "370",
    ProdPriceAfter: "$400",
    rating: "4",
    ratingNum: "75"
  },

  {
    id:4,
    discount: "-25%",
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    ProdPriceAfter: "$400",
    rating: "5",
    ratingNum: "99"
  },
]

export const bestSellers = [
  {
    imgSrc: Bag,
    prodName: "HAVIT HV-G92 Gamepad",
    prodPrice: "59.99",
    ProdPriceAfter: "$99.99",
    rating: "4",
    ratingNum: "88"

  },

  {
    imgSrc: Stario,
    prodName: "AK-900 Wired Keyboard",
    prodPrice: "960",
    ProdPriceAfter: "$1160",
    rating: "5",
    ratingNum: "99"
  },

  {
    imgSrc: Office,
    prodName: "IPS LCD Gaming Monitor",
    prodPrice: "370",
    ProdPriceAfter: "$400",
    rating: "4",
    ratingNum: "75"
  },


  {
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    ProdPriceAfter: "$400",
    rating: "5",
    ratingNum: "99"
  },


  {
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    ProdPriceAfter: "$400",
    rating: "5",
    ratingNum: "99"
  },

]




export const categories = [
  {
    category: "SmartWatches",
    catName: "SmartWatches",
    icon: CiClock2
  },
  {
    category: "Cameras",
    catName: "Cameras",
    icon: CiCamera
  },
  {
    category: "Gamepads",
    catName: "Gamepads",
    icon: SiGameandwatch
  },
  {
    category: "Speakers",
    catName: "Speakers",
    icon: CiSpeaker
  },
  {
    category: "Monitors",
    catName: "Monitors",
    icon: CiMonitor
  },
  {
    category: "Keyboards",
    catName: "Keyboards",
    icon: CiKeyboard
  },

];



export const ourProducts = [
  {
    newProd: "new",
    imgSrc: Bag,
    prodName: "HAVIT HV-G92 Gamepad",
    prodPrice: "59.99",
    rating: "4",
    ratingNum: "88"

  },

  {
    newProd: "new",
    imgSrc: Stario,
    prodName: "AK-900 Wired Keyboard",
    prodPrice: "960",
    rating: "5",
    ratingNum: "99"
  },

  {
    imgSrc: Office,
    prodName: "IPS LCD Gaming Monitor",
    prodPrice: "370",
    rating: "4",
    ratingNum: "75"
  },


  {
    imgSrc: Office,
    prodName: "IPS LCD Gaming Monitor",
    prodPrice: "370",
    rating: "4",
    ratingNum: "75"
  },


  {
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    rating: "5",
    ratingNum: "99",
    ellipse: true

  },


  {
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    rating: "5",
    ratingNum: "99",
    ellipse: true
  },



  {
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    rating: "5",
    ratingNum: "99",
    ellipse: true

  },


  {
    imgSrc: Table,
    prodName: "S-Series Comfort Chair ",
    prodPrice: "375",
    rating: "5",
    ratingNum: "99",
    ellipse: true
  },
]



export const service = [
  {
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
    icon: BiBus
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
    icon: BiHeadphone
  },
  {
    title: "Money Back Guarantee",
    desc: "we reurn money within 30 days",
    icon: FaMoneyBillAlt
  },
]



export const featuredData = [
  {
    id: 1,
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    image: PlayStation,
    overlayWidth: "60%",
    big: true,
  },
  {
    id: 2,
    title: "Stylish Woman",
    description: "New collection of women's fashion now available.",
    image: Woman,
    overlayWidth: "80%",
  },
  {
    id: 3,
    title: "Gucci Bag",
    description: "Exclusive Gucci bags collection just arrived.",
    image: Gucci,
    overlayWidth: "80%",
  },
  {
    id: 4,
    title: "Wireless Speaker",
    description: "High-quality sound speakers on discount now.",
    image: Speaker,
    overlayWidth: "80%",
  },
];
