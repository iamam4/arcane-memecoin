interface ButtonImageProps {
    src: string;
    alt: string;
}

export interface ButtonProps {
    id: number;
    showImage?: boolean;
    glow?: boolean;
    title?: string;
    img?: ButtonImageProps[];
}