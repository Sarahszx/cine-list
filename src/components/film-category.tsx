import Link from "next/link";


export interface Film {
    id: string
    name: string
    image: string
  
}

interface FilmCategoryProps {
    category: string
    films: Film[]
}

export default function FilmCategory({ category, films }: FilmCategoryProps) {

    return (
        <div className="bg-violet-900 flex gap-10 pb-8 px-20"  > 

            
            <div className="flex gap-10 bg-violet-400 rounded p-6 marg">

        <div className=" text-black font-bold ">{category} </div>

                {films.map((film, index) => (
                    <div key={index}>
                        <Link href={`/filme/${film.id}`}>
                        <img className=" pb-3"src={film.image} alt={film.name} />
                        </Link>
                        <div className=" text-center text-black">{film.name}</div>

                    </div>
                ))}

            </div>
        </div>
    )
}