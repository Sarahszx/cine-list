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
  console.log(data)


  const toEmbedUrl = (url?: string) => {
    if (!url) return '';
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./, '');

      if (host === 'youtu.be') {
        const id = u.pathname.slice(1);
        return `https://www.youtube.com/embed/${id}`;
      }

    
      if (host === 'youtube.com' || host === 'youtube-nocookie.com' || host.endsWith('youtube.com')) {
        if (u.pathname.startsWith('/watch')) {
          const v = u.searchParams.get('v');
          if (v) return `https://www.youtube.com/embed/${v}`;
        }
        if (u.pathname.startsWith('/embed/')) {
          return url;
        }
      }

    
      return url;
    } catch {
      return url;
    }
  };

  const embedUrl = toEmbedUrl(data?.url);

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

            <div className="bg-white text-black w-96 h-96">
                 <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title="Trailer do filme"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}

