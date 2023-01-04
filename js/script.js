// 메뉴
$('.menuWrap').each(function(){
    let tabDiv=$(this);
    let anchors=tabDiv.find('.menu-area ul li a');
    let PanelDiv=tabDiv.find('.subMenu-area');
    let lastAnchor;
    let lastPanel;

    lastAnchor=anchors.mouseenter();
    lastPanel=$(lastAnchor.attr('data-board'));
    PanelDiv.removeClass('on');
    $('.menu-area').hide();
    $('.menuButton, menuButton-bar, .menu-area, .subMenu-area').hover(function(){
        $('.menu-area').show();
    }, function(){
        $('.menu-area').hide();
    }); 

    anchors.append('<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" class="css-7kp13n e181xm9y0"><path xmlns="http://www.w3.org/2000/svg" d="M9.41421356,12 L15.7071068,5.70710678 C16.0976311,5.31658249 16.0976311,4.68341751 15.7071068,4.29289322 C15.3165825,3.90236893 14.6834175,3.90236893 14.2928932,4.29289322 L7.29289322,11.2928932 C6.90236893,11.6834175 6.90236893,12.3165825 7.29289322,12.7071068 L14.2928932,19.7071068 C14.6834175,20.0976311 15.3165825,20.0976311 15.7071068,19.7071068 C16.0976311,19.3165825 16.0976311,18.6834175 15.7071068,18.2928932 L9.41421356,12 Z" transform="translate(11.500000, 12.000000) scale(-1, 1) translate(-11.500000, -12.000000) "></path></svg>');

    anchors.mouseenter(function(){
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('data-board'));
        let windowWidth=$( window ).width()

        if(windowWidth < 980){
            PanelDiv.css('display', 'none')
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
}); 

//모바일 메뉴
$(window).resize(function(){
    $('.mobile-menu').each(function(){
        let menu=$(this);
        let Btn=$('.menuButton');
        let close=$('.appbarCloseBt');
        let windowWidth=$( window ).width()
    
        Btn.click(function(e){
            e.preventdefault;
            if(windowWidth < 850){
                menu.stop().animate({left:0},500);
                close.stop().animate({opacity:1},500);
            }else{
                menu.stop().animate({left:'-100%'},500);
                close.stop().animate({opacity:0},500);
            };
        });
        close.click(function(e){
            e.preventdefault;
            $('.mobile-menu').stop().animate({left:'-100%'},500);
            close.stop().animate({opacity:0},500);
        });
    });
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