# Timeline

Timeline animation refers to the sequential execution of the components
**You don't need to use `delay` for each animation**
#### Initialising Timeline
For that you just need to store it inside a variable
```js
var tl = gsap.timeline();
```

#### Complete Code
```js
var menu = document.querySelector("#nav i");
var cross = document.querySelector("#full i");

var tl = gsap.timeline();

tl.to("#full",{
    right: 0,
    duration: 0.8,
})

tl.from("#full h4", {
    x: 150,
    duration: 0.6,
    stagger: 0.3,
    opacity: 0,
})

tl.from("#full i",{
    // right: 0,
    opacity: 0,
})

tl.pause();

menu.addEventListener("click", function(){
    tl.play();
})

cross.addEventListener("click", function(){
    tl.reverse();
    console.log("Reversed successfully")
})
```



