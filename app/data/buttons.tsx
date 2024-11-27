import { heroSection } from "./heroSection"
import { ButtonProps } from "../types"

export const buttons: ButtonProps[] = [
    {   
        id: 1,
        title: `Buy ${heroSection.coin_name}`,
    },
    {
        id: 2,
        title: `Buy ${heroSection.coin_name} on pump fun`,
        img: [
            {
                src: "/pump.png",
                alt: "Pump Fun",
            },
        
        ],
    },
];
   
