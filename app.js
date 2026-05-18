const collection = [
    {item:"plastic Scrap" ,category: "Resources", rarity:"Common" , notes:"A bag of plastic odds and ends."},
    {item:"Duct Tape",category:"Resources",rarity:"common",notes:"You know exactly what this is."},
    {item:"Sledgehammer",category:"Weapon",rarity:"Rare",notes:"An exceptionally heavy hammer for pounding things into the ground."},
    {item:"Antique Shotgun",category:"Weapon",rarity:"Unique",notes:"GATE Immurement Registry: IS-0099"}
]
function renderCollection(items) {
const display = document.getElementById('collection-display');
display.innerHTML = ''; // clear everything
items.forEach((item) => {
display.innerHTML += `
<div class="item-card">
<h3>${item.item}</h3>
<h4>notes: ${item.notes}</h4>
<p>Rarity: ${item.rarity}</p>
<p>Category: ${item.category}</p>

</div>
`;
});
}
// Call it on page load:
renderCollection(collection);

const btn = document.getElementById('add-btn');
btn.addEventListener('click', function() {
const textbox = document.getElementById("input-item").value;
const textbox2 = document.getElementById("input-category").value;
const textbox3 = document.getElementById("input-rarity").value;
const textbox4 = document.getElementById("input-notes").value;

const newItem = {
    item: textbox,
    category: textbox2,
    rarity: textbox3,
    notes: textbox4,
}
collection.push(newItem);
renderCollection(collection);
});