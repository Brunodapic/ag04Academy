export interface accommodationFormInterface {
  location: string;
  typeOfAccommodation: typeOfAccommodation | undefined;
  number: number;
  checkIn: string;
  checkOut: string;
}

export enum typeOfAccommodation {
  Room,
  House,
  Apartment,
  Suite,
}
