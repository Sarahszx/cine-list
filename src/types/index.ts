
export interface Film {
  id: string;
  name: string;
  image: string;
  category: string;
  cast: string[];
  sinopse: string;
  year: number;
  duration: number;
  url: 'https://www.youtube.com/embed/'
}

export interface FilmsByCategory {
  category: string;
  films: Film[];
}

export interface User {
  id: string;
  email: string;
  password: string;
}