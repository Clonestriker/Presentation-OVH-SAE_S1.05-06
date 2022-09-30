const ratio = .1


const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function(entries, observer){
    
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio){
            console.log('handleIntersect')
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
            
        }
    })
}


const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer.observe(r)
})


const ratio2 = .1
const options2 = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect2 = function(entries, observer2){
    
    entries.forEach(function(entry){
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}


const observer2 = new IntersectionObserver(handleIntersect2, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
    observer2.observe(r)
})
