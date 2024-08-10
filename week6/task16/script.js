document.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', function() {
        alert(`You clicked on ${this.dataset.tag} tag`);
    });
});
