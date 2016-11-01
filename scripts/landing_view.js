var LandingView = function () {

    console.info("Landing View init called!");
//    TweenMax.set("#logo", {rotation: "360",scale: 0,opacity: 0});
//    TweenMax.set("#black_spot", {opacity: 0});
//    TweenMax.set("#s_text", {opacity: 0});
//    TweenMax.set("#logo_text", {opacity: 0});
//    TweenMax.set(".st_0", {opacity: 0,transformOrigin: "center center"});
//    TweenMax.set(".subline", {opacity: 0});
//    TweenMax.set(".st_1", {scaleX: 0,opacity: 0,transformOrigin: "center center"});
//    TweenMax.set(".st_2", {scaleX: 0,opacity: 0,transformOrigin: "right"});
//    TweenMax.set(".st_3", {scaleX: 0,opacity: 0,transformOrigin: "left"});
//    TweenMax.set(".supporting_copy", {opacity: 0});
//    TweenMax.set(".enter_btn", {opacity: 0});
}

LandingView.prototype.animateView = function () {

    console.info("AnimateView");

//    var tl = new TimelineMax({onComplete: enableEnterButton});
//
//    tl.to("#logo", 2, {rotation: 0, scale: 1, opacity: 1, ease: Strong.easeInOut}, "-=2")
//      .to("#black_spot", 1, {opacity: 1, ease: Strong.easeInOut}, "-=1")
//      .to("#s_text", 1, {opacity: 1, ease: Strong.easeInOut}, "-=0.5")
//      .to("#logo_text", 1, {opacity: 1, ease: Strong.easeInOut}, "-=0.5")
//      .to(".st_1", 1, {scaleX: 1,opacity: 1,ease: Strong.easeInOut}, "-=0.5")
//      .to(".st_0", 1, {opacity: 1,rotation: 0,ease: Strong.easeInOut}, "-=0.5")
//      .to(".subline", 1, {opacity: 1, ease: Strong.easeInOut}, "subline-=0.8")
//      .to(".st_2", 1, {scaleX: 1,opacity: 1,ease: Strong.easeInOut}, "subline-=1")
//      .to(".st_3", 1, {scaleX: 1,opacity: 1,ease: Strong.easeInOut}, "subline-=1")
//      .to(".supporting_copy", 1, {opacity: 1,ease: Strong.easeOut}, "-=0.5")
//      .to(".enter_btn", 1, {opacity: 1,ease: Strong.easeOut}, "-=0.5");
//
//    tl.timescale = 1.2;
//
//    function enableEnterButton() {
//        $(".enter_btn").click(onEnterHandler);
////        $(".enter_btn").mouseover(onEnterOverHandler);
////        $(".enter_btn").mouseout(onEnterOutHandler);
//    }
//
//    function onEnterHandler() {
//        console.info("onEnterHandler();");
//        reverseAnimation();
//    }
//
//    function reverseAnimation() {
//        console.info("reverseAnimation();");
//
//        var tl = new TimelineMax({
//            onComplete: this.revealNextPage
//        });
//
//        tl.to(".enter_btn", 1, {opacity: 0,ease: Strong.easeOut})
//          .to(".supporting_copy", 1, {opacity: 0, ease: Strong.easeOut}, "-=0.8")
//          .to(".st_0", 1, {opacity: 0, rotation: 0, ease: Strong.easeInOut}, "-=0.8")
//          .to(".subline", 1, {opacity: 0,ease: Strong.easeInOut}, "subline-=0.8")
//          .to(".st_2", 1, {scaleX: 0,opacity: 0, ease: Strong.easeInOut}, "subline-=0.8")
//          .to(".st_3", 1, {scaleX: 0,opacity: 0, ease: Strong.easeInOut}, "subline-=0.8")
//          .to(".st_1", 1, {scaleX: 0,opacity: 0,ease: Strong.easeInOut}, "-=0.8")
//          .to("#logo_text", 1, {opacity: 0, ease: Strong.easeInOut}, "-=0.8")
//          .to("#s_text", 1, {opacity: 0,ease: Strong.easeInOut}, "-=0.8")
//          .to("#black_spot", 1, {opacity: 0,ease: Strong.easeInOut}, "-=1")
//          .to("#logo", 2, {scale: 0,rotation: "360",opacity: 0,ease: Strong.easeInOut}, "-=0.8");
//
//        tl.timeScale(1.2);
//    }

//    function onEnterOverHandler() {
//        console.info("onEnterOverHandler();");
//
//        TweenMax.to(this, 0.75, {
//            backgroundColor: "#4ec4c8",
//            borderColor: "black",
//            color: "black"
//        });
//    }
//
//    function onEnterOutHandler() {
//        console.info("onEnterOutHandler();");
//        TweenMax.to(this, 0.75, {
//            backgroundColor: "#000000",
//            borderColor: "white",
//            color: "white"
//        });
//    }

//    function revealNextPage() {
//        console.info("revealNextPage();");
//        var event = new CustomEvent('ON_VIEW_ID', { 'id':0});
//        this.dispatchEvent(event);
//    }
}
