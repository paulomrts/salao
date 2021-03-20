import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../models/product.model";
import { Security } from "../utils/security.util";

// Classe pode ser injetada em outros componentes

@Injectable({
    providedIn: 'root'
})

export class DataService {

    public url = 'http://localhost:3000/v1/products' //Url onde o DataServices Aponta

    constructor(private http: HttpClient) { }

    public composeHeaders() {

        const token = Security.getToken(); //recupera o token
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
        return headers;
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`); //Pora hora usarei esse link, enquanto não construo o backend proprio
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/accounts/authenticate`, data);
        //Por hora usarei esse link para autenticação na aplicação
    }
    refreshToken() {

        return this.http.post(
            `${this.url}/accounts/refres-token`,
            null,
            { headers: this.composeHeaders() }
        );
    }

    create(data: any){
        return this.http.post(`${this.url}/accounts`,data)
    }

    resetPassword(data: any){
        return this.http.post(`${this.url}/accounts/reset-password`,data);
    }

    getProfile(){
        return this.http.get(`${this.url}/accounts`, {headers: this.composeHeaders()});
    }

    updateProfile(data: any){
        return this.http.put(`${this.url}/accounts`, {headers: this.composeHeaders()});
        
    }

}

/**
post -> criar
put -> atualizar
get-> ler */
