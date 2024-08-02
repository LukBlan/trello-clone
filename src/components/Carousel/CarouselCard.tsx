import {CarouselItem} from "@/lib/types";

function CarouselCard({carouselItem}: {carouselItem: CarouselItem}) {
  const {title, description, url} = carouselItem;
  return (
    <li className="flex flex-col gap-4">
      <img src={url} />

      <div className="flex flex-col gap-2 border-l-8 rounded border-sky-blue p-4 shadow-sm">
        <h3 className="font-bold">{title}</h3>
        <p className="font-medium">{description}</p>
      </div>
    </li>
  )
}

export { CarouselCard }