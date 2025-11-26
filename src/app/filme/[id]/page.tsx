'use client';

import Header from "@/components/header";
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
    <div className="bg-violet-800 min-h-screen flex flex-col gap-10">
      <Header />

      <div className="flex gap-4 px-10">
        <img src={data?.image} alt={data?.name} className="h-96 aspect-[4/6] rounded-lg " />

        <div className="flex flex-col gap-4 text-sm">
          <h1 className=" font-extrabold text-xl">{data?.name}</h1>

          <p>
            <span className="mr-4">{data?.year}</span>
            <span>{data?.duration}</span>
          </p>

          <h2 className="font-light">{data?.sinopse}</h2>

          <span className="text-lg font-semibold">Elenco: </span>

          <ul>
            {(data?.cast || []).map((person, index) => (
              <div key={index}>{person}</div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

