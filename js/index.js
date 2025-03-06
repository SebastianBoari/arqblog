document.addEventListener("DOMContentLoaded", (event) => {
    const wrapText = (containerSelector) => {
        const container = document.querySelector(containerSelector)
        if (!container) return;

        const items = Array.from(container.querySelectorAll(".services_text"))

        const containerWidth = container.clientWidth

        let totalWidth = 0
        let gap = 32
        let visibleCount = 0

        items.forEach((item, index) => {

            let itemWidth = item.offsetWidth

            totalWidth += itemWidth + (index > 0 ? gap : 0)

            if (totalWidth <= containerWidth) {
                visibleCount++
            }
        })

        items.forEach((item, index) => {
            item.style.display = index < visibleCount ? "inline-block" : "none"
        })
    }

    wrapText(".arq_text-services")
    wrapText(".studio_text-services")

    window.addEventListener("resize", () => {
        wrapText(".arq_text-services")
        wrapText(".studio_text-services")
    })

    /**    gsap.registerPlugin(ScrollTrigger) 

    gsap.to('.projects_media-img-1',{
        opacity: 0,
        scrollTrigger: {
            trigger: "#project-1",
            pin: ".projects_media",
            scrub: 2,
            start: "top top",
            end: () => "+=" + (window.innerHeight),
        }
    })

    gsap.to('.projects_media-img-2',{
        opacity: 0,
        scrollTrigger: {
            trigger: "#project-2",
            pin: ".projects_media",
            scrub: 2,
            start: "top top",
            end: () => "+=" + (window.innerHeight),
        }
    }) */

    gsap.registerPlugin(ScrollTrigger)

    function updateScrollTriggers() {
        const isMobile = window.innerWidth < 992
        
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())

        if (!isMobile) {
            gsap.to('.projects_media-img-1', {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#project-1",
                    pin: ".projects_media",
                    scrub: 2,
                    start: "top top",
                    end: () => "+=" + (window.innerHeight),
                }
            })

            gsap.to('.projects_media-img-2', {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#project-2",
                    pin: ".projects_media",
                    scrub: 2,
                    start: "top top",
                    end: () => "+=" + (window.innerHeight),
                }
            })

            gsap.to('#about', {
                x: () => "-=" + (window.innerWidth * 2),
                scrollTrigger: {
                    trigger: "#about",
                    pin: "#about",
                    pinSpacing: true,
                    scrub: 2,
                    start: "top top",
                    end: () => "+=" + (window.innerHeight * 3),
                }
            })
        } 

        ScrollTrigger.refresh()
    }

    updateScrollTriggers()

    window.addEventListener('resize', updateScrollTriggers)

    const lightboxSingle1 = GLightbox({
        selector: '.glightbox-home-1',
        touchNavigation: true,
        loop: false 
    })

    const lightboxSingle2 = GLightbox({
        selector: '.glightbox-home-2',
        touchNavigation: true,
        loop: false 
    })

    const lightboxSingle3 = GLightbox({
        selector: '.glightbox-home-3',
        touchNavigation: true,
        loop: false 
    })

    const lightboxHomeGallery1 = GLightbox({
        selector: '.glightbox-project-1',
        touchNavigation: true,
        loop: true 
    })

    const lightboxHomeGallery2 = GLightbox({
        selector: '.glightbox-project-2',
        touchNavigation: true,
        loop: true 
    })

    const lightboxHomeGallery3 = GLightbox({
        selector: '.glightbox-project-3',
        touchNavigation: true,
        loop: true 
    })
})