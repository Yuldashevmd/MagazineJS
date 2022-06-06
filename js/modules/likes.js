function likes() {
    // likes 
    function clickLike() {
        let likes = document.querySelectorAll('.like');

        likes.forEach(function(item) {
            item.addEventListener('click', () => {
                item.classList.toggle('marked');
                // item.nextElementSibling.innerHTML++;
                if (item.classList.contains('marked')) {
                    item.nextElementSibling.textContent++
                } else {
                    item.nextElementSibling.textContent--
                }
            });
        });
    }
    clickLike();
}

module.exports = likes;