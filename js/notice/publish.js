/**
 * Created by ASRock on 2014/10/9.
 */

$(function(){
    //预览功能
    $('#pre-modal').modal('attach events', '#pre-notice', 'show').modal('setting', {
        onShow: function(){
            $('#J-rev-title').text($('#J-title').val());
            $('#J-rev-type').text(Handler.getSelectText($('#J-notice-type')));
            $('#J-rev-valid').text($('#J-valid').val());
            $('#J-rev-content').html(CKEDITOR.instances['J-content'].getData());
        }
    });

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