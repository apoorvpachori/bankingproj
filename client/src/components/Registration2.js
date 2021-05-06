import React from "react";

function Registration(){
  return(
    <div>
      <h1><center>Registration</center></h1>
      <div class="maindiv">
        <form onSubmit="">
          <label for="username">Username </label>
          <input type="text" name="username"></input>
          <br></br>
          <label for="password">Password </label>
          <input type="text" name="password"></input><br></br>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
