import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../interfaces/projects';
import { Contacts } from '../interfaces/contacts';


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

  getContactsByProjec(id: number):Observable<Contacts[]>{
    return this.http.get<Contacts[]>(this.baseApiUrl + 'projects/FindProjectContacts/' + id)
  }

  getContactsByUser(id: number):Observable<Contacts[]>{
    return this.http.get<Contacts[]>(this.baseApiUrl + 'clients/FindClientContacts/' + id)
  }

  getProjectsByUser(id: number):Observable<Projects[]>{
    return this.http.get<Projects[]>(this.baseApiUrl + 'projects/FindProjectsByClientId/' + id)
  }




}
