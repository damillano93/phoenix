import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Usuarios } from '../models/usuarios';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class UsuariosService {

  private serviceURL = 'http://localhost:8080/v1/usuarios';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getUsuarioss(): Promise<Usuarios[]> {
    return this.http.get(this.serviceURL)
      .toPromise()
      .then(response => response.json() as Usuarios[])
      .catch(this.handleError)

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUsuarios(id: string): Promise<Usuarios> {
    const url = `${this.serviceURL}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Usuarios)
      .catch(this.handleError);
      
  }


  update(usuarios: Usuarios): Promise<Usuarios> {
    const url = `${this.serviceURL}/${ usuarios.Id}`;
    return this.http
      .put(url, JSON.stringify(usuarios), {headers: this.headers})
      .toPromise()
      .then(() => usuarios)
      .catch(this.handleError);
  }


  create(usuarios: Usuarios): Promise<Usuarios> {
    return this.http
      .post(this.serviceURL, JSON.stringify(usuarios), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Usuarios)
      .catch(this.handleError);
  }

  delete(id: string): Promise<void> {
    const url = `${this.serviceURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}