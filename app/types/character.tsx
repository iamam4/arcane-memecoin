interface CharacterImageProps {
    src: string;
    alt: string;
}
export interface CharacterProps {
    id: number;
    name: string;
    description: string;
    images: CharacterImageProps[];
}
