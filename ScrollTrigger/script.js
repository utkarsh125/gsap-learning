// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

tl.to("#page2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
    }
});


tl.from("#sdown", {
    repeat: -1,
    y: -30,
    yoyo: true,
    duration: 1,
})

tl.from("#ph1", {
    y: 30,
    duration: 1,
    repeat: -1,
    yoyo:true,
})