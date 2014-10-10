/**
 * Created by ASRock on 2014/10/10.
 */

$(function(){

    //预览功能
    $('#pre-modal').modal('attach events', '.pre-notice', 'show').modal('setting', {
        onShow: function(){
            /*$('#J-rev-title').text($('#J-title').val());
             $('#J-rev-type').text(Handler.getSelectText($('#J-notice-type')));
             $('#J-rev-valid').text($('#J-valid').val());
             $('#J-rev-content').html(CKEDITOR.instances['J-content'].getData());*/
        }
    });


    var url ;

    /* 撤销 */
    $('.recall').click(function(){
        $.post(url, {
            action: 'reCallNotice',
            noticeId: 123
        }, function(){

        });
    });
});