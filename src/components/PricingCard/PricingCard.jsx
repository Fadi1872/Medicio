import "./PricingCard.css";

const PricingCard = ({ title, price, features, primary, advanced }) => {
  const allFeatures = Object.entries(features);

  return (
    <div className="text-center border border-light rounded-3 overflow-hidden">
      <div className={`position-relative py-3 ${primary ? "bg-blue text-white" : "bg-light"}`}>
        <p className="mb-0">{title}</p>
        {
            advanced &&
            <p className="bg-blue mb-0 text-white position-absolute bottom-100 start-100 w-100 badge">Advanced</p>
        }
      </div>
      <div className="py-3 d-flex flex-column align-items-center">
        <p className="position-relative">
          <span className="position-absolute top-0 end-100 fw-bold fs-4">
            $
          </span>
          <span className="fw-bold fs-1">{price}</span>
          <span className="opacity-75">/month</span>
        </p>
        {allFeatures.map(([key, value], index) =>
          value ? (
            <p className="mb-2" key={index}>{key}</p>
          ) : (
            <p key={index} className="mb-2 text-decoration-line-through opacity-75">
              {key}
            </p>
          )
        )}
      </div>
      <div className="bg-light py-3">
        <button className="btn-blue rounded-2 px-4 py-2">Buy Now</button>
      </div>
    </div>
  );
};

export default PricingCard;
