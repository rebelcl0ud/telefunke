"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import Info from "../ui/info";
import { RANKS, SUITS } from "../constants";
import { Card as CardType } from "../types/types";
import Button from "../ui/button";
import clsx from "clsx";

export default function Page() {
    const [cards, setCards] = useState<CardType[]>([]);
    console.log("cards", cards);

    function createDeck() {
        const deck: CardType[] = [];

        SUITS.flatMap((suit: string) => {
            RANKS.map((rank: string) => {
                deck.push({ rank, suit });
            });
        });

        const shuffled2decks = [...deck, ...deck]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }));

        setCards(shuffled2decks);
    }

    return (
        <div className="flex relative h-full flex-col items-center justify-evenly bg-cameo">
            {/* decks */}
            <div className="flex">
                {/* discard */}
                <div className="mx-12 relative right-24">
                    {cards.length ? (
                        <Card
                            face
                            rank={cards[cards.length - 1]?.rank}
                            suit={cards[cards.length - 1]?.suit}
                        />
                    ) : null}
                </div>
                {/* pickup */}
                <div className="mx-12 relative">
                    {cards.map((card, index) => {
                        return <Card key={index} />;
                    })}
                </div>
            </div>
            {/* hand */}
            <div className="relative flex w-full h-52 justify-center md:px-6">
                {/* cards show up here after deal*/}
            </div>
            {/* player/game info */}
            <Info />
            <div>
                <Button
                    disabled={cards.length ? true : false}
                    className={clsx("bg-slate-100 mx-2 p-2 rounded-md", {
                        "pointer-events-none opacity-50 cursor-not-allowed":
                            cards.length,
                    })}
                    onClick={createDeck}
                    text="new game"
                />
                <Button
                    disabled
                    className="bg-slate-100 mx-2 p-2 rounded-md pointer-events-none opacity-50 cursor-not-allowed"
                    text=" deal"
                />
            </div>
        </div>
    );
}

// TODOS:
// drap drop, look into libraries
