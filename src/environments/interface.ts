import { interval } from "rxjs"

export interface Environment {
	apiKey: string,
	production: boolean
}

export interface FbAuthResponse {
	idToken: string
}