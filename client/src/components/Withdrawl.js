import React from "react";

function Withdrawl(){
  return(
    <div>
      <h1>Withdrawl Page</h1>
      <div class="maindiv">
        <form onSubmit="">
          <label for="wamount">Withdrawl Amount: </label>
          <input type="text" name="wamount"></input><br></br>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default Withdrawl;
