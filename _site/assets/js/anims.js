$ = jQuery;
var $w = $(window);

isUp = false;

var anims = ['.nav_wrapper', '.w0','.w3', '.hero h2', '.register', '.sponsor', '.main .container', '.footer'];

$w.load(function() {

    console.log(anims.length);
    for (var i in anims) {
        anims[i] = $(anims[i]);
        console.log(i);
        console.log( anims[i] )        
    }
    function animate(i) {
        if (i > anims.length) {
            return;
        }
        else {
            anims[i].animate({
                opacity: 1
            }, 500, function(){
                animate(i+1)
            });
        }
    }

    animate(0);

    $hero = $(".hero.wrapper");
    var $headers = $(".hero.wrapper h1, .hero.wrapper h2");
    var $header1 = $(".hero.wrapper h1");
    $headers.add($hero).css({
        "-webkit-transform": "translate3d(0px, 0px, 0px) scale(1)"
    });

    // $w.on("scroll", function() {
    //     var t = $w.scrollTop();
    //     if (t < 0) {
    //         isUp = true;
    //         var scale = 1 - (t / 300);
    //         $hero.css({
    //             "-webkit-transform": "translate3d(0px, 0px, 0px) scale(" + scale + ")"
    //         });
    //         var zdeg = -1 * Math.sin(t / 300) * 100;
    //         $headers.css({
    //             "-webkit-transform": "translate3d(0px, 0px, 0px) scale(1.0) perspective(400px) rotate3d(1,0,0," + zdeg + "deg)",
    //         });
    //     } else if (isUp) {
    //         $hero.css({
    //             "-webkit-transform": "translate3d(0px, 0px, 0px) scale(1.0)"
    //         });
    //         isUp = false;
    //     }
    // })
    // $w.on("scroll", function() {
    //     var t = $w.scrollTop();
    //     if (t > 0) {
    //         var scale = 1 - (t / 500);
    //         $headers.css({
    //             "-webkit-transform": "translate3d(0px, 0px, 0px) scale(" + scale + ")"
    //         });
    //     } else {
    //         var zdeg = Math.sin(t / 300) * 100;
    //         $("headers").css({
    //             "-webkit-transform": "perspective(400px) rotate3d(1,0,0," + zdeg + "deg)",
    //         });
    //     }
    // })
});
