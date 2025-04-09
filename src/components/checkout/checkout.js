import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    amountUSD: "1999",
    currency: "USD",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Stripe payment
  const handleStripePayment = async () => {
    const { name, cardNumber, expiryMonth, expiryYear, cvv, amountUSD, currency } = paymentDetails;

    if (!name || !cardNumber || !expiryMonth || !expiryYear || !cvv || !amountUSD) {
      setErrorMessage("Please fill out all fields before proceeding.");
      return;
    }

    try {
      // Show the "Payment Processing" message
      setPaymentProcessing(true);

      // Create a payment intent with your backend
      const response = await axios.post("/api/create-payment-intent", {
        amount: amountUSD * 100, // Stripe requires the amount in cents
        currency: currency.toLowerCase(),
      });

      if (response.status !== 200) {
        throw new Error("Error creating payment intent");
      }

      const { clientSecret } = response.data;

      // Here you would integrate Stripe.js to confirm the payment
      // For example, using stripe.confirmCardPayment(clientSecret, { ... })

      // Dummy confirmation for now:
      setTimeout(() => {
        alert("Payment successful!");
        setPaymentProcessing(false); // Stop processing state after payment
      }, 2000); // Simulating a successful payment after 2 seconds

    } catch (error) {
      setErrorMessage(`Payment failed: ${error.message}`);
      setPaymentProcessing(false); // Stop processing state if error occurs
    }
  };

  return (
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Checkout</h2>
      <div>
        <h3>Enter Payment Details</h3>

        {/* Cardholder Name */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
            Cardholder Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={paymentDetails.name}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
          />
        </div>

        {/* Card Number */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="cardNumber" style={{ display: "block", fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter your card number"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
          />
        </div>

        {/* Expiry Date */}
        <div style={{ marginBottom: "15px", display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "48%" }}>
            <label htmlFor="expiryMonth" style={{ display: "block", fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
              Expiry Month:
            </label>
            <input
              type="text"
              id="expiryMonth"
              name="expiryMonth"
              placeholder="MM"
              value={paymentDetails.expiryMonth}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
          </div>
          <div style={{ width: "48%" }}>
            <label htmlFor="expiryYear" style={{ display: "block", fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
              Expiry Year:
            </label>
            <input
              type="text"
              id="expiryYear"
              name="expiryYear"
              placeholder="YY"
              value={paymentDetails.expiryYear}
              onChange={handleInputChange}
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
            />
          </div>
        </div>

        {/* CVV */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="cvv" style={{ display: "block", fontSize: "14px", fontWeight: "bold", marginBottom: "5px" }}>
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="Enter CVV"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
            style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", fontSize: "16px" }}
          />
        </div>

        {/* Error Message */}
        {errorMessage && <p style={{ color: "red", fontSize: "14px" }}>{errorMessage}</p>}

        {/* Payment Button */}
        <button
          onClick={handleStripePayment}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          disabled={paymentProcessing} // Disable the button while processing
        >
          {paymentProcessing ? "Processing..." : "Pay Now"}
        </button>

        {/* Display processing message */}
        {paymentProcessing && (
          <p style={{ marginTop: "15px", fontSize: "16px", color: "blue" }}>
            Our team is currently working on your payment...
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkout;
