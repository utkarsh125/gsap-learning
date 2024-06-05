var path = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var svg = document.querySelector('svg');
var string = document.querySelector('#animated-path');

svg.addEventListener("mousemove", function(dets){
    // Changing the value of dets
    path = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 990 100`;

    gsap.to("#animated-path",{
        attr: { d: path },
        duration: 0.2,
        ease: "power3.out",
    });
});

svg.addEventListener("mouseleave", function(){
    gsap.to("#animated-path", {
        attr:{d:finalPath},
        duration: 1.5,
        ease: "elastic.out",
    })
})