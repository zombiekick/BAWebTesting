var scrollMagicController = new ScrollMagic.Controller();

function SetupAnim(className, controller)
{
    var revealElements = document.getElementsByClassName(className);
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                            offset: 70,												 // start a little later
                            triggerHook: 0.9,
                        })
                        .setClassToggle(revealElements[i], "visible") // add class toggle
                        .addIndicators({name: className + " " + (i+1) }) // add indicators (requires plugin)
                        .addTo(controller);
    }
}

SetupAnim("left-anim", scrollMagicController);
SetupAnim("right-anim", scrollMagicController);
SetupAnim("down-anim", scrollMagicController);
SetupAnim("up-anim", scrollMagicController);
