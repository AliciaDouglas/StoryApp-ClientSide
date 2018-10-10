import { Injectable } from '@angular/core';
import * as AWSCognito from 'amazon-cognito-identity-js';


@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  poolData = {
    UserPoolId : '',
    ClientId : ''
  };

  userPool = new AWSCognito.CognitoUserPool(this.poolData);
  userData = {
    Username : '',
    Pool : this.userPool
  };

  constructor() { }
}
