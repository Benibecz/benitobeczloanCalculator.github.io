"use strict";

const calculateBtn = document.querySelector(".btn");

function calculate() {
  console.log("funciono");
  const inputBoxes = document.querySelectorAll("input");
  const formContainer = document.querySelector("form");
  const loanAmount = document.querySelector(".loan-amount");
  const interestInput = document.querySelector(".interest-input");
  const yearsInput = document.querySelector(".years-to-repay-input");
  const monthlyPayment = document.querySelector(".monthly-payment");
  const totalPayment = document.querySelector(".total-payment");
  const totalInterest = document.querySelector(".total-interest");
  const results = document.querySelector("#results");
  const loadingImg = document.querySelector("img");
  const errorMessage = document.querySelector(".errorContainer");

  const principal = parseFloat(loanAmount.value);
  const calculatedInterest = parseFloat(interestInput.value) / 100 / 12;
  const calculatedPayments = yearsInput.value;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  function showResults() {
    results.classList.remove("hidden");
  }
  function hideResults() {
    results.classList.add("hidden");
  }
  function showErrorMessage() {
    errorMessage.classList.remove("hidden");
  }
  function hideErrorMessage() {
    errorMessage.classList.add("hidden");
  }
  function showLoading() {
    loadingImg.classList.remove("hidden");
  }

  function removeLoading() {
    loadingImg.classList.add("hidden");
  }

  if (isFinite(monthly)) {
    hideErrorMessage();
    hideResults();
    showLoading();
    setTimeout(removeLoading, 2000);
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    setTimeout(showResults, 2000);
  } else {
    hideErrorMessage();
    hideResults();
    showLoading();

    setTimeout(removeLoading, 2000);
    setTimeout(showErrorMessage, 2000);
  }
}

calculateBtn.addEventListener("click", calculate);
