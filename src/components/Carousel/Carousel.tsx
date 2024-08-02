"use client"

import {CarouselItem} from "@/lib/types";
import {CarouselCard} from "@/components/Carousel/CarouselCard";
import "./Carousel.css"
import {useState} from "react";
import {CarouselControlBox} from "@/components/Carousel/CarouselControlBox";

function Carousel({carouselItems}: {carouselItems: CarouselItem[]}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselItemsAmount = carouselItems.length

  const changeIndex = (newIndex: number) => setCurrentIndex(newIndex)
  console.log("1")

  return (
    <>
      <ul className="carousel">
        { carouselItems.map(item => <CarouselCard key={item.title} carouselItem={item} />) }
      </ul>

      <CarouselControlBox carouselItems={carouselItems}
                          currentIndex={currentIndex}
                          changeIndex={changeIndex}
      />
    </>


  )
}

export { Carousel }