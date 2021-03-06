import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  loadedData: Subject<any> = new Subject<any>();

  notifyAboutLoadedData(chartData: any){
    this.loadedData.next(chartData);
  }
}
