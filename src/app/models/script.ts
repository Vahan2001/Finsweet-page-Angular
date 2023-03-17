export interface ChooseData {
    id: number;
    image: string;
    title: string;
    description: string
}
export interface AuthorsData {
    id: number;
    image: string;
    title: string;
    description: string
}
export interface JoinOurData {
    id: number;
    title: string;
    description: string;
    btnText: string
}
export interface MenuData {
    label: string;
    url: string
}
export interface AllPostsData {
    id: number;
    image: string;
    title: string;
    description: string;
    subtitle: string;
    author?: string;
    authordate?: string
}
export interface HomeAllPostsData {
    id: number;
    title: string;
    date: string;
    description: string;
}
export interface Login {
    email: string,
    password: string
}
export interface Token {
    token?: string,
    error?: string
}