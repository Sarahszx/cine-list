'use client';

import Header from "@/components/header";
import { Film } from "@/types";
import { X, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

export default function FilmPage(props: PageProps<'/filme/[id]'>) {
  const [data, setData] = useState<Film | null>(null);
  const [showModal, setShowModal] = useState(false)

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
      <Header setSearchTerm={() => {}} />

      <div className="flex gap-4 px-10">
        <img src={data?.image} alt={data?.name} className="h-96 aspect-[4/6] rounded-lg " />

        <div className="flex flex-col gap-4 text-sm">
          <h1 className=" font-extrabold text-xl">{data?.name}</h1>

          <div className="flex gap-4 items-center">
            <span className="mr-4">{data?.year}</span>
            <span>{data?.duration}</span>
            <button onClick={() => setShowModal(true)} className="flex gap-2 items-center w-fit h-10 text-white cursor-pointer py-2 px-4 rounded-full bg-purple-500 hover:bg-purple-400" type="button">
              <span><Youtube /></span>
              <span>
                ASSISTIR AO TRAILER NO YOUTUBE
              </span>
            </button>
          </div>

          <h2 className="font-light">{data?.sinopse}</h2>

          <span className="text-lg font-semibold">Elenco: </span>

          <ul>
            {(data?.cast || []).map((person, index) => (
              <div key={index}>{person}</div>
            ))}
          </ul>
        </div>
      </div>

      {showModal && (
        <div className="absolute w-full h-screen bg-black/80">
          <div className="relative w-full h-full flex justify-center items-center">
            <button onClick={() => setShowModal(prev => !prev)} className="absolute top-5 right-5 cursor-pointer"><X size={24}/></button>

            <div className="bg-white text-black w-96 h-96">Oi</div>
          </div>
        </div>
      )}
    </div>
  );
}

