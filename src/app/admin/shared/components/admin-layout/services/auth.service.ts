import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { User } from "src/app/shared/components/interfaces";
import { Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { FbAuthResponse } from "src/environments/interface";

@Injectable()

export class AuthService {
	constructor(private htttp: HttpClient) {

	}
	get token(): string {
		return ''
	}
	login(user: User): Observable<any> {
		return this.htttp.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
			.pipe(
				tap(this.setToken)
			)
	}

	logout() {

	}

	isAuthenticated(): boolean {
		return !!this.token
	}

	private setToken(response: any) {
		console.log(response)
	}
}
