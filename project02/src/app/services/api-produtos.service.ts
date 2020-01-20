import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Produto } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ApiProdutosService {
  apiUrl = 'http://localhost:3000/produtos';

  httpOptions = { headers: new HttpHeaders ({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  // Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // Get
  getAll(): Observable<Produto> {
    return this.http.get<Produto>(this.apiUrl).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getOneByID(id): Observable<Produto> {
    return this.http.get<Produto>(this.apiUrl + '/' + id).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Post
  create(entity): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, JSON.stringify(entity), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Put
  update(id, entity): Observable<Produto> {
    return this.http.put<Produto>(this.apiUrl + '/' + id, JSON.stringify(entity), this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // Delete
  delete(id): Observable<Produto> {
    return this.http.delete<Produto>(this.apiUrl + '/' + id).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
