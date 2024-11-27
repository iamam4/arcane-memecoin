interface CharacterImageProps {
    src: string;
    alt: string;
}
interface CharacterProps {
    id: number;
    name: string;
    description: string;
    images: CharacterImageProps[];
}
