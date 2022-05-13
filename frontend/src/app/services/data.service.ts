import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {

  }

  public postConfigFile(file: any): Observable<any> {
    return this.http.post<any>(this.url + "/visualize", file);
  }

  public getChartsData(): Observable<any> {
    return this.http.get<any>(this.url + "/visualize");
  }
}
