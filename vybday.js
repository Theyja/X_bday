
let img = document.createElement("img");
img.src = "birthdaycake1.png"; 
img.id = "bdaycake";
img.style.width = "100%";
img.style.height = "auto";

function showCard() {
    let button = document.getElementById("b1");

    // Add hover effect to the button
    button.addEventListener("mouseover", function () {
        button.style.transform = "scale(1.2)";
    });

    button.addEventListener("click", function () {
        button.style.transform = "scale(1.2)";
    });

    button.addEventListener("mouseout", function () {
        button.style.transform = "scale(1)";
    });

    let txtElements = document.getElementsByClassName("text");
    txtElements[0].textContent = "OH.. well, you've done it now";
    txtElements[1].textContent = "atp enjoy :)";
    
    let btnTxt = document.getElementById("b1");
    btnTxt.textContent = "AHH! I've been clicked D:";

    let cardDiv = document.getElementById("card");
    cardDiv.innerHTML = ""; // Clear previous content
    cardDiv.classList.add("card");

    // Create and style the birthday message
    let message = document.createElement("p");
    message.textContent = "Happy Birthday Vy! SPEND A NICE BIRTHDAY !! <3";
    message.style.color = "#00120B";
    message.style.fontSize = "24px";
    message.style.textAlign = "center";
    message.style.fontFamily = "Verdana";
    message.style.fontWeight = "bold";

    // Create the "a little note" button
    let sideNote = document.createElement("button");
    sideNote.textContent = "a little note..";
    sideNote.style.marginTop = "10px"; // Add some spacing
    sideNote.addEventListener("click", function () {
        // Check if the note already exists to avoid duplicating it
        if (!document.getElementById("note")) {
            let note = document.createElement("p");
            note.id = "note"; // Add an ID to avoid duplicates
            note.textContent = "I really didn't get the chance to get to know you well, about your personal tastes, ecc.. but I know DAMN well that you're incredibly sweet. I'm hoping after celebrating your days we'll talk a lot better!! In the meanwhile... ENJOY YOUR DAY!!";
            note.style.color = "#00120B";
            note.style.fontSize = "18px";
            note.style.fontFamily = "Verdana";
            note.style.textAlign = "center";
            note.style.border = "2px solid violet";
            note.style.padding = "5px";
            cardDiv.appendChild(note); // Append the note to the card
        }
    });

    // Append elements to the card
    cardDiv.appendChild(img);
    cardDiv.appendChild(message);
    cardDiv.appendChild(sideNote);
}