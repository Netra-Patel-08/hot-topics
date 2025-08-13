// GET THE REFERENCES
const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL

loadContent(url);

function loadContent(urlFeed) {
    fetch(urlFeed)
        .then((response) => {
            if (!response.ok) throw new Error("Network error");
            return response.text();
        })
        .then((data) => {
            container.innerHTML = data;
        })
        .catch((err) => {
            container.innerHTML = "<p>Sorry, content could not be loaded.</p>";
            console.error(err);
        });
}



// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
function selectContent(e) {
    e.preventDefault();
    let newUrl = this.getAttribute("href");
    loadContent(newUrl);
}

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
links.forEach((link) => {
    link.addEventListener("click", selectContent);
});
