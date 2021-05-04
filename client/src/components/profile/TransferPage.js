function TransferPage() {
  return (
    <div className="App">
      {/* purpose of this page is to transfer funds from WITHIN a user */}
      <h1>Transfer Page</h1>
      <br /> <br />
      <h2>Select the account you want to transfer from: </h2>
      <form>
        drop down box showing all the accounts
      </form>
      <br />
      <h2>Select the account you want to transfer to: </h2>
      <form>
        drop down box showing all the accounts
      </form>
      <br />
      <h2>Enter the amount you want to transfer: </h2>
      <input type="text " />
      <button>Submit</button>
    </div>
  );
}

export default TransferPage;
