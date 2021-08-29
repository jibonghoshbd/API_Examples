const loadQoute = () => {
    fetch('https://api.kanye.rest/')
        .then(Response => Response.json())
        .then(data => qoute(data))
}

const qoute = (data) => {
    // console.log(data)
    const qouteElement = document.getElementById('qouote');
    qouteElement.innerText = data.quote;

}

