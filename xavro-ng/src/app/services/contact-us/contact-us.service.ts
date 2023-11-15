import {ApplicationHttpClient} from "../application-http-client.service";
import {CrudService} from "../crud.service";
import {Injectable} from "@angular/core";
import {environment} from '../../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ContactUsService extends CrudService {

    constructor(httpClient: ApplicationHttpClient) {
        super(httpClient);
        this.setEndpoint(environment.CONTACT_US_ENDPOINT);
    }
}
