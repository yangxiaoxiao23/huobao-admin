/**
 * Created by ASRock on 2014/10/9.
 */

$(function(){
    /* cost-items */
    $('.cost-items').delegate('div.item', 'click', function(event){

        if($(this).hasClass('add-cost')) { //如果是新增

        } else {
            window.open('cost-detail.html');
        }
    });


    $('#pre-modal').modal('attach events', '.add-cost', 'show');

    /*var width = 0;

    var upProgressTask;

    upProgressTask = setInterval(function(){
        $('.att-progress').css('width' , ++width + '%');
        if(width == 100){
            clearInterval(upProgressTask);

            setTimeout(function(){
                $('#progress-text').html('<div class="ui red small labeled icon button"><i class="ok sign icon"></i>已完成</div>');
            }, 1000);
        }
    }, 50);*/
});

/* 新增 */
/* 参考资料: http://www.cnblogs.com/mofish/archive/2012/11/30/2796698.html */
$(function(){
    $('#file_upload').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>选择文件</div>'
    });
});

$(function(){
    /* 导出模版 */
    $('#J-export-tpl').click(function(){
        $.post(url, {
            action: 'exportTpl'
        }, function () {

        });
    });
});