export interface User {
    id: string;
    email: string;
    name: string;
}

export interface AppEvents {
    'user:registered': (user: User) => void;
    'order:placed': (orderId: string, amount: number) => void;
}