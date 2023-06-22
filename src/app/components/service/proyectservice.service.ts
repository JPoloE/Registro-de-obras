import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class ProyectserviceService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getAllProjects(): Observable<Projects[]>{
    return this.http.get<Projects[]>(this.baseApiUrl + 'projects/FindProjects?query=');
  }

  getProject(id: number):Observable<Projects>{
    return this.http.get<Projects>(this.baseApiUrl + 'projects/FindProjectById/' + id)
  }




}
