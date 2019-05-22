export interface Item {
    id: string;
    item?: string;
    date: string;
}

export interface Todo extends Item {
    id: string
    todo: string;
    date: string;
}

export interface History extends Todo {
    status: string;
}