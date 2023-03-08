import React from "react";
import "./checkout.css";
import PaystackPop from "@paystack/inline-js";

function Checkout({ itemsPrice }) {
  const [inputData, setInputData] = React.useState({
    email: "",
    amount: itemsPrice, //initialises the amount value to the total price
    firstName: "",
    lastName: "",
  }); // state to handle the inputs

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  } //function thats modifies the state on the change of an input value

  function payWithPaystack(e) {
    e.preventDefault();
    console.log(inputData);
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_6f0560645b25e3c702f7cd99bed1f8220da70aa5",
      amount: inputData.amount * 100,
      email: inputData.email,
      firstname: inputData.firstName,
      lastname: inputData.lastName,
      onSuccess(transaction) {
        let message = `Payment Complete! Reference ${transaction.reference}`;
        alert(message);
        setInputData({
          email: "",
          amount: "",
          firstName: "",
          lastName: "",
        });
      },
      onCancel() {
        alert("You have canceled the transaction!");
      },
    });
  }

  return (
    <div className="container-left-right pud-80 flex">
      <form id="paymentForm">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email-address"
            value={inputData.email}
            name="email"
            required
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="tel"
            id="amount"
            value={inputData.amount}
            name="amount"
            required
            onChange={handleChange}
            placeholder="Enter Amount"
          />
        </div>
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={inputData.firstName}
            name="firstName"
            onChange={handleChange}
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={inputData.lastName}
            name="lastName"
            onChange={handleChange}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-submit">
          <button type="submit" onClick={payWithPaystack}>
            {" "}
            Pay{" "}
          </button>
        </div>
      </form>

      <script src="https://js.paystack.co/v1/inline.js"></script>
    </div>
  );
}

export default Checkout;
