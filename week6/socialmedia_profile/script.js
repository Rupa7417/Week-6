// Example: Like button functionality

document.addEventListener("DOMContentLoaded", () => {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        post.addEventListener("click", () => {
            alert("You liked this post!");
        });
    });
});
