import Image from "next/image";
import card from "../../../public/images/card.jpg";

export default function CardBackImg() {
    return (
        <Image src={card} width={200} height={200} alt="back of playing card" />
    );
}
