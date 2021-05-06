function TransferPage() {
  return (
    <div className="App">
      {/* purpose of this page is to transfer funds from WITHIN a user */}
      <h1>Transfer Page</h1>
      <h2>Select the account you want to transfer from: </h2>
        <label>Choose Account: </label>
        <select id="accountType" name="account">
        <option value="checking">Account 1</option>
        <option value="saving">Account 2</option>
        <option value="saving">Account 3</option>
        </select>
      <br/><br/>
      <h2>Select the account you want to transfer to: </h2>
        <label>Choose Account: </label>
        <select id="accountType" name="account">
        <option value="checking">Account 1</option>
        <option value="saving">Account 2</option>
        <option value="saving">Account 3</option>
        </select>
      <br/><br/>
      <h2>Enter the amount you want to transfer: </h2>
      <input type="text " />
      <button>Submit</button>
    </div>
  );
}

export default TransferPage;
