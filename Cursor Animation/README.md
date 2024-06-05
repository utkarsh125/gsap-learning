In modern web designing, the use of **GSAP cursors** is pretty dominant so that's important to learn.

**Any cursor that you want on the screen would require you to keep the position of that cursor `fixed`** - **doing this will help you to keep the nature of the cursor constant throughout multiple pages**

*you can also use `absolute` but that will not work for multiple pages.*

```
#cursor{
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    position: fixed;
}
```


## Step-by-Step Explanation of the Code

1. **Selecting DOM Elements**:
   - `main`: This variable stores a reference to the HTML element with the ID `main`.
   - `cursor`: This variable stores a reference to the HTML element with the ID `cursor`.
   - `imageDiv`: This variable stores a reference to the HTML element with the ID `image`.

2. **Mouse Move Event on `main`**:
   - An event listener is added to the `main` element that triggers on mouse movement.
   - The `gsap.to` function animates the `cursor` element to follow the mouse coordinates:
     - `x` and `y` properties are set to `dets.clientX` and `dets.clientY`, which represent the mouse's position on the screen.
     - `duration: 0.6` sets the duration of the animation to 0.6 seconds.
     - `ease: "back.out"` sets the easing function for smooth animation.
     - `border: "0.1px solid"` sets the border of the cursor.

3. **Mouse Enter Event on `imageDiv`**:
   - An event listener is added to the `imageDiv` element that triggers when the mouse enters the element.
   - The `cursor.innerHTML` is set to "ER", changing the content of the cursor.
   - The `gsap.to` function animates the cursor:
     - `scale: 5` increases the size of the cursor by 5 times.
     - `backgroundColor: "#ffffff8c"` changes the cursor's background color to a semi-transparent white.
     - `textColor: "teal"` sets the text color inside the cursor to teal.

4. **Mouse Leave Event on `imageDiv`**:
   - An event listener is added to the `imageDiv` element that triggers when the mouse leaves the element.
   - The `cursor.innerHTML` is reset to an empty string, removing the text inside the cursor.
   - The `gsap.to` function animates the cursor back to its original state:
     - `scale: 1` resets the size of the cursor.
     - `backgroundColor: "#fff"` sets the cursor's background color to white.


```js
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.clientX, // Changed to clientX for accuracy
        y: dets.clientY, // Changed to clientY for accuracy
        duration: 0.6,
        ease: "back.out",
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
```


#### Problem of Cursor Jitter in GSAP
When using GSAP to animate the cursor, a common problem that can arise is cursor jitter. This happens because the animation is constantly trying to catch up with the mouse's movements, causing a shaking or jittery effect.

To fix that you can **place a transparent overlay** on top of the **image** you want to hover.

