import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import { questionsData } from "../../data/askedQuestion";
import AccordionItem from "../AccordionItem/AccordionItem";

const SectionFrequentlyAsked = () => {
  const [selected, setselected] = useState(-1);

  const openClose = (index) => {
    if (selected == index) {
      setselected(-1);
    } else setselected(index);
  };

  return (
    <div className="py-5 bg-sec-blue">
      <Container>
        <Title
          title="Frequently Asked Questions"
          subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nobis?"
        />
        <div className="mt-5">
          {questionsData.map((element, index) => (
            <div key={index} onClick={() => openClose(index)}>
              <AccordionItem
                question={element.question}
                answer={element.answer}
                open={selected == index}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SectionFrequentlyAsked;
