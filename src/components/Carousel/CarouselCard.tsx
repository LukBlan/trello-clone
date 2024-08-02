import {CarouselItem} from "@/lib/types";

function CarouselCard({carouselItem}: {carouselItem: CarouselItem}) {
  const {title, description, url} = carouselItem;
  return (
    <li>
      <img src={url} />

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export { CarouselCard }