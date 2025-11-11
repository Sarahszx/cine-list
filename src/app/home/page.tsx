import FilmCategory, { Film } from "@/components/film-category";

const allFilms: { category: string; films: Film[] }[] = [
    {
        category: 'AÇÃO',
        films: [
            {
                image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/94/12/24/20304627.jpg',
                name: 'Piratas do Caribe',
            },
            {
                image: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/94/12/24/20304627.jpg',
                name: 'Piratas do Caribe',
            },
        ]
    },
    {
        category: 'ROMANCE',
        films: [
            {
                image: 'https://br.web.img2.acsta.net/c_310_420/pictures/14/12/11/15/29/051042.jpg',
                name: 'Simplesmente Acontece',
            }
        ]
    }
    
]

export default function Home () {

    return (
        <div>
            {allFilms.map((filme,index)=>(
                <div key={index}>
                    <FilmCategory category={filme.category} films={filme.films}/>

                </div>
            ))}
        </div>
    )
}