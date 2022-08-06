export interface accommodationFormInterface {
  location: string;
  typeOfAccommodation: typeOfAccommodation | undefined;
  number: number;
  checkIn: Date;
  checkOut: Date;
}

enum typeOfAccommodation {
  Room,
  House,
  Apartman,
}

export default typeOfAccommodation;
