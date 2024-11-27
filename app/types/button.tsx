interface ButtonImageProps {
    src: string;
    alt: string;
}

interface ButtonProps {
    id: number;
    showImage?: boolean;
    glow?: boolean;
    title?: string;
    img?: ButtonImageProps[];
}