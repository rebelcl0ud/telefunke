import { DragEventHandler } from "react";

export interface Card {
    onDragStart?: DragEventHandler<HTMLDivElement>;
}

export function Card({ onDragStart }: Card) {
    return (
        <div
            draggable
            onDragStart={onDragStart}
            className=" flex justify-between h-52 w-36 rounded-xl bg-slate-50 p-2 shadow-sm"
        >
            <p className="">A</p>
            <p className="self-center text-2xl">&#9824;</p>
            <p className="self-end">A</p>
        </div>
    );
}
