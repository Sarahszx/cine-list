'use client';

import FilmCategory from "@/components/film-category";
import { FilmsByCategory } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
    const [allFilms, setAllFilms] = useState<FilmsByCategory[]>([])

    useEffect(() => {
      const fetchFilms = async () => {
        try {
          const response = await fetch('http://localhost:8080/films-grouped-by-category');

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const data = await response.json();
          setAllFilms(data);
        } catch (error) {
          console.error('Error fetching films:', error);
        }
      };

      fetchFilms();
    }, []);

    return (
        <div>
            {allFilms.map((filme, index) => (
                <FilmCategory
                    key={index}
                    category={filme.category}
                    films={filme.films}
                />
            ))}
        </div>
    );
}
