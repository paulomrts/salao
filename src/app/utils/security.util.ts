import { User } from "../models/user.model";

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem('salaouser', btoa(data)); //Encripta o token
        localStorage.setItem('salaotoken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('salaouser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('salaotoken', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('salaouser'); //Data vem em formato string
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null as any;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('salaotoken');
        if (data) {
            return data;
        } else {
            return null as any;
        }
    }

    // Confirma se tem token no banco 

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('salaouser');
        localStorage.removeItem('salaotoken');
    }
}