export interface ICourse {
    title: string;
    description: string;
    type: string; 
    cost: number;
    level: string;
    time: number;
    averageRating: number; 
    numberOfSubscribers: number;
    numberOfLessions: number;
    thumbnail?: string;
}