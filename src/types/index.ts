export interface Film {
  id: string;
  name: string;
  image: string;
  category: string;
}

export interface FilmsByCategory {
  category: string;
  films: Film[];
}
