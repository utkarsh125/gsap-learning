![[string animation.gif]]

SVG's  are **Scalable Vector Graphics** meaning that their shapes can be changed as per our needs.

Size is constant so the pixels don't spread like that of images...

In this case we are going to utilise **[Paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)**

**SVG is a type container in which we can fit other elements.**

#### Curves
There are three different commands that can be used to create smooth curves. Two of those curves are [Bézier curves](https://developer.mozilla.org/en-US/docs/Glossary/Bezier_curve), and the third is an "arc" or part of a circle. You might have already gained practical experience with Bézier curves using path tools in Inkscape, Illustrator or Photoshop. There are an infinite number of Bézier curves, but only two simple ones are available in `<path>` elements: a cubic one, called with `C`, and a quadratic one, called with `Q`.

**Quadratic Curves**

```
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

![[Pasted image 20240604102917.png]]
*(source: MDN/docs)*

**Bézier Curves**
The cubic curve, `C`, is the slightly more complex curve. Cubic Béziers take in two control points for each point. Therefore, to create a cubic Bézier, three sets of coordinates need to be specified.

Several Bézier curves can be strung together to create extended, smooth shapes. Often, the control point on one side of a point will be a reflection of the control point used on the other side to keep the slope constant. In this case, a shortcut version of the cubic Bézier can be used, designated by the command `S` (or `s`).

![[Pasted image 20240604103156.png]] ![[Pasted image 20240604103238.png]] ![[Pasted image 20240604103259.png]]


Copy this snippet and paste it inside your `#string` div
```
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

This SVG code creates a quadratic Bezier curve. Here's a breakdown of its components and what they do:

- `<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">`: This defines the SVG container with a width of 190 units and a height of 160 units.
- `<path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>`: This defines the path for the quadratic Bezier curve.
    - `M 10 80`: This moves the starting point of the path to coordinates (10, 80).
    - `Q 95 10 180 80`: This defines the control point (95, 10) and the end point (180, 80) for the quadratic Bezier curve.
    - `stroke="black"`: This sets the color of the curve's stroke to black.
    - `fill="transparent"`: This ensures that the path is not filled with any color.

The quadratic Bezier curve starts at (10, 80), curves towards the control point (95, 10), and ends at (180, 80), creating an upward arching curve.

**What does `path` specifies?**
```
<path d="M 10 80 Q 95 10 180 80" ...
```

`M 10 80` mean distance 10px from X-axis and 80px from Y-axis. *This is the point where we start making the path.*

Similarly `Q 95 10` means Quadratic Curve X-axis: 95 and Y-axis: 10

![[Pasted image 20240604105744.png]]
Lastly `180 80` X-axis: 180 and Y-axis: 80.

#### Getting Started with the rope-magnet animation
Do start with this, firstly you will need `mouseenter` and `mouseleave` properties of DOM (Document Object Model)

`mouseenter` and `mouseleave` can be made to work in sync like this
```js
string.addEventListener("mouseenter", function(){
    console.log("Enter");
})

string.addEventListener("mouseleave", function(){
    console.log("Leave");
})
```

It should look something like this on the console
![[mouseenter mouseleave.png]]


Furthermore, you **MUST UTILIZE `mousemove`**
```js
string.addEventListener("mousemove", function(dets){
	console.log(dets);
})
```

`mousemove` reacts when the mouse moves on that object. `dets` when passed in the function provides the details of what is happening on the action of `mousemove`
![[mousemove.png]]


Now you can see that the X and Y axis of the current position of the mouse is visible.


#### Use of GSAP and the final code
There are some GSAP properties called the **[Easing Properties](https://gsap.com/docs/v3/Eases/)**
it comes in many types like `bounce`, `elastic`, `rough`, etc.

Combine that with `duration` and you will get a smooth scrolling animation

```js
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
```

*(result on the top)*