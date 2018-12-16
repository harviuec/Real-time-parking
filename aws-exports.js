import Amplify from 'aws-amplify';

Amplify.configure({
    Auth: {
        // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: 'us-east-2:831ca71e-6e0c-4fde-9022-f930511e4eec',
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',
        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-2_wate3B7SR',
        // OPTIONAL - Amazon Cognito Web Client ID
        userPoolWebClientId: '2m0kd6ttm2ua68sokpai53sv26',
    }
});
