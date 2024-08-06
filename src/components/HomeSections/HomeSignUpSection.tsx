import {GuessLogin} from "@/components/Login/GuessLogin";

function HomeSignUpSection() {
  return (
    <section className="grid lg:grid-cols-2 pt-24 justify-center bg-wave p-4 min-h-screen gap-8">
      <div className="flex flex-col gap-8 text-white text-center justify-items-center">
        <div>
          <h2 className="font-bold text-3xl">Trello brings all your tasks, teammates, and tools together</h2>
          <p>Keep everything in the same place—even if your team isn’t.</p>
        </div>

        <div className="flex max-w-[80rem]">
          <input className="hidden md:block" type="email" />
          <GuessLogin className={"rounded-md p-3"} />
        </div>
      </div>

      <img className="w-0 min-w-full" src="TrelloUICollage_4x.webp" />
    </section>
  )
}

export { HomeSignUpSection }