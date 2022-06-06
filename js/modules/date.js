function date() {
    // Date 
    setInterval(function() {
        let p = document.querySelector('.date');

        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        a = new Date();

        p.textContent = a.getDate() + " - " + month[a.getMonth()] + " . " + a.getFullYear() + " . " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    }, 500);

}

module.exports = date;