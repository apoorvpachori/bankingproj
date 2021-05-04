import React from "react"
class AccountPage extends React.Component {
    constructor(){
      super()
      this.state = {
          amount1: "",
          istrue: false,
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
      const {name,value,type,checked} = event.tatget
      type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
      this.setState({
        amount1: event.tatget,
    
      })
    }
    render(){
    return (
      <div className="App">
        {/* purpose of this page is to open / close accounts 
      Write section of api that will create account for a user
      create section of api that will close account for a user */}
        <h1>Open/Close Account Page</h1>
        <h3>If you want to open a new Account, enter the account name: </h3>
        <form>
          <input type="text " />
        </form>
        <br/><br/>
        <h3>If you want to delete an account, check the account and press submit:</h3>
        <form>
        <input 
          type="checkbox"
          name ="amount1"
          checked = {this.state.istrue}
          onChange = {this.handleChange}
        />  Account 1
        <br/>
        <input 
          type="checkbox"
          name = "account 2"
          checked = {this.state.istrue}
          onChange = {this.handleChange}
        />  Account 2
        <br/>
        <input 
          type="checkbox"
          name = "account 3"
          checked = {this.state.istrue}
          onChange = {this.handleChange}
        />  Account 3
        </form>
        <button>Press to delete the account selected</button>
      </div>
    );
  }
}

export default AccountPage;
