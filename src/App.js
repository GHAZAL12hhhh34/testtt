import React from 'react';
import GoogleAuthButton from './Components/GoogleAuthButton/GoogleAuthButton';


const App = () => {
    const handleSuccess = (response) => {
        console.log('Authentication successful:', response);
        // Send the token to the backend for verification
    };

    const handleFailure = (error) => {
        console.error('Authentication failed:', error);
    };

    return (
        <div>
            <h1>Welcome to My App</h1>
            <GoogleAuthButton onSuccess={handleSuccess} onFailure={handleFailure} />
        </div>
    );
};

export default App;