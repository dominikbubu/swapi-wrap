import { request } from './utils';

const url: string = 'https://swapi.dev/api/';

type Planet = {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

type Planets = {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
};

const getPlanets = (): Promise<Planets> => {
  return request(`${url}planets/`);
};

const getPlanetById = (id: number): Promise<Planet> => {
  return request(`${url}planets/${id}/`);
};

export { getPlanets, getPlanetById };
