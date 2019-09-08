import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { NewUser } from './new-user.model';
import { NewUserService } from './new-user.service';

@Component({
    selector: 'page-new-user-update',
    templateUrl: 'new-user-update.html'
})
export class NewUserUpdatePage implements OnInit {

    newUser: NewUser;
    isSaving = false;
    isNew = true;
    isReadyToSave: boolean;

    form = this.formBuilder.group({
        id: [],
        name: [null, [Validators.required]],
        companyName: [null, [Validators.required]],
        price: [null, [Validators.required]],
        email: [null, [Validators.required]],
    });

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected navController: NavController,
        protected formBuilder: FormBuilder,
        public platform: Platform,
        protected toastCtrl: ToastController,
        private newUserService: NewUserService
    ) {

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

    }

    ngOnInit() {
        this.activatedRoute.data.subscribe((response) => {
            this.updateForm(response.data);
            this.newUser = response.data;
            this.isNew = this.newUser.id === null || this.newUser.id === undefined;
        });
    }

    updateForm(newUser: NewUser) {
        this.form.patchValue({
            id: newUser.id,
            name: newUser.name,
            companyName: newUser.companyName,
            price: newUser.price,
            email: newUser.email,
        });
    }

    save() {
        this.isSaving = true;
        const newUser = this.createFromForm();
        if (!this.isNew) {
            this.subscribeToSaveResponse(this.newUserService.update(newUser));
        } else {
            this.subscribeToSaveResponse(this.newUserService.create(newUser));
        }
    }

    protected subscribeToSaveResponse(result: Observable<HttpResponse<NewUser>>) {
        result.subscribe((res: HttpResponse<NewUser>) => this.onSaveSuccess(res), (res: HttpErrorResponse) => this.onError(res.error));
    }

    async onSaveSuccess(response) {
        let action = 'updated';
        if (response.status === 201) {
          action = 'created';
        }
        this.isSaving = false;
        const toast = await this.toastCtrl.create({message: `NewUser ${action} successfully.`, duration: 2000, position: 'middle'});
        toast.present();
        this.navController.navigateBack('/tabs/entities/new-user');
    }

    previousState() {
        window.history.back();
    }

    async onError(error) {
        this.isSaving = false;
        console.error(error);
        const toast = await this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        toast.present();
    }

    private createFromForm(): NewUser {
        return {
            ...new NewUser(),
            id: this.form.get(['id']).value,
            name: this.form.get(['name']).value,
            companyName: this.form.get(['companyName']).value,
            price: this.form.get(['price']).value,
            email: this.form.get(['email']).value,
        };
    }

}
