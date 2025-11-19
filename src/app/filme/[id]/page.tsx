'use client';

import { Film } from "@/types";
import { useEffect, useState } from "react";

export default function FilmPage(props: PageProps<'/filme/[id]'>) {
  const [data, setData] = useState<Film | null>(null)

  useEffect(() => {
    const fetchFilm = async () => {
      const { id } = await props.params;

      try {
        const response = await fetch(`http://localhost:8080/films/${id}`);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching film:', error);
      }
    };

    fetchFilm();
  }, [props.params]);

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  );
}

