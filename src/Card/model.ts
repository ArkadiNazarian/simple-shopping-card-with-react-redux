export interface Products {
    title: string;
    price: number;
    id: string;
}

export interface CardProduct extends Products {
    amount: number;
}

