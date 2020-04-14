// History y props interface
interface RouteComponentProps<P>{
    match: match<P>;
    location:  Location;
    history: History;
    staticContext?: any; 
}

interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

// Interfaces para los componentes comunes

// Interface para el componente Title
export interface ITitle {
    text: string;
}