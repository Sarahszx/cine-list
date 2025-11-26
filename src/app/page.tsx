'use client';

import FilmCategory from "@/components/film-category";
import Header from "@/components/header";
import { Film, FilmsByCategory } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [allFilms, setAllFilms] = useState<FilmsByCategory[]>([])

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('http://localhost:8080/films');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const categories: string[] = Array.from(new Set(data.map((film: Film) => film.category)));
        const filmsByCategory: FilmsByCategory[] = categories.map((category: string) => ({
          category,
          films: data.filter((film: Film) => film.category === category),
        }));

        setAllFilms(filmsByCategory);
      } catch (error) {
        console.error('Error fetching films:', error);
      }
    };

    fetchFilms();
  }, []);

  return (
    <div className="flex flex-col min-h-screen gap-10 bg-violet-900">
      <Header />

      <div className="flex flex-col gap-10 px-20 pb-10">
        {allFilms.map((film, index) => (
          <FilmCategory
            key={index}
            category={film.category}
            films={film.films}
          />
        ))}
      </div>
    </div>
  );
}
