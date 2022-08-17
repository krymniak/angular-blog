import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./shared/components/admin-layout/services/auth.service";
import { SharedModules } from "../shared/components/shared.module";
import { AuthGuard } from "./shared/components/admin-layout/services/auth.guard";

@NgModule({
	imports: [
		CommonModule,
		SharedModules,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: '', component: AdminLayoutComponent, children: [
					{ path: '', redirectTo: '/admin/login', pathMatch: 'full' },
					{ path: 'login', component: LoginPageComponent },
					{ path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
					{ path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
					{ path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard] }
				]
			}
		])
	],
	exports: [RouterModule],
	providers: [AuthGuard],
	declarations: [
		AdminLayoutComponent,
		LoginPageComponent,
		DashboardPageComponent,
		CreatePageComponent,
		EditPageComponent
	]
})

export class AdminModule {

}