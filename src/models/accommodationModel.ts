export default interface FullAccommodationDetailsProps {
  id:string;
  title: string;
  shortDescription: string;
  subtitle: string;
  description: string;
  type: string ;
  categorization: number;
  personCount: number;
  imageUrl: string;
  freeCancelation: boolean;
  price: number;
  location: any;
  postalCode: string;
  locationID: string;
  capacity: number;
}
