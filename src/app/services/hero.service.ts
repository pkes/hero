import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { Observable, of } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { Hero } from '../models/hero.interface'

@Injectable({ providedIn: 'root' })
export class HeroService {
  private API_URL = `${environment.apiURL}heros/` // URL to web api

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.API_URL}`).pipe(
      tap({
        complete: () => this.log('fetched heros'),
      }),
      catchError(this.handleError<Hero[]>('getAll', [])),
    )
  }

  /** GET hero by id. Return `undefined` when id not found */
  getNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.API_URL}?id=${id}`
    return this.http.get<Hero[]>(url).pipe(
      map((heros) => heros[0]), // returns a {0|1} element array
      tap((h) => {
        const outcome = h ? `fetched` : `did not find`
        this.log(`${outcome} hero id=${id}`)
      }),
      catchError(this.handleError<Hero>(`get id=${id}`)),
    )
  }

  /** GET hero by id. Will 404 if id not found */
  getById(id: string): Observable<Hero> {
    const url = `${this.API_URL}${id}`
    return this.http.get<Hero>(url).pipe(
      tap((_) => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`get id=${id}`)),
    )
  }

  //////// Save methods //////////

  create(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.API_URL, hero).pipe(
      tap((newHero: Hero) => this.log(`createed hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('create')),
    )
  }

  delete(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${this.API_URL}${id}`).pipe(
      tap((_) => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('delete')),
    )
  }

  update(hero: Hero): Observable<any> {
    return this.http.patch(`${this.API_URL}${hero.id}`, hero).pipe(
      tap((_) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('update')),
    )
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error) // log to console instead

      this.toastr.error(`${operation} failed: ${error.message}`, '3000')

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }

  handleAddHeroError(error: HttpErrorResponse): void {
    this.toastr.error(error.message)
  }

  private log(message: string) {
    this.toastr.show(message, '3000')
  }
}
