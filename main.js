var scrollMagicController = new ScrollMagic.Controller();

function SetupAnim(className, isReversible, controller)
{
    var revealElements = document.getElementsByClassName(className);
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                            offset: 70,												 // start a little later
                            triggerHook: 0.9,
                            reverse: isReversible,
                        })
                        .setClassToggle(revealElements[i], "visible") // add class toggle
                        /*.addIndicators({name: className + " " + (i+1) }) // add indicators (requires plugin)*/
                        .addTo(controller);
    }
}

// function SetupTween(className, controller)
// {
//     var revealElements = document.getElementsByClassName(className);
//     for (var i=0; i<revealElements.length; i++) { // create a scene for each element

//         // build tween
//         var tween = TweenMax.to("#animate3", 1, {className: "+=fish"});
        
//         new ScrollMagic.Scene({triggerElement: revealElements[i], duration: 200, offset: -50})
// 					.setTween(tween)
// 					.addIndicators({name: "tween css class"}) // add indicators (requires plugin)
//                     .addTo(controller);
                    
//     }
// }

function SetupAnimation(className, animationName, controller){

    var revealElements = document.getElementsByClassName(className);
    for (var i=0; i<revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                            triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                            offset: 70,												 // start a little later
                            triggerHook: 0.9,
                            reverse: false,
                        })
                        .setClassToggle(revealElements[i], animationName) // add class toggle
                        /*.addIndicators({name: className + " " + (i+1) }) // add indicators (requires plugin)*/
                        .addTo(controller);
    }
}

SetupAnim("left-anim", false, scrollMagicController);
SetupAnim("right-anim", false, scrollMagicController);
SetupAnim("down-anim", false, scrollMagicController);
SetupAnim("up-anim", false, scrollMagicController);

SetupAnim("podcast-line-animation", true, scrollMagicController);
SetupAnim("remote-video-line-animation", true, scrollMagicController);
