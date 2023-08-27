const search = document.querySelector("#searchform");

let inputBox = document.querySelector("#searchbox");

let searchResult = document.querySelector("#searchresult");

let showMoreBtn = document.querySelector("#showmorebtn");

// from where API came :- https://unsplash.com/developers

// API KEY :- LuZGL0XEw4an85VCFwhqhf5CjdO5-uScFeYqhmQzOsk

// SECRET KEY :- 4lOs2n7r0fEf0O-poQXrOIWdlTK_esHnplZW1Drxzbc

// API URL :- https://api.unsplash.com/search/photos?page=1&query=office

// &client_id=

const api = "LuZGL0XEw4an85VCFwhqhf5CjdO5-uScFeYqhmQzOsk";

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = inputBox.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api}&per_page=12`;

  const response = await fetch(url);

  const data = await response.json();

  // console.log(data);

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");

    image.src = result.urls.small;

    const imageLink = document.createElement("a");

    imageLink.href = result.links.html;

    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";

  // document.querySelector(".uparraow").style.display="block";
}

search.addEventListener("submit", (e) => {
  e.preventDefault();

  page = 1;

  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page = page + 1;

  searchImage();
});
