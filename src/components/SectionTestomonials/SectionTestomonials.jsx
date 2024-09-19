import { Container } from "react-bootstrap";
import "./SectionTestomonials.css";
import Title from "../Title/Title";
import CardsCaarosal from "../CardsCaarosal/CardsCaarosal";

const SectionTestomonials = () => {
  return (
    <div className="py-5">
      <Container>
        <Title
          title="Testimonials"
          subTitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, repellendus?"
        />
        <CardsCaarosal />
      </Container>
    </div>
  );
};

export default SectionTestomonials;
