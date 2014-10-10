/**
 * Created by ASRock on 2014/10/10.
 */


$(function(){
    /* 新增 滑动侧边栏*/
    /*$('.sidebar').first().sidebar('attach events', '.reply-btn').sidebar('setting', {
        onShow: function(){
            return;
        },
        onHide: function () {
        },
        duration: 0
    });*/
    
    $('.reply-btn').click(function () {

        alert('//TODO 改变编号');

        $('.sidebar').sidebar('show');
    });

    /* 重置  */
    $('#J-reset-form').click(function () {
        $('#content').val('');
    });

    var url ;

    /* 提交  */
    $('#J-submit-form').click(function () {
        $.post(url, {
            action: 'addBillReply',
            content: $('#content').val()
        }, function () {

        });
    });
});