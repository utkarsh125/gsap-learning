# ScrollTrigger

ScrollTrigger enables anyone to create scroll-animations with minimal code. Infinitely flexible, Scrub, pin, snap or just trigger - anything scroll-related, even if it has nothing to do with animation.

**Start by adding three page-divs with a box inside - Make sure you have the gsap-cdn script at the bottom of the body tag.**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet">

</head>
<body>

    <div id="page1">
        <div id="box">

        </div>
    </div>

    <div id="page2">
        <div id="box">
            
        </div>
    </div>

    <div id="page3">
        <div id="box">
            
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js""></script>

</body>
</html>
```

**Add some styles in `style.css`**

```css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Dela Gothic One", sans-serif;
}

html,
body{
    height: 100%;
    width: 100%;
}

#box{
    background-color: teal;
    border-radius: 15px;
    border: 10px solid black;
    height: 300px;
    width: 300px;
}

#page1{
    height: 100%;
    width: 100%;
    background-color: lightblue;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

#page2{
    height: 100%;
    width: 100%;
    background-color: yellow;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

#page3{
    height: 100%;
    width: 100%;
    background-color: crimson;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

#### ScrollTrigger Animation Guide

Go the this link and copy the *ScrollTrigger CDN*
Version used while learning - `ver1.0.6`

CDN Snippet
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/1.0.6/ScrollTrigger.min.js" integrity="sha512-+LXqbM6YLduaaxq6kNcjMsQgZQUTdZp7FTaArWYFt1nxyFKlQSMdIF/WQ/VgsReERwRD8w/9H9cahFx25UDd+g==" crossorigin="anonymous" referrerpolicy="no-referrer">
</script>
```

This will go inside your HTML file **under the gsap-cdn and above your own script IMPORTANT**

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/1.0.6/ScrollTrigger.min.js" integrity="sha512-+LXqbM6YLduaaxq6kNcjMsQgZQUTdZp7FTaArWYFt1nxyFKlQSMdIF/WQ/VgsReERwRD8w/9H9cahFx25UDd+g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="script.js""></script>
```

#### Initialising scrollTrigger

Remember that the variable will be in **camel case**

```js
var tl = gsap.timeline();

tl.from("#page1 #box",{
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    borderRadius: 360,
})

tl.from("#page2 #box",{
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    borderRadius: 360,
    scrollTrigger: "#page2 #box"
})

tl.from("#page3 #box",{
    scale: 0,
    duration: 1,
    delay: 1,
    rotate: 360,
    borderRadius: 360,
    scrollTrigger: "#page3 #box",
})
```

But this is the simple way to trigger animations on scroll, there are **Advanced Methods** as well

- `scale: 0`: The element starts at zero scale (invisible).
- `duration: 1`: The animation duration is 1 second.
- `delay: 1`: The animation starts after a 1-second delay.
- `rotate: 360`: The element rotates 360 degrees.
- `borderRadius: 360`: The element's border radius changes to 360, making it circular.
- `scrollTrigger`: The animation triggers when `#page1 #box` enters the viewport.
    - `trigger: "#page1 #box"`: Specifies the element that triggers the animation.
    - `scroller: "body"`: The entire body is the scrolling container.
    - `markers: true`: Visual markers are shown for debugging.


Some other properties
- `scrub`: This is used to animate the elements based on the scroll bar - this accepts **boolean** and **numeric** values. 
- `start`: This property is used to define when the animation will start
- `end`: Similar to start, but it define when the animation will end


### Making Horizontal Scroll Animation
Making the horizontal scroll is not that complicated as it seems, we just need to pin the element where it ends. To do this

**Create a page and inside that page div add h1**
So that way the `PAGE ---> Parent` and `H1 ---> Child`

```js
tl.to("#page2 h1",{
    transform: "translateX(-150%)"
    scrollTrigger:{
        trigger: "#page", ---> HERE YOU WILL TARGET THE PARENT OF THE CHILD
        scroller: "body",
        markers: true,
        start: "top 50%",
    }
})
```

More details in `index.html`

