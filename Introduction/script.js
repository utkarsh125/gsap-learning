// gsap.to("#box", {
//     x: 1200,
//     duration: 2,
//     delay: 1,
//     rotate: 180,
//     backgroundColor: "purple",
//     borderRadius: "50%",
//     repeat: -1, 
//     yoyo: true,
//     // repeat = n + 1;
// })

// gsap.to("#box2",{
//     x: 500,
//     y: 500,
//     duration: 3,
//     delay: 1
// })

// gsap.to("h1", {
//     color: "teal",
//     opacity: 0,
//     duration: 2,
//     y:20,
//     stagger: 1,
//     delay: 1
// })


// gsap.to("#box1", {
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// })

// gsap.to("#box2", {
//     x:1500,
//     backgroundColor: "yellow",
//     duration: 1.5,
//     delay: 2.5,
// })

// gsap.to("#box3", {
//     x: 1500,
//     scale: 0.5,
//     borderRadius: "50%",
//     duration: 1.5,
//     delay: 4,
// })

// var tl = gsap.timeline()


// tl.to("#box1",{
//     x: 1500,
//     rotate: 360,
//     duration: 1.5,
//     delay: 1,
// })


// tl.to("#box2",{
//     x: 1500,
//     rotate: 360,
//     duration: 2.5,
//     backgroundColor: "crimson",
//     delay: 1,
// })

var tl = gsap.timeline();

tl.from("h2",{
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
})

tl.from("h4",{
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    stagger: 0.3,
})

tl.from("h1", {
    y:20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
})