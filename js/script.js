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
var swiper = new Swiper("#section1 .mySwiper", {
    observer: true,
    observeParents: true,
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
    autoplay: {
        delay: 3000,
        disableOnInteraction: false, 
    },
    on: {
        activeIndexChange : function() {
            let getColors=['#1E44A6', 'rgb(212, 89, 83)', 'rgb(6, 27, 66)','rgb(253, 138, 156)','rgb(0, 102, 255)','rgb(8, 169, 75)','rgb(55, 17, 108)'];
            let getColorsIdx=getColors[this.realIndex]
           
             $('#section1').css('background', getColorsIdx);
          
        }
    }
});

//swiper 재사용 함수
function resizeSwiper(){
    var boxWidth = $('.swiper .swiper-wrapper .swiper-slide').width();
    if(boxWidth < 540){
        $('.swiper').height(boxWidth*0.7);
    }else{
        $('.swiper').height(boxWidth*0.7);
    }
};

//section4-iframe 재사용 함수
function resizeIframeS4(){
    if(window.innerWidth < 980){
        var containerWidth = $('#section4 .container').width();
        const iframeWrap=$('#section4 .container .section4-top-box .section4-top-box-right');
        const iframe=$('#section4 .container .section4-top-box .section4-top-box-right iframe');
        
        iframe.width(containerWidth*0.78);
        iframeWrap.width(containerWidth*0.78);
        iframe.height(containerWidth*0.5);
        iframeWrap.height(containerWidth*0.5);
         
    }
};

//sectionBar 재사용 함수
function sectionBar(){
    if(window.innerWidth < 1200){
        let barWidth = $('#sectionBar').width();
        let barHeight = $('#sectionBar').height();

        $('#sectionBar').height(barWidth*0.137);
    }
};

//section5-iframe 재사용 함수
function resizeIframeS5(){
    if(window.innerWidth < 1200){
        var containerWidth = $('#section5 .container').width();
        const iframe=$('#section5 .container .section5-videoWrap .videoTab iframe');
        
        iframe.width(containerWidth*0.327);
        iframe.height(containerWidth*0.183);
    }
};

//section5-slick-850
$(document).ready(function(){
    $('.section5-videoWrap-resize .slider-wrap').slick({
        slide: 'div',        //슬라이드 되어야 할 태그
        infinite : true,     //무한 반복 옵션     
        slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
        speed : 300,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true,         // 옆으로 이동하는 화살표 표시 여부
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
});

//section5-iframe-850 재사용 함수
function resizeIframeS5R(){
    if(window.innerWidth < 850){
        var containerWidth = $('#section5 .container').width();
        const iframe=$('#section5 .container .section5-videoWrap-resize .slider-wrap .slick-list .slick-track .slick-slide iframe');
        
        iframe.width(containerWidth*0.625);
        iframe.height(containerWidth*0.35);
    }
};

//section6-rankBar
let rankL=$('#section6 .container .section6-middle .section6-middle-wrap .rankWrap .rankList');

rankL.find('.rankContent').each(function(){
    $(this).append("<div class='rankConBar'></div>");
})


//유튜브 새창열림
function openPlay1(){
    var option="width=640,height=410,scrollbars=no";
    window.open("https://www.youtube.com/embed/r7HULhEb0PA","",option);
    return false;
};
function openPlay2(){
    var option="width=640,height=410,scrollbars=no";
    window.open("https://www.youtube.com/embed/3oEdjJLJdvs","",option);
    return false;
};
function openPlay3(){
    var option="width=640,height=410,scrollbars=no";
    window.open("https://www.youtube.com/embed/8vomiFIf7ZU","",option);
    return false;
};


sectionBar();
resizeSwiper();
resizeIframeS4();
resizeIframeS5();
resizeIframeS5R();

$(window).resize(function(){
    //모바일메뉴
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

    //슬라이드
    resizeSwiper();

    //theme
    var themeWidth = $('#section3 ul .section3-theme').width();
    if(window.innerWidth < 1200){
        $('#section3 ul .section3-theme').height((themeWidth*0.47));
    }else{
        $('#section3 ul .section3-theme').css('height','300px')
    }

    //iframe(section4)
    resizeIframeS4();

    //sectionBar
    sectionBar();
    
    //iframe(section5)
    resizeIframeS5();
    resizeIframeS5R();

});





