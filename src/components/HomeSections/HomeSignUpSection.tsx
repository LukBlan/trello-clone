import {GuessLogin} from "@/components/Login/GuessLogin";

function HomeSignUpSection() {
  return (
    <section className="grid lg:grid-cols-2 pt-16 justify-center bg-wave p-4 gap-8">
      <div className="flex flex-col gap-8 text-white justify-items-center items-center">
        <div className="grid gap-4 text-center lg:text-left max-w-[30rem] md:max-w-[40rem]">
          <h2 className="font-semibold text-3xl md:text-4xl lg:text-6xl">Trello brings all your tasks, teammates, and tools together</h2>
          <p className="text-xl">Keep everything in the same place-even if your team isn’t.</p>
        </div>

        <div className="flex w-full md:w-3/4 gap-4">
          <input className="hidden md:block basis-2/3 pl-4" type="email" placeholder="email" />
          <GuessLogin className={"rounded-md p-3"} />
        </div>
      </div>

      <img className="w-0 min-w-full" src="TrelloUICollage_4x.webp" />
    </section>
  )
}

export { HomeSignUpSection }