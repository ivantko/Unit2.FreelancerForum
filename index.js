// An array of objects representing freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: "$30" },
    { name: "Bob", occupation: "Teacher", startingPrice: "$50" },
    { name: "Carol", occupation: "Programmer", startingPrice: "$70" }
  ];
  
  //function to calculate average
  function updateAveragePrice() {
    let sum = 0;
    freelancers.forEach(freelancer => {
      // Remove the dollar sign and parse the price as a number
      let price = parseFloat(freelancer.startingPrice.substring(1));
      sum += price;
    });
    const average = sum / freelancers.length;
  
  //updating the innerHTML of the average price element.
    document.getElementById('averagePrice').innerHTML = `The average starting price is $${average.toFixed(2)}.`;
  }
  
  // Function to populate the freelancers table
  // function populateTable() {
  //   const table = document.getElementById('freelancersTable');
  
  //   // Iterate over each freelancer and add a row to the table
  //   freelancers.forEach(freelancer => {
  //     let row = table.insertRow();
  //     let nameCell = row.insertCell(0);
  //     let occupationCell = row.insertCell(1);
  //     let priceCell = row.insertCell(2);
  //     nameCell.innerHTML = freelancer.name;
  //     occupationCell.innerHTML = freelancer.occupation;
  //     priceCell.innerHTML = freelancer.startingPrice;
  //   });
  // }
  // Function to populate the freelancers table and update the average price
  function populateTable() {
    const table = document.getElementById('freelancersTable');
    freelancers.forEach(freelancer => {
      let row = table.insertRow();
      row.insertCell(0).innerHTML = freelancer.name;
      row.insertCell(1).innerHTML = freelancer.occupation;
      row.insertCell(2).innerHTML = `${freelancer.startingPrice}`;
    });
    // Update the average price after populating the table
    updateAveragePrice();
  }
  
  
  // Call populateTable on window load
  window.onload = populateTable;