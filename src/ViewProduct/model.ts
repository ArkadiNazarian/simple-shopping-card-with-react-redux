export interface Products {
    products: Array<{
        title: string;
        price: number;
        id: string;
    }>
    addtocardhandler: Function;
    hanlder_remove: Function;
}

export interface IProductsModel {
    title: string;
    price: number;
    id: string;
}