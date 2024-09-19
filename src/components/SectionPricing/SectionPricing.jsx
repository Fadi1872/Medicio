import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import { pricing } from "../../data/pricing";
import PricingCard from "../PricingCard/PricingCard";

const SectionPricing = () => {
  return (
    <div className="py-5">
      <Container>
        <Title
          title="Pricing"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iste?"
        />
        <Row lg={4} md={2} xs={1} className="g-4 mt-4">
          {pricing.map((element, index) => (
            <Col key={index}>
              <PricingCard
                title={element.title}
                price={element.price_per_month}
                features={element.features_avaliable}
                primary={element.primary}
                advanced={element.advanced}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default SectionPricing;
