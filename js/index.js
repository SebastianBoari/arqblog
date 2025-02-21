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


    
    gsap.registerPlugin(ScrollTrigger) 

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
    })

    gsap.to('#about',{
        x: () => "-=" + (window.innerWidth * 2),
        scrollTrigger: {
            trigger: "#about",
            pin: "#about",
            scrub: 2,
            start: "top top",
            end: () => "+=" + (window.innerHeight * 3),
        }
    })
})