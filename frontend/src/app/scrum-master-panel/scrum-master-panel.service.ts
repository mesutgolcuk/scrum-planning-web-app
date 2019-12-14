import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScrumMasterPanelService {

  constructor(private http: HttpClient) { }

  public getData() {
    return this.http.get('http://localhost:3000/api/get-panel-data');
  }
}
