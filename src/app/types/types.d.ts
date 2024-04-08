interface Button {
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    text: string;
}

interface Card {
    face?: boolean;
    rank?: string;
    suit?: string;
}

export { Button, Card, Button };
