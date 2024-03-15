let flightsBlock = document.getElementById("flights");
let array = ["Goa", "Hyd", "Chennai", "Mumbai", "Banglure", "thamilnadu", "kashmir", "pink city", "Gugrath", "Madhya Paadesh"];
let hotel = ["Ahgafs", "hhag6s", "kjshh", "hsgagst", "shhgfss", "ksjhgdgfge", "lkkkkaw", "lskkw", "lskksw", "lakkss"];
let links = [
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491535/special-occasions-1-620x340_bhuris.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491534/50201697506_1701f8a5dd_b_siixb1.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491483/171122165335-ultimate-india-hotels-the-oberoi-amarvilas-agra.jpg_jsr4zq.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491483/100_pibsjj.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491482/Ramada-kevadia_x8cllr.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491482/RAAJKUTIR-AN-IHCL-SELEQTIONS-HOTEL-IN-KOLKATA-ihcl_rammum.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491482/ev-video-thumb_ekwxjb.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491481/The-Fairmont-Hotel-Jaipur_sx1ixg.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491481/Best-Hotels-India_za0ubk.jpg",
    "https://res.cloudinary.com/dtqgljlpu/image/upload/v1710491481/kaldan-samudhra_zojhxh.jpg"
];
let random = () => {
    let n = Math.ceil(Math.random() * 100) % 10;
    return (n);
}

function kk(num, prise, place, Hname, link) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h1");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    img.src = link;
    img.classList.add("h-30", "w-30");
    div1.classList.add("col-12", "col-md-6", "col-lg-4", "p-2");
    div2.classList.add("flight-card", "text-center", "p-2", "display", "shadow", "mb-2", "h-100", "w-100");
    h1.textContent = place;
    h1.classList.add("text-warning")
    h2.textContent = Hname;
    let div3 = document.createElement("div");
    let button = document.createElement("button");
    button.classList.add("btn", "btn-info");
    button.textContent = "Book Now";
    p.textContent = `${prise*1000}₹    ${num} hrs `;
    div3.appendChild(h1);
    div3.appendChild(p2)
    div3.appendChild(h2);
    div3.appendChild(p);
    div3.appendChild(button)
    div2.appendChild(div3);
    div2.appendChild(img);
    div1.appendChild(div2)

    document.getElementById("flights").appendChild(div1);
}
for (let j of array) {
    let n = random();
    kk(n * 100, 24, array[random()], hotel[random()], links[random()])

}
document.getElementById("btn1").onclick = function() {
    let v1 = document.getElementById("from").value;
    let v2 = document.getElementById("to").value;
    if (v1 === "" || v2 === "") {
        document.getElementById("errorMSG").textContent = "enter destination currectly";
        document.getElementById("errorMSG").style.color = "red";
    } else {
        flightsBlock.textContent = "";
        kk(random() * 100, 24, v1, v2, links[random()])
    }
}