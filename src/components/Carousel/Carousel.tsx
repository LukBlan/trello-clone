"use client"

import {CarouselItem} from "@/lib/types";
import {CarouselCard} from "@/components/Carousel/CarouselCard";
import "./Carousel.css"
import {useState} from "react";
import {CarouselControlBox} from "@/components/Carousel/CarouselControlBox";

function Carousel({carouselItems}: {carouselItems: CarouselItem[]}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const changeIndex = (newIndex: number) => setCurrentIndex(newIndex)

  const transitionClasses = ["translate-0", "translate-100", "translate-200"]
  const currentTransitionClass = transitionClasses[currentIndex]

  return (
    <>
      <ul className={`carousel ${currentTransitionClass}`}>
        { carouselItems.map(item => <CarouselCard key={item.title} carouselItem={item} />) }
      </ul>

      <CarouselControlBox carouselItems={carouselItems} currentIndex={currentIndex} changeIndex={changeIndex} />
    </>


  )
}

export { Carousel }