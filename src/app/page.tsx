'use client';

import FilmCategory from "@/components/film-category";
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
        <div>
            {allFilms.map((film, index) => (
                <FilmCategory
                    key={index}
                    category={film.category}
                    films={film.films}
                />
            ))}
        </div>
    );
}
