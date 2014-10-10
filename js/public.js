/**
 * Created by YHB on 2014/10/9.
 */


/* 全局的通用的操作类 */


Handler = {

    /**
     * @method getSelectValue 获取模拟的下拉列表选中的值
     * @param oSelectEl 要获取的下来列表节点
     * @param attr 节点保持值的属性 默认: data-value
     * @returns {String} 返回选中的值
     */
    getSelectValue: function(oSelectEl, attr){
        return oSelectEl.find('.active').attr(attr || 'data-value');
    },

    /**
     * @method getSelectText 获取模拟的下拉列表选中的文本
     * @param oSelectEl 要获取的下来列表节点
     * @returns {String} 返回选中的文本
     */
    getSelectText: function(oSelectEl){
        return oSelectEl.find('.active').text();
    }


}

/**
 * 主菜单-二级菜单切换
 */
$(function(){
    var currentActive;
    var tasker;


    var oMenus = $('#main-nav.menu'),
        $menuItem = oMenus.find('a.item'),
        $subNavSection = $('.sub-nav-wrap section'),
        currentActive = oMenus.find('a.active').attr('data-type'),

        handler = {
            activate: function() {
                clearTimeout(tasker);
                //给主导航增加active
                $(this).addClass('active')
                oMenus.find('.item').not($(this)).removeClass('active');

                //给二级导航增加active
                var navType = $(this).attr('data-type');
                var mappingSubNav = $('.sub-nav-wrap section[data-type="' + navType + '"]');
                mappingSubNav.addClass('active');
                $subNavSection.not(mappingSubNav).removeClass('active');
            },

            deactivate: function () {
                //var oMenus = $(this).closest('.ui.menu');
                tasker = setTimeout(function(){
                    oMenus.find('.item').removeClass('active').filter('[data-type="' + currentActive + '"]').addClass('active');

                    //给二级导航增加active
                    var mappingSubNav = $('.sub-nav-wrap section[data-type="' + currentActive + '"]');
                    mappingSubNav.addClass('active');
                    $subNavSection.not(mappingSubNav).removeClass('active');
                }, 800);
            }
        };

    $menuItem.hover(handler.activate, handler.deactivate);

    $subNavSection.hover(function(){
        clearTimeout(tasker);
    }, handler.deactivate);
});

$(function(){
    /* tab 标签切换 */
    var oTabLabel = $('.filter.menu .item');
    oTabLabel.length && oTabLabel.tab();
});

$(function(){
    //主菜单切换
    $('.ui.dropdown').dropdown();
});