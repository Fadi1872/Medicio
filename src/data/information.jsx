import {
  FaUserDoctor,
  FaRegHospital,
  FaAward,
  FaStaffSnake,
} from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaHandHoldingMedical, FaMedkit, FaLungs } from "react-icons/fa";

export const information = [
  {
    title: "Doctors",
    number: 25,
    icon: <FaUserDoctor />,
  },
  {
    title: "Departments",
    number: 15,
    icon: <FaRegHospital />,
  },
  {
    title: "Research Labs",
    number: 8,
    icon: <ImLab />,
  },
  {
    title: "Awards",
    number: 150,
    icon: <FaAward />,
  },
];

export const additionalInformation = [
  {
    number: "amet consectetur",
    title:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est facilis molestias fugit, ea voluptas illum?",
    icon: <FaHandHoldingMedical />,
  },
  {
    number: "distinctio neque",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic, eveniet sequi atque explicabo possimus.",
    icon: <FaMedkit />,
  },
  {
    number: "atque explicabo",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic, eveniet sequi atque explicabo possimus.",
    icon: <FaStaffSnake />,
  },
  {
    number: "eum atque",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus ratione, officiis voluptate asperiores magnam impedit eum atque.",
    icon: <FaLungs />,
  },
];
