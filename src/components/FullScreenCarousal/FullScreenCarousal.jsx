import Carousel from "react-bootstrap/Carousel";
import "./FullScreenCarousal.css"

function FullScreenCarousal({slides}) {
  return (
    <Carousel className="h-100 z-0">
      {slides.map((element, index) => (
        <Carousel.Item key={index} className="h-100" interval={4000}>
          <img src={element.img} alt="photo" className="carousal_img w-100 h-100 object-fit-cover" />
          <Carousel.Caption className="p-4">
            <h3 className="fs-1">{element.title}</h3>
            <p className="my-4 ">{element.text}</p>
            <a href={element.button_url} className="text-decoration-none px-4 py-1 rounded-2 bg-blue border-0 text-white">Read More</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default FullScreenCarousal;
