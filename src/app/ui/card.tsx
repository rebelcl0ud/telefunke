import { Card } from "../types/types";
import CardBackImg from "./cardBackImg";

export function Card({ rank, suit, face = false }: Card) {
    return (
        <>
            {face ? (
                <div className="flex justify-between h-52 w-36 rounded-xl bg-slate-50 p-2 shadow-sm absolute">
                    <p className="">{rank}</p>
                    <p className="self-center text-2xl">{suit}</p>
                    <p className="self-end">{rank}</p>
                </div>
            ) : (
                <div className="flex justify-between h-52 w-36 rounded-xl bg-slate-50 p-2 shadow-sm absolute">
                    <CardBackImg />
                </div>
            )}
        </>
    );
}
