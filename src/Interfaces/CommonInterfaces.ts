export interface ILink {
    rel: string;
    href: string;
}


// Interface para el estado inicial de los productos
export interface IInitialState {
    fetched: boolean;
    fetching: boolean;
    data: [];
    current: object;
    currentPage: number;
    error: boolean;
    pagination: {};
}