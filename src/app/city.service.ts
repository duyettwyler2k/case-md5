import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from './model/city';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) {
  }

  getAllCity(): Observable<City[]> {
    return this.http.get<City[]>(`${API_URL}/city`);
  }

  createCity(city: City): Observable<City> {
    city.country = {
      id: city.country
    };
    return this.http.post<City>(`${API_URL}/city`, city);
  }

  editCity(city: City, id: number): Observable<City> {
    city.country = {
      id: city.country
    };
    return this.http.put<City>(`${API_URL}/city/${id}`, city);
  }

  getById(id: number): Observable<City> {
    return this.http.get<City>(`${API_URL}/city/${id}`);
  }

  deleteById(id: number): Observable<City> {
    return this.http.delete<City>(`${API_URL}/city/${id}`);
  }
}
