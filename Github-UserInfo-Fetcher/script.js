const usernameInput = document.getElementById("username");
const fetchBtn = document.getElementById("fetch-btn");
const userInfoDiv = document.getElementById("user-info");
fetchBtn.addEventListener("click", fetchUserInfo);

function fetchUserInfo() {
  const username = usernameInput.value.trim();
  if (username !== "") {
    const apiUrl = `https://api.github.com/users/${username}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => displayUserInfo(data))
      .catch((error) => console.error("Error:", error));
  } else {
    console.log("Please enter a GitHub username");
  }
}

function displayUserInfo(data) {
  const userInfoHtml = `
        <img src="${data.avatar_url}" alt="${data.login}'s avatar" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 15px; box-shadow: 0 2px 6px rgba(0,0,0,0.2);">
        <h2>${data.name}</h2>
        <p>Username: ${data.login}</p>
        <p>Location: ${data.location}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
    `;
  userInfoDiv.innerHTML = userInfoHtml;
}
