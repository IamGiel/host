import { NgModule, Injectable } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserRouteAccessService } from '../../../services/auth/user-route-access.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';

import { NewUserPage } from './new-user';
import { NewUserUpdatePage } from './new-user-update';
import { NewUser, NewUserService, NewUserDetailPage } from '.';

@Injectable({ providedIn: 'root' })
export class NewUserResolve implements Resolve<NewUser> {
  constructor(private service: NewUserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NewUser> {
    const id = route.params.id ? route.params.id : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<NewUser>) => response.ok),
        map((newUser: HttpResponse<NewUser>) => newUser.body)
      );
    }
    return of(new NewUser());
  }
}

const routes: Routes = [
    {
      path: '',
      component: NewUserPage,
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: 'new',
      component: NewUserUpdatePage,
      resolve: {
        data: NewUserResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/view',
      component: NewUserDetailPage,
      resolve: {
        data: NewUserResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    },
    {
      path: ':id/edit',
      component: NewUserUpdatePage,
      resolve: {
        data: NewUserResolve
      },
      data: {
        authorities: ['ROLE_USER']
      },
      canActivate: [UserRouteAccessService]
    }
  ];


@NgModule({
    declarations: [
        NewUserPage,
        NewUserUpdatePage,
        NewUserDetailPage
    ],
    imports: [
        IonicModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        TranslateModule,
        RouterModule.forChild(routes)
    ]
})
export class NewUserPageModule {
}
