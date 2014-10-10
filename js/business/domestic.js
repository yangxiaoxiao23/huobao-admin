/**
 * Created by ASRock on 2014/10/10.
 */
$(function(){
    /* 新增 滑动侧边栏*/
    $('.sidebar').first().sidebar('attach events', '#J-addpro-btn');
});

$(function(){

    /* 重置  */
    $('#J-reset-form').click(function () {
        $('#service-info').val('');
    });

    var url ;
    
    /* 提交  */
    $('#J-submit-form').click(function () {
        $.post(url, {
            action: 'addDomestic',
            type: Handler.getSelectValue($('#J-domestic-type')),
            content: $('#service-info').val()
        }, function () {

        });
    });

    /* 撤销 */
    $('. recall').click(function () {
        $.post(url, {
            action: 'reCallDomestic'
        }, function () {

        });
    });
});