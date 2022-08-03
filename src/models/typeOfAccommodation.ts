export interface accommodationFormInterface {
  location: string;
  typeOfAccommodation: typeOfAccommodation | undefined;
  number: number;
  checkIn: Date;
  checkOut: Date;
}

enum typeOfAccommodation {
  Room = "Room",
  House = "House",
  Apartman = "Apartman",
}

export default typeOfAccommodation;
