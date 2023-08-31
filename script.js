const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const priceElements = document.querySelectorAll(".price");

  let total = 0;

  // Calculate the total price
  priceElements.forEach((priceElement) => {
    total += parseFloat(priceElement.textContent);
  });

  // Create a new row for total price
  const totalRow = document.createElement("tr");
  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: Rs ${total}`;
  totalRow.appendChild(totalCell);

  // Insert the total row at the end of the table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);

