var scrollMagicController = new ScrollMagic.Controller();



function SetupAnim(className, controller)
{
    var revealElements = document.getElementsByClassName(className);
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                            offset: 50,												 // start a little later
                            triggerHook: 0.9,
                        })
                        .setClassToggle(revealElements[i], "visible") // add class toggle
                        /*.addIndicators({name: className + " " + (i+1) }) // add indicators (requires plugin)*/
                        .addTo(controller);
    }
}

SetupAnim("left-anim", scrollMagicController);
SetupAnim("right-anim", scrollMagicController);
SetupAnim("down-anim", scrollMagicController);
SetupAnim("up-anim", scrollMagicController);

/*var controller = new ScrollMagic.Controller();
var tl = new TimelineMax();
tl.staggerFrom(["#section-one h1", "#section-one p"], 1.25, {
    scale: 0,
    cycle: {
    y: [-50, 50]
  },
  ease: Elastic.easeOut,
  stagger: {
    from: "center",
    amount: 0.25,
  }
});

var scene = new ScrollMagic.Scene({
  triggerElement: "#logo",
  triggerHook: 0
})
  .addIndicators({
    colorTrigger: "white",
    colorStart: "white",
    colorEnd: "white",
    indent: 5
  })
  .setTween(tl)
  .addTo(controller);
*/

/*
AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
  });
  */