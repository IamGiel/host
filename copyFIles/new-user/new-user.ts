import { Component } from '@angular/core';
import { NavController, ToastController, Platform, IonItemSliding } from '@ionic/angular';
import { filter, map } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { NewUser } from './new-user.model';
import { NewUserService } from './new-user.service';

@Component({
    selector: 'page-new-user',
    templateUrl: 'new-user.html'
})
export class NewUserPage {
    newUsers: NewUser[];

    // todo: add pagination

    constructor(
        private navController: NavController,
        private newUserService: NewUserService,
        private toastCtrl: ToastController,
        public plt: Platform
    ) {
        this.newUsers = [];
    }

    ionViewWillEnter() {
        this.loadAll();
    }

    async loadAll(refresher?) {
        this.newUserService.query().pipe(
            filter((res: HttpResponse<NewUser[]>) => res.ok),
            map((res: HttpResponse<NewUser[]>) => res.body)
        )
        .subscribe(
            (response: NewUser[]) => {
                this.newUsers = response;
                if (typeof(refresher) !== 'undefined') {
                    setTimeout(() => {
                        refresher.target.complete();
                    }, 750);
                }
            },
            async (error) => {
                console.error(error);
                const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
                toast.present();
            });
    }

    trackId(index: number, item: NewUser) {
        return item.id;
    }

    new() {
        this.navController.navigateForward('/tabs/entities/new-user/new');
    }

    edit(item: IonItemSliding, newUser: NewUser) {
        this.navController.navigateForward('/tabs/entities/new-user/' + newUser.id + '/edit');
        item.close();
    }

    async delete(newUser) {
        this.newUserService.delete(newUser.id).subscribe(async () => {
            const toast = await this.toastCtrl.create(
                {message: 'NewUser deleted successfully.', duration: 3000, position: 'middle'});
            toast.present();
            this.loadAll();
        }, (error) => console.error(error));
    }

    view(newUser: NewUser) {
        this.navController.navigateForward('/tabs/entities/new-user/' + newUser.id + '/view');
    }
}
