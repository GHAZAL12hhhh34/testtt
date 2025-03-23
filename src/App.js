import React, { useState } from 'react';
import GoogleAuthButton from './Components/GoogleAuthButton/GoogleAuthButton';
import TodoList from './Components/TodoList/TodoList';
// import GoogleLogin from 'react-google-login';
import { GoogleLogin } from '@react-oauth/google';
import TodoListt from './Components/TodoListt/TodoListt';
import UserList from './Components/UserList/UserList';


const App = () => {
   
    // const responseMessage = (response) => {
    //     console.log(response);
    // };
    // const errorMessage = (error) => {
    //     console.log(error);
    // };
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = () => {
        setMessage(`You entered: ${inputValue}`);
      
    };

    return (
        // <div>
        //     <h1>Welcome to My App</h1>
        //     <TodoList />
        //     <br />
        //     <div>
        //     <h2>React Google Login</h2>
        //     <br />
        //     <br />
        //     <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        //     </div>
        //     <TodoListt />
        //     <UserList />
        // </div>
        <div className="App">
           
        <input type="text" value={inputValue} onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <p>{message}</p>
      </div>
    );
};

export default App;