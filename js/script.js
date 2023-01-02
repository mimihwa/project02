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

    anchors.mouseenter(function(){
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('data-board'));
        lastPanel.removeClass('on');
        currentPanel.addClass('on');

        lastAnchor=currentAnchor;
        lastPanel=currentPanel;
    });

    tabDiv.mouseleave(function(){
        PanelDiv.removeClass('on');
    });
  
}); 
