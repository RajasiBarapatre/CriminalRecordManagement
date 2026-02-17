class Node1 {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// class BST
class BST1 {
  constructor() {
    this.root = null;
  }

  // Insert a node 
  insert1(data) {
    const newNode = new Node1(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode1(this.root, newNode);
    }
  }

  insertNode1(node, newNode) {
    if (newNode.data.victimName< node.data.victimName) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode1(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode1(node.right, newNode);
      }
    }
  }

  // In-order traversal of the BST a
  inOrderTraversal1(node, result) {
    if (node !== null) {
      this.inOrderTraversal1(node.left, result);
      result.push(node.data);
      this.inOrderTraversal1(node.right, result);
    }
  }

  // Get the BST data as an array used for displaying
  getData1() {
    const result = [];
    this.inOrderTraversal1(this.root, result);
    return result;
  }
}

// BST object to store the complaint data
const bst1 = new BST1();




function submitEditForm(event) { 
    event.preventDefault();

  // Getting the form input values
  
  const id= document.getElementById("id").value;
  const victimName = document.getElementById("victim-name").value;
  const convictName = document.getElementById("convict-name").value;
  const convictGender = document.getElementById("convict-gender").value;
  const convictAge = document.getElementById("convict-age").value;
  const witnessName = document.getElementById("witness-name").value;
  const victimPhone = document.getElementById("victim-phone").value;
  const witnessPhone = document.getElementById("witness-phone").value;
  const victimAddress = document.getElementById("victim-address").value;
  const victimAge = document.getElementById("victim-age").value;
  const crimeLocation = document.getElementById("crime-location").value;
  const date = document.getElementById("date").value;
  const crimeYear=document.getElementById("year").value;
  const crimeCategory = document.getElementById("crime-category").value;
  const jailTerm = document.getElementById("jail-term").value;

  // Create an object with the form data
  const complaintData1 = {
    id,
    victimName,
    convictName,
    convictGender, 
    convictAge,
    witnessName,
    victimPhone,
    witnessPhone,
    victimAddress,
    victimAge,
    crimeLocation,
    date,
    crimeYear,
    crimeCategory,
    jailTerm,
  
  };

  // Insert complaint data to the BST
  bst1.insert1(complaintData1);
  document.getElementById("id").value="";
  document.getElementById("victim-name").value="";
  document.getElementById("convict-name").value="";
  document.getElementById("convict-gender").value="";
  document.getElementById("convict-age").value="";
  document.getElementById("witness-name").value="";
  document.getElementById("victim-phone").value="";
  document.getElementById("witness-phone").value="";
  document.getElementById("victim-address").value="";
  document.getElementById("victim-age").value="";
  document.getElementById("crime-location").value="";
  document.getElementById("date").value="";
  document.getElementById("year").value="";
  document.getElementById("crime-category").value="";
  document.getElementById("jail-term").value="";

  if(bst1.root==null){
    console.log("BST IS EMPTY");
  }
  const data = bst1.getData1();
  console.log("Data:", data);
  //loadComplaintData1();

  // Retrieve previously stored data from localStorage
  const storedData = localStorage.getItem("complaintData1");
  let storedComplaints = [];
  if (storedData) {
    storedComplaints = JSON.parse(storedData);
  }

  // Merge the recently entered data with the previously stored data
  const mergedData = [...storedComplaints, complaintData1];

  // Store the merged data in localStorage
  localStorage.setItem("complaintData1", JSON.stringify(mergedData));

  // Display the updated complaint data
  
  const button = document.getElementById("editButton");
  button.disabled = true;
  // Reset the form
 // event.target.reset();
// document.getElementById("edit-form").reset();

  loadComplaintData1();

  
}

