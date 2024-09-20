import {CarouselItem} from "@/lib/types";

const board: CarouselItem = {
  title: "Boards",
  description: "Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”",
  url: "/carousel-board.webp"
}

const list: CarouselItem = {
  title: "Lists",
  description: "The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.",
  url: "/carousel-list.webp"
}

const cards: CarouselItem = {
  title: "Cards",
  description: "Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.",
  url: "/carousel-card.webp"
}

const carouselItems: CarouselItem[] = [board, list, cards]

export { carouselItems }