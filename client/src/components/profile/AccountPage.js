import React from "react"
import axios from "axios";
class AccountPage extends React.Component {
    constructor(){
      super()
      this.state = {
          acc1available: false,
          acc2available: false,
          acc3availble: false,
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
    componentDidMount(){

    }

    updateAcc = async () => {
      await axios
        .get(`http://localhost:7000/users/${this.props.user.id}`)
        .then((res) => {
          if (res.data[0].amount != null) {
            this.setState({ acc1available:true });
          }
          else if(res.data[0].amount2 != null){
            this.setState({ acc2available:true });
          }
          else if(res.data[0].amount2 != null){
            this.setState({ acc3available:true });
          }
        });
    };

    render(){
    return (
      <div className="App">
        {/* purpose of this page is to open / close accounts 
      Write section of api that will create account for a user
      create section of api that will close account for a user */}
        <h1>Open/Close Account Page</h1>
        {/* check if there are any avilable accounts to open
          if theres any available accounts display them... */}
        <h2>These are the availavble acounts to open: </h2>

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
          name = "amount2"
          checked = {this.state.istrue}
          onChange = {this.handleChange}
        />  Account 2
        <br/>
        <input 
          type="checkbox"
          name = "amount3"
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
