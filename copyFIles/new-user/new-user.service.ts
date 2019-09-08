import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { createRequestOption } from 'src/app/shared';
import { NewUser } from './new-user.model';

@Injectable({ providedIn: 'root'})
export class NewUserService {
    private resourceUrl = ApiService.API_URL + '/new-users';

    constructor(protected http: HttpClient) { }

    create(newUser: NewUser): Observable<HttpResponse<NewUser>> {
        return this.http.post<NewUser>(this.resourceUrl, newUser, { observe: 'response'});
    }

    update(newUser: NewUser): Observable<HttpResponse<NewUser>> {
        return this.http.put(this.resourceUrl, newUser, { observe: 'response'});
    }

    find(id: number): Observable<HttpResponse<NewUser>> {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    query(req?: any): Observable<HttpResponse<NewUser[]>> {
        const options = createRequestOption(req);
        return this.http.get<NewUser[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }
}
