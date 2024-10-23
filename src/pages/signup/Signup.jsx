import { useRef } from "react";
import sty from "./signup.module.css";
function Signup() {
  const FirstName= useRef();
  const LastName = useRef();
  const Email = useRef();
  const Password = useRef();
  const ConfirmPassword = useRef();
function handleAllSignUpData(e){
  e.preventDefault();
  let firstName = FirstName.current.value;
  let lastName = LastName.current.value;
  let email = Email.current.value;
  let password = Password.current.value;
  let confirmPassword = ConfirmPassword.current.value;
  console.log(firstName)

  FirstName.current.value = "";
  LastName.current.value = "";
  Email.current.value = "";
  Password.current.value = "";
  ConfirmPassword.current.value = "";
}
  return (
    <div className={sty.signupPage_container}>
      <span>Sign Up</span>
      <form action="" onSubmit={handleAllSignUpData}>
        <div>
          <label htmlFor="">firstName:</label>
          <input type="text"  ref={FirstName}/>
        </div>
        <div>
          <label htmlFor="">lastName:</label>
          <input type="text" ref={LastName}/>
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email"  ref={Email}/>
        </div>
        <div>
          <label htmlFor="">Password:</label>
          <input type="password"  ref={Password}/>
        </div>
        <div>
          <label htmlFor="">Confirm Password:</label>
          <input type="password"  ref={ConfirmPassword}/>
        </div>

        <button className="btn btn-warning" type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default Signup;
