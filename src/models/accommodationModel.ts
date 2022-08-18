import { LocationInterface } from "../data/ApiInterface";

export default interface FullAccommodationDetailsProps {
  id:string;
  title: string;
  subtitle: string;
  description: string;
  type: string ;
  categorization: number;
  personCount: number;
  imageUrl: string;
  freeCancelation: boolean;
  price: number;
  location: string;
  postalCode: string;
  locationID: string;
  capacity: number;
}
