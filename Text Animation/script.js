function breakText() {
  var h1 = document.querySelector("h1");

  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");

  var clutter = "";

  var halfValue = Math.floor(splittedText.length/2);
  splittedText.forEach(function (elem, idx) {
    // clutter += `<span class="a">${elem}</span>`;

    if(idx<halfValue){
        clutter += `<span class="first-half">${elem}</span>`
    }else{
        clutter += `<span class="second-half">${elem}</span>`
    }
  });

  // console.log(clutter);

  h1.innerHTML = clutter;
  console.log(clutter);
}

breakText();


//it will not work on inline animation so set h1 as inline-block
gsap.from("h1 .first-half", {
    y: 50,
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
    stagger: 0.15,
})

gsap.from("h1 .second-half", {
    y: 50,
    opacity: 0,
    duration: 0.4,
    delay: 0.5,
    stagger: -0.15,
})

