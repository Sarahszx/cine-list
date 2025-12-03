'use client';

import { Film } from "@/types";
import { MoveLeft, MoveRight } from "lucide-react";
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
    if (currentIndex < films.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="flex flex-col gap-10 bg-violet-400 rounded p-6">
      <p className=" text-black font-bold ">{category}</p>
      <div className="flex items-start justify-between">
        <button onClick={handlePrev} className=" bg-zinc-900 opacity-50 h-110 w-12 hover:bg-zinc-950 cursor-pointer flex items-center justify-center">
          <MoveLeft />
        </button>
        <div className="flex overflow-hidden gap-4">
          {visibleFilms.map((film, index) => (
            <div key={index} className="flex flex-col gap-2 w-72 wrap-break-word">
              <Link href={`/filme/${film.id}`}>
                <img className="aspect-[3/4] w-72" src={film.image} alt={film.name} />
              </Link>
              <p className="text-center text-black">{film.name}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="bg-zinc-900 opacity-50 h-110 w-12 hover:bg-zinc-950 cursor-pointer flex items-center justify-center">
          <MoveRight />
          </button>
      </div>
    </div>
  )
}

