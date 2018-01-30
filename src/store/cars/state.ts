import cars from "../../mocks/cars";

export interface CarEntry {
  id: number;
  car_make: string;
  car_model: string;
  car_year: number;
  car_color: string;
  car_image: string;
}

export interface CarsStateDefinition {
  items: CarEntry[];
}

export const initialCarsSate: CarsStateDefinition | any = cars;
