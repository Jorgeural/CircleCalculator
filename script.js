function circleArea() {
// get the form inputs as variables
  var radius = Number(document.getElementById("radius").value);
  var decimals = document.getElementById("decimals").value;
  var units = document.getElementById("units").value;
  
//Do the maths
  var circleArea = Math.PI * radius * radius ;  
  var circleCircumference = Math.PI * 2 * radius; 
  var circleDiameter = radius * 2; 
  
//If the value for radius is not a number, ALERT!
  if(isNaN(radius)) {
    alert("Please, enter a numeric value for Radius");
  } else {
    // Output the result of the maths to the HTML   
    document.getElementById("area").innerHTML = circleArea.toFixed(decimals) + " " + units + "2";

    document.getElementById("Circumference").innerHTML = circleCircumference.toFixed(decimals) + " " +  units;

    document.getElementById("diameter").innerHTML = circleDiameter.toFixed(decimals) + " " +  units;    
  }   
}