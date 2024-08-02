"use client"

import {CarouselItem} from "@/lib/types";

function CarouselControlBox({carouselItems, currentIndex, changeIndex} :
  {carouselItems: CarouselItem[], currentIndex: number, changeIndex: (number: number) => void}
) {

  const activeClass = (index: number) => currentIndex == index ? "w-full bg-gray" : ""
  return (
    <ul className="flex gap-2 self-center min-w-40 justify-center">
      { carouselItems.map((carouselItem, itemIndex) =>

        <li key={itemIndex} onClick={() => changeIndex(itemIndex)}
            className={`transition-all duration-300 cursor-pointer w-6 h-4 bg-blue-dark rounded-full ${activeClass(itemIndex)}`}>

        </li>)
      }
    </ul>
  )
}

export { CarouselControlBox }