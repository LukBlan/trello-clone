"use client"

import {Carousel} from "@/components/Carousel/Carousel";
import {carouselItems} from "@/data/carousel-items";

function ProductivitySection() {
  return (
    <section className="min-h-screen p-4 flex flex-col gap-2 text-blue-dark">
      <p className="font-semibold">Trello 101</p>
      <h2 className="font-bold text-xl">A Productivity Powerhouse</h2>
      <p>
        Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear
        view of who’s doing what and what needs to get done. Learn more in our guide for getting started.
      </p>

      <Carousel carouselItems={carouselItems}/>
    </section>
  )
}

export { ProductivitySection }