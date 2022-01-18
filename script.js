const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const textsEl = document.getElementById("texts");


inputBox.addEventListener("keyup", e => {

    // If they don't enter something in, then return (E.G a backspace)
    while (texts.firstchild === "") {
        textsEl.removeChild(textsEl.firstChild);
    }
    while (textsEl.firstChild) {
        textsEl.removeChild(textsEl.firstChild);
        // This is a neat feature I found from the article up the top and it removes existing text on the screen, so I don't have 50000 entitys or something
    }
    if (!e.target.value) return;


    const searchTerms = e.target.value.split(/[,\s]+/).map(str => str.toLowerCase());
    for (const item of dict) {
        if(!searchTerms.every(term => item.full_name.toLowerCase().includes(term))) continue;

        
        // This is the algorithm basically, if something starts with the letter that is typed in then do the following
        // Create a div element (This is what will sit around the text and I can style)
        let a = document.createElement("a");
        let b = document.createElement("p");
        let c = document.createElement("p");
        let d = document.createElement("p");
        let p = document.createElement("p");
        a.classList.add("turnblue");
        a.setAttribute("href", "https://www.paypal.com/donate/?business=QD94JB2TRND4U&no_recurring=0&item_name=For+helping+you+out+%3A%29&currency_code=AUD");
        b.textContent = item.first_name
        c.textContent = item.last_name
        d.textContent = item.school_name
        p.textContent = item.band_6
        a.append(b, c, d, p)
        document.getElementById("texts").append(a);
    }
})

