const awsmobile = {
    "aws_project_region": "eu-west-3",
    "aws_cognito_identity_pool_id": "eu-west-3:edfcab03-3cab-4b9f-b031-06a6bec6e64f",
    "aws_cognito_region": "eu-west-3",
    "aws_user_pools_id": "eu-west-3_J1fNJvS97",
    "aws_user_pools_web_client_id": "5osvqk68g667ujrju0hg8ov8c6",
    "oauth": {

        domain: "login.metalive.art",
        scope: ["email", "openid"],
        redirectSignIn: "http://localhost:3000/",
        redirectSignOut: "http://localhost:3000/",
        responseType: "code" // or 'token', whatever you configured on Cognito Hosted UI
    },
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ],
    "aws_user_files_s3_bucket": "clientaccountappaafaed1991554ab39253239567204ec14307-staging",
    "aws_user_files_s3_bucket_region": "eu-west-3"
};


export default awsmobile;