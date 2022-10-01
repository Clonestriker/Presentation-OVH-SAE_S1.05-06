const btn = document.querySelector('#btn');
over = new Boolean(false);



btn.addEventListener('mouseover', (e) => {
    over = true
    document.getElementById("btn").style.opacity="100%";


});

btn.addEventListener('mouseout', (e) => {
    over = false
    document.getElementById("btn").style.opacity="30%";
    

});


window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 300) {
        document.getElementById("btn").style.opacity="100%";
    }
    else if((window.innerHeight + window.pageYOffset <= document.body.offsetHeight - 300)&& over == false ){
        document.getElementById("btn").style.opacity="30%";
    }

}

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})