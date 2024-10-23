import { useRef } from "react";
import sty from "./signin.module.css";
import {Link} from 'react-router-dom'
function Signin() {
  
  const Email = useRef();
  const Password = useRef();
  const ConfirmPassword = useRef();
function handleAllSignInData(e){
  e.preventDefault();
  let email = Email.current.value;
  let password = Password.current.value;


  Email.current.value = "";
  Password.current.value = "";
  
}
  return (
    <div className={sty.signinPage_container}>
      <span>Sign In</span>
      <form action="" onSubmit={handleAllSignInData}>
       
        <div>
          <label htmlFor="">Email:</label>
          <input type="email"  ref={Email}/>
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password"  ref={Password}/>
        </div>
      
        <button className="btn btn-warning" type="submit">Sign In</button>
        <Link to="/signup">Don't have an account?signUp</Link>
      </form>
    </div>
  );
}

export default Signin;
