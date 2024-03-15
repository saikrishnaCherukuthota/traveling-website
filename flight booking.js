let flightsBlock = document.getElementById("flights");
let array = ["Goa", "Hyd", "Chennai", "Mumbai", "Banglure", "thamilnadu", "kashmir", "pink city", "Gugrath", "Madhya Paadesh"];
let random = () => {
    let n = Math.ceil(Math.random() * 100);
    return (n);
}

function kk(num, prise, place1, place2) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h1");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    p2.textContent = "To"
    div1.classList.add("col-12", "col-md-6", "col-lg-4", "p-2")
    div2.classList.add("flight-card", "text-center", "p-2");
    h1.textContent = place1;
    h2.textContent = place2;
    let button = document.createElement("button");
    button.classList.add("btn", "btn-info");
    button.textContent = "Book Now";
    p.textContent = `${prise*1000}₹    ${num}:00 AM `;
    div2.appendChild(h1);
    div2.appendChild(p2)
    div2.appendChild(h2);
    div2.appendChild(p);
    div2.appendChild(button)
    div1.appendChild(div2);
    document.getElementById("flights").appendChild(div1);
}
for (let j of array) {
    let n = random()
    kk(n % 8, n % 12, array[random() % 8], array[random() % 8])

}
document.getElementById("btn1").onclick = function() {
    let v1 = document.getElementById("from").value;
    let v2 = document.getElementById("to").value;
    if (v1 === "" || v2 === "") {
        document.getElementById("errorMSG").textContent = "enter destination currectly";
        document.getElementById("errorMSG").style.color = "red";
    } else {
        flightsBlock.textContent = "";
        kk(random() % 8, random() % 12, v1, v2);
    }
}