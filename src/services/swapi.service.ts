/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
import camelCase from 'camelcase';

export interface Planet {
  id: number;
  name: string;
  population: string;
  rotation_period: string;
  diameter: string;
}

class SwapiServise {
  BASE_URL = 'https://swapi.co/api/';
  async getResourse(url: string): Promise<any> {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('can`t do');
    }

    return await res.json();
  }

  async getAllPeople(): Promise<Planet[]> {
    const res = await this.getResourse(`${this.BASE_URL}people/`);
    return res.results;
  }

  async getPerson(id: number): Promise<{}> {
    return await this.getResourse(`${this.BASE_URL}people/${id}/`);
  }

  async getAllPlanets(): Promise<Planet[]> {
    const res = await this.getResourse(`${this.BASE_URL}planets/`);
    return res.results;
  }

  async getPlanet(id: number): Promise<Planet> {
    return await this.getResourse(`${this.BASE_URL}planets/${id}/`);
  }

  async getAllShips(): Promise<{}[]> {
    const res = await this.getResourse(`${this.BASE_URL}starships/`);
    return res.results;
  }

  async getShip(id: number): Promise<{}> {
    return await this.getResourse(`${this.BASE_URL}starships/${id}/`);
  }

  toCamelCase(value: string): string {
    return camelCase(value);
  }
}

export const swapi = new SwapiServise();
