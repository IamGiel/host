import { Component, OnInit } from '@angular/core';
import { NewUser } from './new-user.model';
import { NewUserService } from './new-user.service';
import { NavController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'page-new-user-detail',
    templateUrl: 'new-user-detail.html'
})
export class NewUserDetailPage implements OnInit {
    newUser: NewUser = {};

    constructor(
        private navController: NavController,
        private newUserService: NewUserService,
        private activatedRoute: ActivatedRoute,
        private alertController: AlertController
    ) { }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe((response) => {
            this.newUser = response.data;
        });
    }

    open(item: NewUser) {
        this.navController.navigateForward('/tabs/entities/new-user/' + item.id + '/edit');
    }

    async deleteModal(item: NewUser) {
        const alert = await this.alertController.create({
            header: 'Confirm the deletion?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary'
                }, {
                    text: 'Delete',
                    handler: () => {
                        this.newUserService.delete(item.id).subscribe(() => {
                            this.navController.navigateForward('/tabs/entities/new-user');
                        });
                    }
                }
            ]
        });
        await alert.present();
    }


}
