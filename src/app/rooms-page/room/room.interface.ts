export interface RoomImage {
    src: string;
    alt: string;
  }
  
  export interface RoomData {
    id: string,
    title: string;
    description: string;
    capacity: string;
    amenities: string;
    additionalEquipment: string;
    view: string;
    price: number;
    images: RoomImage[];
  }