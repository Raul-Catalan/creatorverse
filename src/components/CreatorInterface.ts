export interface Creator {
  id: number;
  name: string;
  url: string;
  description: string;
  imageURL: string;
  slug: string;
}

export interface CreatorList {
  creators: Creator[];
}

export interface CreatorCardProps {
  creator: Creator;
  showViewDetailsButton?: boolean;
  showEdit?: boolean;
}