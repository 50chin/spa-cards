export interface CardProps {
  product: ICard;
}

interface ICard {
  id: number;
  image: string;
  name: string;
  description: string;
  liked: boolean;
}
