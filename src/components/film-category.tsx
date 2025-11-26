import { Film } from "@/types";
import Link from "next/link";

interface FilmCategoryProps {
  category: string
  films: Film[]
}

export default function FilmCategory({ category, films }: FilmCategoryProps) {
  return (
    <div className="flex gap-10 bg-violet-400 rounded p-6">
      <div className=" text-black font-bold ">{category}</div>

      {films.map((film, index) => (
        <div key={index} className="flex flex-col gap-2 w-72 wrap-break-word">
          <Link href={`/filme/${film.id}`}>
            <img className="aspect-[3/4] w-72" src={film.image} alt={film.name} />
          </Link>

          <p className=" text-center text-black">{film.name}</p>
        </div>
      ))}
    </div>
  )
}