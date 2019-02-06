//calculate tip
function calculateTip() {
    var bTotal =
    document.getElementById("bTotal").value;
        var bPercent =
    document.getElementById("bPercent").value;

    //validate input
    if (bTotal === "" || bPercent == 0) {
        alert("Please enter values");
        return;
    }
    
    //calculate tip
    var total = (bTotal * bPercent)
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //allows us to always have two digits after decimal point
    total -total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function 
document.getElementById("calculate").onclick = function() {
    calculateTip();
};