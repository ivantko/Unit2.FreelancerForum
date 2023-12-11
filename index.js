// An array of objects representing freelancers
const freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: "$30" },
  { name: "Bob", occupation: "Teacher", startingPrice: "$50" },
  { name: "Carol", occupation: "Programmer", startingPrice: "$70" }
];

// Arrays for random data
const names = ["Alice", "Bob", "Carol", "Yvette", "Rhonda"];
const occupations = ["Writer", "Teacher", "Programmer", "Driver", "Chef"];

// Function to generate a random freelancer
function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = `$${Math.floor(Math.random() * 81) + 20}`; // Random price between $20 and $100

  return {
    name: randomName,
    occupation: randomOccupation,
    startingPrice: randomStartingPrice
  };
}

// Function to calculate and update average price
function updateAveragePrice() {
  let sum = 0;
  freelancers.forEach(freelancer => {
    let price = parseFloat(freelancer.startingPrice.substring(1));
    sum += price;
  });
  const average = sum / freelancers.length;
  document.getElementById('averagePrice').innerHTML = `The average starting price is $${average.toFixed(2)}.`;
}

// Function to populate the freelancers table
function populateTable() {
  const table = document.getElementById('freelancersTable');
  // Clear existing table rows
  table.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Occupation</th>
      <th>Starting Price</th>
    </tr>
  `;
  freelancers.forEach(freelancer => {
    let row = table.insertRow();
    row.insertCell(0).innerHTML = freelancer.name;
    row.insertCell(1).innerHTML = freelancer.occupation;
    row.insertCell(2).innerHTML = freelancer.startingPrice;
  });
  updateAveragePrice();
}

// Function to add a random freelancer and re-render the table
function addRandomFreelancer() {
  freelancers.push(generateRandomFreelancer());
  populateTable();
}

// Set an interval to add a new freelancer every 3 seconds
setInterval(addRandomFreelancer, 3000);

// Populate the table on window load
window.onload = populateTable;
