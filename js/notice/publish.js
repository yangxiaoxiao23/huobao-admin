/**
 * Created by ASRock on 2014/10/9.
 */

$(function(){

    //主菜单切换
    $('.ui.dropdown').dropdown();

    //预览功能
    $('#pre-modal').modal('attach events', '#pre-notice', 'show');

    //保存功能
    (function(){
        var oSaveBtn = $('#J-save-btn');
        var url ;
        oSaveBtn.click(function () {
            $.post(url, {
                action: 'saveNotice',
                title: $('#J-title').val(),
                type: Handler.getSelectValue($('#J-notice-type')),
                valid: escape(CKEDITOR.instances['J-content'].getData())
            }, function(reponseObj){

            });
        });
    })();

    //发送功能
    (function(){
        var oSendBtn = $('#J-send-btn');
        var url ;
        oSendBtn.click(function () {
            $.post(url, {
                action: 'sendNotice',
                title: $('#J-title').val(),
                type: Handler.getSelectValue($('#J-notice-type')),
                valid: $('#J-valid').val(),
                content: escape(CKEDITOR.instances['J-content'].getData())
            }, function(reponseObj){

            });
        });
    })();
});