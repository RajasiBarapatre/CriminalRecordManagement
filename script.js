class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// class BST
class BST {
  constructor() {
    this.root = null;
  }

  // Insert a node
  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }

    //ID calculate
    const id = this.countNodes(this.root) + 1;
    newNode.data.id = id;

    return newNode;
  }

  insertNode(node, newNode) {
    if (newNode.data.victimName < node.data.victimName) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // In-order traversal of the BST
  inOrderTraversal(node, result) {
    if (node !== null) {
      this.inOrderTraversal(node.left, result);
      result.push(node.data);
      this.inOrderTraversal(node.right, result);
    }
  }

  getData() {
    const result = [];
    this.inOrderTraversal(this.root, result);
    return result;
  }
//just for console..........
  printData() {
    this.printInOrder(this.root);
  }

  printInOrder(node) {
    if (node !== null) {
      this.printInOrder(node.left);
      console.log(node.data);
      this.printInOrder(node.right);
    }
  }

  countNodes(node) {
    if (node === null) {
      return 0;
    }
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }
}

// BST object to store the complaint data
const bst = new BST();

// Function to show the complaint form( can write at the start also make changes later ######)
function showComplaintForm() {
  var form = document.getElementById("form.html");
  form.style.display = "block";
}

// Function to display the complaint data in a table
function displayData() {
  const complaintTable = document.getElementById("complaint-tab");  //html table id given
  const tbody = complaintTable.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  const data = bst.getData();
  data.forEach((complaint, index) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = complaint.id; // Display the ID
    row.appendChild(idCell);

    const victimNameCell = document.createElement("td");
    victimNameCell.textContent = complaint.victimName;
    row.appendChild(victimNameCell);

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

    const crimeCategoryCell = document.createElement("td");
    crimeCategoryCell.textContent = complaint.crimeCategory;
    row.appendChild(crimeCategoryCell);

    const statusCell = document.createElement("td");
    const isButtonDisabled1 = localStorage.getItem(`editButtonDisabled_${index}`);
    statusCell.textContent = isButtonDisabled1 ? "Solved" : "Not Solved";
    row.appendChild(statusCell);


    const editButtonCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("btn", "btn-secondary");

    //  in localStorage  Check if the button is disabled
    const isButtonDisabled = localStorage.getItem(`editButtonDisabled_${index}`);
    if (isButtonDisabled) {
      editButton.disabled = true;
    } else {
      // If not disabled,  handle button click
      editButton.addEventListener("click", function () {
        window.location.href = "edit.html";
        editComplaint(index);
      });
    }

    editButtonCell.appendChild(editButton);
    row.appendChild(editButtonCell);

    
    tbody.appendChild(row);
  });

  complaintTable.style.display = "table";
  console.log("hi", bst.getData());
}

function editComplaint(index) {
  const data = bst.getData();
  const complaint = data[index];

  // Store the complaint data in localStorage to access it in the edit page
  localStorage.setItem("editComplaint", JSON.stringify(complaint));

  // Disable the button and store the information in localStorage
  localStorage.setItem(`editButtonDisabled_${index}`, "true");

  // Update the "Status" cell to "Solved"
  const complaintTable = document.getElementById("complaint-tab");
  const tbody = complaintTable.getElementsByTagName("tbody")[0];
  const rows = tbody.getElementsByTagName("tr");
  const statusCell = rows[index].getElementsByTagName("td")[9]; // Assuming 10 column here....
  statusCell.textContent = "Solved";

  // Redirect to the edit page
  //window.location.href = "edit.html";
}


