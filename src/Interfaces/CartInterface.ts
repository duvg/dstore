export interface IProductCart {
    identificador: string;
    titulo: string;
    precio: number;
}

export interface ICart {
    [key: string]: IProductCart
}