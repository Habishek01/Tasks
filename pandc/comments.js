$(document).ready(function () {
  comFunc();
});

async function comFunc() {
  const queryParams = window.location.search;
  const response2 = await fetch(
    "https://jsonplaceholder.typicode.com/comments" + queryParams
  );
  const comData = await response2.json();
  for (i = 0; i < comData.length; i++) {
    const cId = comData[i].id;
    const cName = comData[i].email;
    const cBody = comData[i].body;
    addComment(cId, cName, cBody);
  }
}

function addComment(cId, cName, cBody) {
  const comDiv = document.createElement("div");
  comDiv.setAttribute("id", "comDiv");
  const comName = document.createElement("span");
  comName.innerHTML = cName;
  const comBody = document.createElement("p");
  comBody.innerHTML = cBody;

  comDiv.appendChild(comName);
  comDiv.appendChild(comBody);
  const comPost = document.querySelector("body");
  comPost.appendChild(comDiv);
}
