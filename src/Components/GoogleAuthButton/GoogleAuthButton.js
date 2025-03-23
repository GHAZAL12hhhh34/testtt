import React from 'react';
import  GoogleLogin  from 'react-google-login';

const GoogleAuthButton = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            clientId="822968983296-s7ih4hc3aqpt7d9s5talscv30qbjtu5e.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Login with Google"
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuthButton;