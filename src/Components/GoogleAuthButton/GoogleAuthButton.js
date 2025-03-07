import React from 'react';
import  GoogleLogin  from 'react-google-login';

const GoogleAuthButton = ({ onSuccess, onFailure }) => {
    return (
        <GoogleLogin
            clientId="822968983296-d92us0fv4bqo4e0b5edq9o7e74m3tfh7.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Login with Google"
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuthButton;