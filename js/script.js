//메뉴
let tabDiv=$('.menuWrap');
let anchors=tabDiv.find('.menu-area ul li a');
let PanelDiv=tabDiv.find('.subMenu-area');
let lastAnchor;
let lastPanel;

lastAnchor=anchors.mouseenter();
lastPanel=$(lastAnchor.attr('data-board'));
PanelDiv.removeClass('on');
$('.menu-area').hide();

if(window.innerWidth > 850){
    $('.menu').hover(function(){
        $('.menu-area').show();
    }, function(){
        $('.menu-area').hide();
    });
};
    
anchors.append('<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" class="css-7kp13n e181xm9y0"><path xmlns="http://www.w3.org/2000/svg" d="M9.41421356,12 L15.7071068,5.70710678 C16.0976311,5.31658249 16.0976311,4.68341751 15.7071068,4.29289322 C15.3165825,3.90236893 14.6834175,3.90236893 14.2928932,4.29289322 L7.29289322,11.2928932 C6.90236893,11.6834175 6.90236893,12.3165825 7.29289322,12.7071068 L14.2928932,19.7071068 C14.6834175,20.0976311 15.3165825,20.0976311 15.7071068,19.7071068 C16.0976311,19.3165825 16.0976311,18.6834175 15.7071068,18.2928932 L9.41421356,12 Z" transform="translate(11.500000, 12.000000) scale(-1, 1) translate(-11.500000, -12.000000) "></path></svg>');

anchors.mouseenter(function(){
    let currentAnchor=$(this);
    let currentPanel=$(currentAnchor.attr('data-board'));
    
if(window.innerWidth < 980){
    PanelDiv.css('display', 'none');
}else{
    lastPanel.removeClass('on');
    currentPanel.addClass('on');
    $(this).find('svg').css('opacity','1');

    lastAnchor=currentAnchor;
    lastPanel=currentPanel;
    }
});

anchors.mouseleave(function(){
    $(this).find('svg').css('opacity','0');
});
tabDiv.mouseleave(function(){
    PanelDiv.removeClass('on');  
});


//모바일 메뉴
let menu=$('.mobile-menu');
let Btn=$('.menuButton');
let close=$('.appbarCloseBt');

Btn.click(function(e){
    e.preventdefault;
    if(window.innerWidth < 850){
        menu.stop().animate({left:0},500);
        close.stop().animate({opacity:1},500);
    }else{
        menu.stop().animate({left:'-100%'},500);
        close.stop().animate({opacity:0},500);
    };
});
close.click(function(e){
    e.preventdefault;
    menu.stop().animate({left:'-100%'},500);
    close.stop().animate({opacity:0},500);
});


$(window).resize(function(){
    if(window.innerWidth > 850){
        $('.menu').hover(function(){
            $('.menu-area').show();
        }, function(){
            $('.menu-area').hide();
        }); 
    }else{
        $('.menu').hover(function(){
            $('.menu-area').hide();
        }, function(){
            $('.menu-area').hide();
        });
    }
})
    
//section1(자동텍스트)
$('#typed').typed({
    strings:["심리상담","쇼핑몰","전자책","홈페이지","VOD"],
    typeSpeed:50,
    backSpeed:50,
    backDelay:1000,
    loop:true,
    showCursor: true,
});

//section1(슬라이드)
var swiper = new Swiper(".mySwiper", {
    speed : 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {     //자동슬라이드 (false-비활성화)
        delay: 3000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    on: {
        slideChange : function() {
            //이벤트 또는 조건문으로 이용하면 된다.
            let getColor = $('.swiper-slide').attr('data-color');
            $('#section1').css('background-color','getColor');
            console.log(getColor);
        }
    },
    
});




$(window).resize(function(){
    var boxWidth = $('.swiper .swiper-wrapper .swiper-slide').width();
    if(boxWidth < 540){
        $('.swiper').height(boxWidth*0.7);
    }else{
        $('.swiper').height(boxWidth*0.7);
    }
    if(window.innerWidth > 980){
        $('#section1 .container').css('height','100%')
    }else if(window.innerWidth < 980){
        $('#section1 .container').height((boxWidth*0.7)+158.5);
    }else if(window.innerWidth < 850){
        $('#section1 .container').height((boxWidth*0.7)+150.5);
    }else if(window.innerWidth < 700){
        $('#section1 .container').height((boxWidth*0.7));
    }
    });