function fillForm() {
  const storedEditData = localStorage.getItem("editComplaint");

  if (storedEditData) {
    const editData = JSON.parse(storedEditData);

    const idInput = document.getElementById("id");
    idInput.setAttribute("readonly",true);
    const victimNameInput = document.getElementById("victim-name");
    victimNameInput.setAttribute("readonly",true);
    const witnessNameInput = document.getElementById("witness-name");
    witnessNameInput.setAttribute("readonly",true);
    const victimPhoneInput = document.getElementById("victim-phone");
    victimPhoneInput.setAttribute("readonly",true);
    const witnessPhoneInput = document.getElementById("witness-phone");
    witnessPhoneInput.setAttribute("readonly",true);
    const victimAddressInput = document.getElementById("victim-address");
    victimAddressInput.setAttribute("readonly",true);
    const victimAgeInput = document.getElementById("victim-age");
    victimAgeInput.setAttribute("readonly",true);
    const crimeLocationInput = document.getElementById("crime-location");
    crimeLocationInput.setAttribute("readonly",true);
    const dateInput = document.getElementById("date");
    dateInput.setAttribute("readonly",true);
    const crimeCategoryInput = document.getElementById("crime-category");
    crimeCategoryInput.setAttribute("readonly",true);

    idInput.value = editData.id; 
    victimNameInput.value = editData.victimName;
    witnessNameInput.value = editData.witnessName;
    victimPhoneInput.value = editData.victimPhone;
    witnessPhoneInput.value = editData.witnessPhone;
    victimAddressInput.value = editData.victimAddress;
    victimAgeInput.value = editData.victimAge;
    crimeLocationInput.value = editData.crimeLocation;
    dateInput.value = editData.date;
    crimeCategoryInput.value = editData.crimeCategory;

    window.href.location="operation.html";
  }
}


function submitForm(event) {
  event.preventDefault();

  // Getting the form input values
  const victimName = document.getElementById("victim-name").value;
  const witnessName = document.getElementById("witness-name").value;
  const victimPhone = document.getElementById("victim-phone").value;
  const witnessPhone = document.getElementById("witness-phone").value;
  const victimAddress = document.getElementById("victim-address").value;
  const victimAge = document.getElementById("victim-age").value;
  const crimeLocation = document.getElementById("crime-location").value;
  const date = document.getElementById("date").value;
  const crimeCategory = document.getElementById("crime-category").value;

  // Create an object with the form data
  const complaintData = {
    id: 0, 
    victimName,
    witnessName,
    victimPhone,
    witnessPhone,
    victimAddress,
    victimAge,
    crimeLocation,
    date,
    crimeCategory,
  };

  // Insert complaint data to the BST and retrieve the newly inserted node
  const newNode = bst.insert(complaintData);

  document.getElementById("victim-name").value="";
  document.getElementById("witness-name").value="";
  document.getElementById("victim-phone").value="";
  document.getElementById("witness-phone").value="";
  document.getElementById("victim-address").value="";
  document.getElementById("victim-age").value="";
  document.getElementById("crime-location").value="";
  document.getElementById("date").value="";
  document.getElementById("crime-category").value="";


  const storedData = localStorage.getItem("complaintData");
  let storedComplaints = [];
  if (storedData) {
    storedComplaints = JSON.parse(storedData);
  }

  // Merge the recently entered data with the previously stored data
  const mergedData = [...storedComplaints, complaintData];

  // Store the merged data in localStorage
  localStorage.setItem("complaintData", JSON.stringify(mergedData));

  // Display the updated complaint data
  displayData();

  // Print all data in the BST
  bst.printData();
  

}

// Helper function to load the complaint data from localStorage
function loadComplaintData() {
  const storedData = localStorage.getItem("complaintData");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    parsedData.forEach((complaint) => {
      bst.insert(complaint);
    });
  }
  displayData();
}



//function to check username password after clicking login
function validate()
{ 
  var username=document.getElementById("Username").value;
  var password=document.getElementById("Password").value;
  if(username == "")
  {
    alert('Username is required');
  }
  if(password=="")
  {
    alert('Password is required');
  }
  else if(username =="rajasi@gmail.com" && password== "rajasi")
  {
    window.location.href = "operation.html";
    return false;
  }
  else
  {
    alert('Wrong Username or Password');  
  }
}

function logout()
{
  localStorage.setItem("code","logout");
  window.location.href="login.html";
}

function disable(x)
{
  x.disabled=true;
}