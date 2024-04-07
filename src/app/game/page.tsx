"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import Info from "../ui/info";

export default function Page() {
    const [cards, setCards] = useState<string[]>([]);
    console.log(cards);

    const handleOnDrag = (e: React.DragEvent, cardType: Card) => {
        const cardData = JSON.stringify({ cardType });
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", cardData);
    };

    const handleOnDrop = (e: React.DragEvent) => {
        const cardData = e.dataTransfer.getData("text/plain");
        const parsedCardData = JSON.parse(cardData);
        setCards([...cards, parsedCardData.cardType]);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex relative h-full flex-col items-center justify-evenly bg-cameo">
            {/* decks */}
            <div className="flex">
                <div className="mx-12">
                    <Card onDragStart={(e) => handleOnDrag(e, {})} />
                </div>
                <div className="mx-12">
                    <Card onDragStart={(e) => handleOnDrag(e, {})} />
                </div>
            </div>
            {/* hand */}
            <div
                className="relative flex w-full h-52 justify-center md:px-6"
                onDrop={handleOnDrop}
                onDragOver={handleDragOver}
            >
                {cards.map((card, index) => (
                    <Card key={index} />
                ))}
            </div>
            {/* player/game info */}
            <Info />
        </div>
    );
}

// TODOS:
// have a nav that can be used across any pages
// container div
// deck piles div
// display hand div
// info section div
// drap drop
