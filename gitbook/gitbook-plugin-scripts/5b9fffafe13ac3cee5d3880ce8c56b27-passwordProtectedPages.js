let enabled = false;

let passwordProtectedPages = {
    "Week07/PixelsFollowAlong.md": "superluigibros",
    "Week07/PixelsIndividual.md": "alexeypajitnov",
    "Week07/AdditionalChallenges.md": "cssfuntimes",
    "Week08/MagazineWebsiteFollowAlongWithCode.md": "stairwaytoheaven",
    "Week08/MagazineWebsiteIndividual.md": "ohthehumanity"
}

document.addEventListener('DOMContentLoaded', function() {
    function addPassword(pw) {
        let containerSection = document.querySelector("section");
        let containerParent = containerSection.parentElement;
        containerSection.style.display = "none";
    
        let formDiv = document.createElement("div");
        formDiv.setAttribute("id", "password-form");

        let passwordHeader = document.createElement("h2");
        passwordHeader.innerHTML = "Password Protected Page";

        let passwordMessage = document.createElement("p");
        passwordMessage.innerHTML = "Please enter a password to continue.";
    
        let passwordInput = document.createElement("input");
        passwordInput.setAttribute("type", "text");
        passwordInput.setAttribute("id", "password-input");
    
        let submitButton = document.createElement("button");
        submitButton.innerHTML = "Submit";
        submitButton.onclick = function () {
            if (passwordInput.value == pw) {
                containerSection.style.display = "block";
                formDiv.style.display = "none";
            } else {
                alert("Wrong Password!!!");
            }
        }
    
        formDiv.appendChild(passwordHeader);
        formDiv.appendChild(passwordMessage);
        formDiv.appendChild(passwordInput);
        formDiv.appendChild(submitButton);
    
        containerParent.appendChild(formDiv);
    }

    gitbook.events.bind("page.change", function() {
        let passwordForCurrentPage = passwordProtectedPages[gitbook.state.filepath];

        if (enabled && passwordForCurrentPage) {
            addPassword(passwordForCurrentPage);
        }
     });
});