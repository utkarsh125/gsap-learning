# INTRODUCTION

**GSAP** or **GreenShock Animation Project** is an animation library that helps you to create beautiful websites - and for the frontend part you need it since it helps you design all those modern looking websites.

![[gsap-1.png]]

### Project Setup
This should be easy since this is the very first tutorial of GSAP so create three files.
- `index.html`
- `style.css`
- `script.js`

**HTML Code should have the gsap-cdn script** and *all the scripts should be enclosed within the body tag but below everything...*
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>GSAP Introduction</title>
<link rel="stylesheet" href="style.css" />
</head>
<body>

<div id="box"></div>


<script
src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg=="
crossorigin="anonymous"
referrerpolicy="no-referrer"
></script>
<script src="script.js"></script>
</body>
</html>
```

### Targeting the element for GSAP Animations
Inside `script.js`
You can target an html tag through its `id`

```js
gsap.to("#box", {
	x: 1000,
	duration: 2,
	delay: 1
})
```

- `delay` defines the span of time after which the animation will start executing
- `duration` defines the total time for the animation to finish
- `x` this is used to animate things on the x-axis

#### Concept clearing...
when you use `gsap.to()` You go initial to the final position. But when you use `gsap.from()` you go from the final position back to the initial position.


#### Using CSS Properties in GSAP
Using CSS properties in GSAP is pretty simple given that you use **camel-case** for each styling property like this

```js
gsap.to("#box", {
x: 1000,
duration: 2,
delay: 1,
rotate: 360,
backgroundColor: "purple",
borderRadius: "50%",
})
```

**You can do that with text as well**

```js
gsap.to("h1", {
    color: "teal",
    opacity: 0,
    duration: 2,
    y:20,
    stagger: 1,
    delay: 1
})
```

`stagger` executes things one by one. For example, let's say there are three headings that are on the view port, so the headings would be executed one by one.
