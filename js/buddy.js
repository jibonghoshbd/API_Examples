const loadBuddy = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => displayBuddys(data))
}
loadBuddy()
const displayBuddys = (data) => {
    console.log(data)
    const buddys = data.results;
    const buddyDiv = document.getElementById('buddys');
    for (buddy of buddys) {
        const p = document.createElement('p')
        p.innerText = `Gender: ${buddy.gender} Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}, Email: ${buddy.email}`
        buddyDiv.appendChild(p)
    }

}