const lightboxSingle = GLightbox({
    selector: '.glightbox1',
    touchNavigation: true,
    loop: false 
})

const lightboxSingle2 = GLightbox({
    selector: '.glightbox2',
    touchNavigation: true,
    loop: false 
})

const lightbox = GLightbox({
    selector: '.glightbox3', 
    touchNavigation: true,
    loop: true
})

gsap.registerPlugin(ScrollTrigger)

function updateScrollTriggers() {
    const isMobile = window.innerWidth < 992
    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    if (!isMobile) {
        gsap.to('.img-1',{
            opacity: 0,
            scrollTrigger: {
                trigger: ".article-1",
                pin: ".project_figure",
                scrub: 2,
                start: "top top",
                end: () => "+=" + (window.innerHeight),
            }
        })
        
        gsap.to('.img-2',{
            opacity: 0,
            scrollTrigger: {
                trigger: ".article-2",
                pin: ".project_figure",
                scrub: 2,
                start: "top top",
                end: () => "+=" + (window.innerHeight),
            }
        })
        
        gsap.to('.article-2',{
            backgroundColor: "#D8B589",
            scrollTrigger: {
                trigger: ".article-1",
                scrub: 2,
                start: "top top",
                end: () => "+=" + (window.innerHeight),
                duration: 1,
            }
        })
    } 

    ScrollTrigger.refresh()
}

updateScrollTriggers()
window.addEventListener('resize', updateScrollTriggers)
