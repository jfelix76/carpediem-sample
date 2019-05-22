export interface Item {
    id: string;
    item?: string;
    date: string;
}

export interface Todo extends Item {
    todo: string;
}

export interface History extends Todo {
    status: string;
}