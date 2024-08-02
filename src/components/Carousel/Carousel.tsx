import {CarouselItem} from "@/lib/types";
import {CarouselCard} from "@/components/Carousel/CarouselCard";

function Carousel({carouselItems}: {carouselItems: CarouselItem[]}) {
  return (
    <ul>
      { carouselItems.map(item => <CarouselCard key={item.title} carouselItem={item} />) }
    </ul>
  )
}

export { Carousel }