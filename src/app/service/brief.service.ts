import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BriefService {

  private apiUrl = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  ) {
  }

  createBrief(
    userName: any,
    projectName: any,
    projectType: any,
    timeCount: any,
    timeUnit: any,
    departement: any,
    priority: any,
    description: any
  ): Observable<any> {
    const dueDate =  timeCount+timeUnit;

    const projectDetails = { userName, projectName, projectType, dueDate, departement, priority, description };
    return this.http.post(`${this.apiUrl}/createBrief`, projectDetails)
  }
}