const urlInput = document.querySelector(".url-input");
const reqBtn = document.querySelector(".request-button");
const response = document.querySelector(".response p");
const header = document.querySelector(".header")
const headerTitle = document.querySelector(".header .title")

async function getFetch(url, type) {
  let headers = new Headers();

  headers.append(
    "Content-Type",
    type == "json"
      ? "application/json"
      : type == "text"
      ? "text/html"
      : "text/html"
  );
  headers.append("Accept", "application/json");
  headers.append("Origin", "http://localhost:3000");

  const fetchOut = await fetch(url, {
    mode: "no-cors",
    credentials: "include",
    method: "GET",
    headers: headers,
  });

  if (fetchOut.ok) {
    if (type == "json") {
      return fetchOut.json();
    } else if (type == "text") {
      return fetchOut.text();
    } else if (!type) {
      type = "text";
      return fetchOut.text();
    }
  } else {
    header.style.background = "red"
  }
}

reqBtn.addEventListener("click", () => {
  if (urlInput.value) {
    getFetch(urlInput.value, "text")
      .then((res) => {
        if (res) {
          response.textContent = res;
        }
      })
      .catch((err) => {
        console.log(`Error of search function - ${err}`);
      });
  } else {
    console.log("Input is empty");
  }
});
