import React from 'react'
window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change', function() {
        if (this.files && this.files[0]) {
            var img = document.querySelector('img');
            img.onload = () => {
                URL.revokeObjectURL(img.src);  // no longer needed, free memory
            }

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
            
        }
    })
})
function DepoForm(props) {
    return (
        <main>
            <div className = 'box-1'>

                <label>Please upload the front of the check: </label>

                <form className='my-form'>
                    <input type='file' required/>
                    <img id="myImg" src="#"/>
                    
                    <div>
                        <label>Amount: </label>
                        <input 
                            type="number" 
                            name="amount" 
                            id = "currency-field" 
                            
                            min = "0"  
                            placeholder= "0000.00"  
                            required
                        />
                    </div>

                    <div>
                        <label>Choose Account: </label>
                        <select id="accountType" name="account">
                            <option value="checking">Checkings</option>
                            <option value="saving">Savings</option>
                        </select>
                        <input 
                            type="number" 
                            name="accountNum" 
                            required
                        />
                    </div>

                    <div>
                        <label>Date of Deposit: </label>
                        <input type="date" name="date" required/>
                    </div>

                    <button>Submit</button>
                </form>
        </div>
    </main>
    )
}

export default DepoForm
