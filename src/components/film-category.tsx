export interface Film {
    name: string
    image: string
  
}

interface FilmCategoryProps {
    category: string
    films: Film[]
}

export default function FilmCategory({ category, films }: FilmCategoryProps) {

    return (
        <div className="bg-violet-950 flex gap-10 pb-8"  > 
            <div>{category}</div>
            
            <div className="flex gap-4 ">
                {films.map((film, index) => (
                    <div key={index}>
                        <img className=" pb-4"src={film.image} alt={film.name} />
                        <div className=" text-center">{film.name}</div>
                    </div>
                ))}

            </div>
        </div>
    )
}