var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX, // Changed to clientX for accuracy
        y: dets.clientY, // Changed to clientY for accuracy
        duration: 0.6,
        ease: "back.out",
        // backgroundColor: "#fff",
        border: "0.1px solid ",
    });
});

imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "ER";
    gsap.to(cursor, {
        scale: 5,
        backgroundColor: "#ffffff8c",
        textColor: "teal",
        
    });
});

imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff",
    });
});
