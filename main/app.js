document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Get the search input and button elements
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");

// Add an event listener to the button to trigger the search
searchButton.addEventListener("click", function() {
  search();
});

// Add an event listener to the input to trigger the search on Enter key press
searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    search();
  }
});

// Define the search function
function search() {
  // Get the search query from the input element
  const query = searchInput.value.toLowerCase();

  // Get the list of items to search through
  const items = ["JERSEYS", "ACCESSORIES", "CLOTHING"];

  // Filter the items based on the search query
  const filteredItems = items.filter(function(item) {
    return item.toLowerCase().includes(query);
  });

  // Display the filtered items in the results list
  const resultsList = document.getElementById("results");
  resultsList.innerHTML = "";

  filteredItems.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    resultsList.appendChild(li);
  });
}

const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${image.src}">`;
    document.body.appendChild(modal);
    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  });
});

function zoomIn(event) {
  var pre = document.getElementById("preview");
  pre.style.visibility = "visible";
  if ($('#zoom1').is(':hover')) {
        var img = document.getElementById("zoom1");
		pre.style.backgroundImage = "url('pic1.jpg')";
    }
  if ($('#zoom2').is(':hover')){
		var img = document.getElementById("zoom2");
		pre.style.backgroundImage = "url('pic2.jpg')";
  } 

}

function zoomOut() {
  var pre = document.getElementById("preview");
  pre.style.visibility = "hidden";
}

