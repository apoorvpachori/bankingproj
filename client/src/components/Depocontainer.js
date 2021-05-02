import React from 'react'
import DepoForm from './components/DepoForm'

class container extends React.Component {
  constructor(){
    super()
    this.state = {
      money: 0, //later it should be the amount in the account
      dod: 0, //date of deposit
      acc: 0 //which account to deposit money in
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMoney() {
      this.setState(prevState => {
        return {
            money : prevState.money + amount //amount is the amount of money deposited from the form
        }
      })
  }

  handleSubmit = function(){
    //submit to API
    alert("success")
  }

  handleChange(event){
      const {name, value, type} = event.target
      this.setState({
          [name]:value
      })
  }

  render(){
    return (
      <div className="deposit">
        <h1>Hello</h1>
        <DepoForm />

      </div>
    );
  }
}

export default Depocontainer;
