export interface CardItem {
    route: string;
    title: string;
    tags: Tags[];
    description: string; 
}

export interface Tags {
    img: string;
    name: string;
}
