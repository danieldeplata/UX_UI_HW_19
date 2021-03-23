let repeatingTextScroller = document.querySelector('.repeatingTextScroller > span')
repeatingTextScroller.innerHTML = '&nbsp;' + repeatingTextScroller.textContent
let scrollingText = repeatingTextScroller.textContent
let originalWidth = repeatingTextScroller.offsetWidth
let margin = 0

generateScrollerText()
setInterval(animateScrollerText, 20)


function generateScrollerText() {
    while (repeatingTextScroller.offsetWidth <= 3840) {
        repeatingTextScroller.textContent += scrollingText
    }
}


function animateScrollerText() {
    margin++
    if (margin === originalWidth) {
        margin = 0
    } else {
        repeatingTextScroller.style.marginLeft = '-' + margin + 'px'
    }
}

$(".togglePush").on("click", function() {
    $(this).next(".toggleDrop").slideToggle("slow");
});

// $(".navItem").on("mouseover", function() {
//     $(this).animate({ width: "+=50", height: "+=20", "font-size": "+=10", opacity: "0.5" }, 1000);
//     $(".nav").animate({ height: "+=20" });
// });
// $(".navItem").on("mouseleave", function() {
//     $(this).animate({ width: "-=50", height: "-=20", "font-size": "-=10", opacity: "1" }, 1000);
//     $(".nav").animate({ height: "-=20" });
// });

/* $(function() {
    $(".border, #content").hide();
    $("#topbar").show();
    $("#topbar").animate({ width: "318px" }, 1000, function() {
        $("#rightbar").show();
        $("#rightbar").animate({ height: "238px" }, 1000, function() {
            $("#bottombar").show();
            $("#bottombar").animate({ width: "318px" }, 1000, function() {
                $("#leftbar").show();
                $("#leftbar").animate({ height: "238px" }, 1000, function() {
                    $("#content").fadeIn(1000);
                });
            });
        });
    });
}); */