
export interface Film {
  id: string;
  name: string;
  image: string;
  category: string;
  cast: string[];
  sinopse: string;
  year: number;
  duration: number;
}

export interface FilmsByCategory {
  category: string;
  films: Film[];
}
