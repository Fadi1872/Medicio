import { Container } from "react-bootstrap";
import { FaRegClock } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import "./TopBar.css";

const TopBar = ({ time, contact }) => {
  return (
    <div className="bg-blue">
      <Container>
        <div className="d-flex justify-content-md-between justify-content-center     align-items-center topbar_height">
          <div className="text-white d-md-flex align-itmes-center gap-3 d-none">
            <FaRegClock />
            <p className="mb-0">{time}</p>
          </div>
          <div className="text-white d-flex align-itmes-center gap-3">
            <IoIosPhonePortrait />
            <p className="mb-0">{contact}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
