import Image from 'next/image';

export default function Divider() {
    return(
    <div className="flex w-full justify-center items-center">
        <Image
            src="/HeaderDivider.png"
            alt="divider"
            width={9999}
            height={0.5}
            className="m-20 px-12"
        />
    </div>
    );
}