function displayData1() {
  const complaintTable = document.getElementById("complaint-tab1");
  const tbody = complaintTable.querySelector("#complaint-tab1-body"); 
  tbody.innerHTML = "";

  const data = bst1.getData1();
  console.log("Data:", data); // Add this line to log the retrieved data
  data.forEach((complaint) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = complaint.id;
    row.appendChild(idCell);

    const victimNameCell = document.createElement("td");
    victimNameCell.textContent = complaint.victimName;
    row.appendChild(victimNameCell);

    const convictNameCell = document.createElement("td");
    convictNameCell.textContent = complaint.convictName;
    row.appendChild(convictNameCell);

    const convictGenderCell = document.createElement("td");
    convictGenderCell.textContent = complaint.convictGender;
    row.appendChild(convictGenderCell);

    const convictAgeCell = document.createElement("td");
    convictAgeCell.textContent = complaint.convictAge;
    row.appendChild(convictAgeCell);
    
    const witnessNameCell = document.createElement("td");
    witnessNameCell.textContent = complaint.witnessName;
    row.appendChild(witnessNameCell);

    const victimPhoneCell = document.createElement("td");
    victimPhoneCell.textContent = complaint.victimPhone;
    row.appendChild(victimPhoneCell);

    const witnessPhoneCell = document.createElement("td");
    witnessPhoneCell.textContent = complaint.witnessPhone;
    row.appendChild(witnessPhoneCell);

    const victimAddressCell = document.createElement("td");
    victimAddressCell.textContent = complaint.victimAddress;
    row.appendChild(victimAddressCell);

    const victimAgeCell = document.createElement("td");
    victimAgeCell.textContent = complaint.victimAge;
    row.appendChild(victimAgeCell);

    const crimeLocationCell = document.createElement("td");
    crimeLocationCell.textContent = complaint.crimeLocation;
    row.appendChild(crimeLocationCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = complaint.date;
    row.appendChild(dateCell);

    const crimeYearCell = document.createElement("td");
    crimeYearCell.textContent = complaint.crimeYear;
    row.appendChild(crimeYearCell);

    const crimeCategoryCell = document.createElement("td");
    crimeCategoryCell.textContent = complaint.crimeCategory;
    row.appendChild(crimeCategoryCell);

    const jailTermCell = document.createElement("td");
    jailTermCell.textContent = complaint.jailTerm;
    row.appendChild(jailTermCell);

    tbody.appendChild(row);
  });
  console.log("Table body:", tbody); // Add this line to log the table body element

  complaintTable.style.display = "table";
}


//Helper function to load the complaint data from localStorage
function loadComplaintData1() {
  const storedData = localStorage.getItem("complaintData1");
  if (storedData) {
    const parsedData = JSON.parse(storedData);

    // Clear the existing BST data
    bst1.root = null;

    parsedData.forEach((complaint) => {
      bst1.insert1(complaint);
    });
  }

  displayData1();
}




//################GRAPH################




function countLocations(node, location, countObj) {
  if (node !== null) {
    if (node.data.crimeLocation === location) {
      countObj.count++;
    }
    countLocations(node.left, location, countObj);
    countLocations(node.right, location, countObj);
  }
}

function countYear(node, year, countObj) {
  if (node !== null) {
    if (node.data.crimeYear === year) {
      countObj.count++;
    }
    countYear(node.left, year, countObj);
    countYear(node.right, year, countObj);
  }
}


function countcat(node, cat, countObj) {
  if (node !== null) {
    if (node.data.crimeCategory === cat) {
      countObj.count++;
    }
    countcat(node.left, cat, countObj);
    countcat(node.right, cat, countObj);
  }
}



function generateGraph() {
  const locationsToCount = ["Pune", "Mumbai", "Satara"];
  const yearsToCount = ["2023", "2022", "2021", "2018"];
  const catToCount=["Murder","Theft","Assault"];
  const locationCounts = {};
  const yearCounts = {};
  const catCounts={};

  locationsToCount.forEach((location) => {
    const countObj = { count: 0 }; // count starts at zero
    countLocations(bst1.root, location, countObj);
    locationCounts[location] = countObj.count;
  });

  yearsToCount.forEach((year) => {
    const countObj = { count: 0 }; // count starts at zero
    countYear(bst1.root, year, countObj);
    yearCounts[year] = countObj.count;
  });

  catToCount.forEach((cat) => {
    const countObj = { count: 0 }; // count starts at zero
    countcat(bst1.root, cat, countObj);
  catCounts[cat] = countObj.count;
  });

  const chartCanvasLocation = document.getElementById("chart-location");
  const chartContextLocation = chartCanvasLocation.getContext("2d");

  // for bar chart apperance 
  const chartLocation = new Chart(chartContextLocation, {
    type: "bar",
    data: {
      labels: locationsToCount,
      datasets: [
        {
          label: "Crime Location Counts",
          data: Object.values(locationCounts),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const chartCanvasYear = document.getElementById("chart-year");
  const chartContextYear = chartCanvasYear.getContext("2d");

  const chartYear = new Chart(chartContextYear, {
    type: "bar",
    data: {
      labels: yearsToCount,
      datasets: [
        {
          label: "Crime Year Counts",
          data: Object.values(yearCounts),
          backgroundColor: [
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
            "rgba(255, 206, 86, 0.5)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  





  const chartCanvascat = document.getElementById("chart-cat");
  const chartContextcat = chartCanvascat.getContext("2d");

  const chartcat = new Chart(chartContextcat, {
    type: "bar",
    data: {
      labels: catToCount,
      datasets: [
        {
          label: "Crime Category Counts",
          data: Object.values(catCounts),
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 0.5,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  document.getElementById("graph-location").style.display = "block";
  document.getElementById("graph-year").style.display = "block";
  document.getElementById("graph-cat").style.display = "block";


}

// Call the function to load complaint data from localStorage
loadComplaintData1();

