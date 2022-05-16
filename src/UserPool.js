import { CognitoUserPool } from "amazon-cognito-identity-js"

const poolData = {
    UserPoolId: "us-east-1_UyDuvbXQ2",
    ClientId: "6dht9sjsqghgojaqch3bt6b79l"
}


export default new CognitoUserPool(poolData);