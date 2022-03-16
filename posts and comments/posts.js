// Add your code here
$(document).ready(function () {
  myFunc();
});
async function myFunc() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const postData = await response.json();
  for (i = 0; i < postData.length; i++) {
    const id = postData[i].id;
    const body = postData[i].body;
    const title = postData[i].title;
    appendFunc(id, title, body);
  }
}
function appendFunc(id, title, body) {
  const postId = document.createElement("span");
  postId.innerHTML = "Post " + id + ":";

  const postTitle = document.createElement("h3");
  postTitle.innerHTML = title;

  const postBody = document.createElement("p");
  postBody.innerHTML = body;

  const postButton = document.createElement("a");
  postButton.innerHTML = "Comments";
  postButton.href = "comments.html?postId=" + id;
  postButton.id = "button";

  const post = document.createElement("div");
  post.setAttribute("id", "post");
  post.appendChild(postId);
  post.appendChild(postTitle);
  post.appendChild(postBody);
  post.appendChild(postButton);
  const user = document.getElementById("users");
  user.appendChild(post);
}
