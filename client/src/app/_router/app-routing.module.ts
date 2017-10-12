/**
 * Created by DatLK on 10/10/2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WalletComponent } from '../wallet/wallet.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserinfoComponent } from '../userinfo/userinfo.component';

const appRoutes : Routes = [
    {
        path : '',
        component : WalletComponent
    },
    {
        path: 'login',
        component : LoginComponent
    },
    {
        path: 'register',
        component : RegisterComponent
    },
    {
        path: 'user-info',
        component: UserinfoComponent
    },
    {
        path:"**",
        component: WalletComponent
    }
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
})

export class AppRoutingModule { }