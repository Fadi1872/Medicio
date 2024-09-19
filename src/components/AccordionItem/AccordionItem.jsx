import "./AccordionItem.css";
import { FaChevronRight } from "react-icons/fa";

const AccordionItem = ({ question, answer, open, id }) => {
  return (
    <div
      id="occorodion_item"
      className={`bg-white border border-light mb-3 ${open && "active"}`}
    >
      <div className="d-flex align-items-center justify-content-between gap-4 p-3">
        <p className="mb-0">{question}</p>
        <FaChevronRight className="icon" />
      </div>
      <div className="grid">
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
