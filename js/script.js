// $(document).ready(function(){
// 	$(".circle").height($(".circle").width());
// 	var topMargin = ($(".circle").height() - $(".contact").height())/2;
// 	$(".contact").css("margin-top", topMargin);

// 	$(window).scroll(function(){
// 		if($(window).scrollTop() >= 70){
// 	    	$(".navbar").addClass("navbar-scrolled");
// 	    	$(".go-top").show();
// 		}
// 		else{
// 			$('.navbar').removeClass("navbar-scrolled");
// 			$(".go-top").hide();
// 		}

// 	});
// });

// $(document).ready(function () {
//     $(document).on("scroll", onScroll);
    
//     //smoothscroll
//     $('a[href^="#"]').on('click', function (e) {
//         e.preventDefault();
//         $(document).off("scroll");
        
//         $('a').each(function () {
//             $(this).parent().removeClass('active');
//         })
//         $(this).parent().addClass('active');
      
//         var target = this.hash,
//             menu = target;
//         $target = $(target);
//         $('html, body').stop().animate({
//             'scrollTop': $target.offset().top+2
//         }, 400, 'swing', function () {
//             window.location.hash = target;
//             $(document).on("scroll", onScroll);
//         });
//     });
// });

// function onScroll(event){
// 	$(".circle").height($(".circle").width());

//   var scrollPos = $(document).scrollTop();
//   $('.nav li a').each(function () {
//         var currLink = $(this);
//         var refElement = currLink.attr("href");
//         var splitEle = refElement.split('#');
//         if ($("#"+splitEle[1]).offset().top <= scrollPos && $("#"+splitEle[1]).offset().top + $("#"+splitEle[1]).height() > scrollPos) {
//             $('.nav li').removeClass("active");
//             currLink.parent().addClass("active");
//         }else{
//             currLink.parent().removeClass("active");
//         }
//     });
// }
// $( window ).resize(function() {
//   $(".circle").height($(".circle").width());

// });



































$(document).ready(function(){
    $(".circle").height($(".circle").width());
    var topMargin = ($(".circle").height() - $(".contact").height())/2;
    $(".contact").css("margin-top", topMargin);

    $(window).scroll(function(){
        if($(window).scrollTop() >= 70){
            $(".navbar").addClass("navbar-scrolled");
            $(".go-top").show();
        }
        else{
            $('.navbar').removeClass("navbar-scrolled");
            $(".go-top").hide();
        }

    });
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 400, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    $(".circle").height($(".circle").width());
    topMargin = ($(".circle").height() - $(".contact").height())/2;
    $(".contact").css("margin-top", topMargin);

  // var scrollPos = $(document).scrollTop();
  // $('.nav li a').each(function () {
  //       var currLink = $(this);
  //       var refElement = currLink.attr("href");
  //       var splitEle = refElement.split('#');
  //       if ($("#"+splitEle[1]).offset().top <= scrollPos && $("#"+splitEle[1]).offset().top + $("#"+splitEle[1]).height() > scrollPos) {
  //           $('.nav li').removeClass("active");
  //           currLink.parent().addClass("active");
  //       }else{
  //           currLink.parent().removeClass("active");
  //       }
  //   });
}
$( window ).resize(function() {
  $(".circle").height($(".circle").width());
  topMargin = ($(".circle").height() - $(".contact").height())/2;
    $(".contact").css("margin-top", topMargin);
});









$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('.parent').each(function(i) {
                if ($(this).position().top - ($(window).height()*35)/100<= scrollDistance) {
                        $('.nav li.active').removeClass('active');
                        $('.nav li').eq(i).addClass('active');
                }
        });
}).scroll();