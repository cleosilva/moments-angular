import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Response } from '../Response';
import { Comment } from '../Comment';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private baseAPiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseAPiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  createComment(data: Comment): Observable<Response<Comment>> {
    const url = `${this.apiUrl}/${data.momentId}/comments`;
    return this.http.post<Response<Comment>>(url, data);
  }
}
