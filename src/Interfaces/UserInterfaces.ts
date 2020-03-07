export interface ILogin {
    email: string,
    password: string
}

export interface ILoginProps {
    login: (a: ILogin) => void
}