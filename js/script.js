// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Sep 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and house number and shows it back to user.
 */
function myButtonClicked() {
  // input
  const streetName = document.getElementById("street-name").value
  const houseNumber = parseInt(document.getElementById("house-number").value)

  // output
  document.getElementById("address").innerHTML =
    "You live on: " + houseNumber + "  " + streetName + "."
}
