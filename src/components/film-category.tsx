'use client';

import { Film } from "@/types";
import Link from "next/link";
import { useState } from "react";

interface FilmCategoryProps {
  category: string
  films: Film[]
}

export default function FilmCategory({ category, films }: FilmCategoryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleFilms = films.slice(currentIndex, currentIndex + 3);

  function handleNext() {
  setCurrentIndex((prev) => prev + 1);
}
function handlePrev() {
  setCurrentIndex((prev) => prev - 1);
}
  return (
    <div className="flex gap-10 bg-violet-400 rounded p-6">
      <div className=" text-black font-bold ">{category}</div>
    <div className="flex overflow-hidden gap-4">
 {visibleFilms.map((film, index) => (
  <div key={index} className="flex flex-col gap-2 w-72 wrap-break-word">
    <Link href={`/filme/${film.id}`}>
      <img className="aspect-[3/4] w-72" src={film.image} alt={film.name}/>
    </Link>
    <p className="text-center text-black">{film.name}</p>
  </div>
))}
    </div>
    </div>
  )
}

