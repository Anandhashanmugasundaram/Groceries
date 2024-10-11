import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Items from "./Items";

export default function Categories({ title, items }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="carousel mx-[10%] flex flex-col gap-3">
      <div className="text-2xl leading-8 font-semibold text-slate-700">
        {title}
      </div>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={false}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container h-[270px] "
        itemClass=""
        removeArrowOnDeviceType={["tablet", "mobile"]}
        renderButtonGroupOutside={true}
        customLeftArrow={
          <button className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-black bg-opacity-20 rounded-lg hover:bg-opacity-30 text-white p-2">
            &#10094;
          </button>
        }
        customRightArrow={
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-20 text-white p-2 rounded-lg z-20 hover:bg-opacity-30">
            &#10095;
          </button>
        }
      >
        {items.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
}