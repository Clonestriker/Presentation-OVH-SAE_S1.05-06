// const ratio = .1


// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: ratio
// }

// const handleIntersect = function(entries, observer){
    
//     entries.forEach(function(entry){
//         if (entry.intersectionRatio > ratio){
//             console.log('handleIntersect')
//             entry.target.classList.add('reveal-visible')
//             observer.unobserve(entry.target)
            
//         }
//     })
// }


// const observer = new IntersectionObserver(handleIntersect, options)
// document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
//     observer.observe(r)
// })

const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

if(window.scrollY > 930){
    navigation.classList.add('anim-nav');
} else {
    navigation.classList.remove('anim-nav');
}

})