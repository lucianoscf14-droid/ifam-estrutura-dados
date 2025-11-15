const expr = prompt("frutas \n 1 laranjas \n 2 mangas \n 3 papayas") //"Papayas";
switch (expr) {
  case "1":
    alert("Oranges are $0.59 a pound.");
    break;
  case "2":
  case "3":
    alert("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    alert(`Sorry, we are out of ${expr}.`);
}