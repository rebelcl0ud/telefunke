import { Button } from "../types/types";

export default function Button({
    onClick,
    className,
    text,
    disabled = false,
}: Button) {
    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            {text}
        </button>
    );
}
