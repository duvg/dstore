// Interface de datos del producto
export interface IProduct {
    identificador: number,
    titulo: string,
    disponibles: number,
    estado: string,
    imagen: string,
    vendedor: number,
    fechaCreacion: string,
    fechaActualizacion: string,
    fechaEliminacion?: string
}

// Interface para el listado de productos
export interface IProducts {
    [key: string] : IProduct,
}

// Interface para la paginación de productos
export interface IPagination {
    total: number,
    count: number,
    per_page: number,
    current_page: number,
    total_pages: number,
}

// Interface para el estado inicial de los productos
export interface IInitialState {
    fetched: boolean,
    fetching: boolean,
    data: [],
    current: object,
    currentPage: number,
    error: boolean,
    paginationProducts: {}
}