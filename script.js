const ratebutton = document.getElementsByClassName("ratebutton");
const submitbutton = document.getElementById("submit");
const container = document.getElementsByClassName("container")[0];
const thankyoucontainer = document.getElementsByClassName("thankyou-container")[0];

submitbutton.addEventListener("click", submit);

function submit() {
    container.style.display = "none"; 
    thankyoucontainer.style.display = "flex"; 
}

for (let i = 0; i < ratebutton.length; i++) {
    ratebutton[i].addEventListener("click", function() {

        for (let j = 0; j < ratebutton.length; j++) {
            ratebutton[j].classList.remove("selected");
        }

        ratebutton[i].classList.add("selected");

        selectedValue = ratebutton[i].getAttribute("data-value");
        
        document.getElementById("value").textContent = selectedValue;

    });
}