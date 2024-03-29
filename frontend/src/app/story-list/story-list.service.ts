import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryListService {

  constructor(private http: HttpClient) { }

  public sendStories(data) {
    return this.http.post('http://localhost:3000/api/add-stories', data);
  }
}
