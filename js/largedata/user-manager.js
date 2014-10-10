/**
 * Created by ASRock on 2014/10/9.
 */

$(function(){

    // 业主导入
    $('#J-owner-import').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>导入</div>'
    });

    // 业主导出
    $('#J-owner-export').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>导出</div>'
    });


    // 家属导入
    $('#J-family-import').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>导入</div>'
    });

    // 家属导出
    $('#J-family-export').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>导出</div>'
    });


    // 租客导入
    $('#J-renter-import').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>导入</div>'
    });

    // 租客导出
    $('#J-renter-export').uploadify({
        'swf': '../../libs/uploadify/uploadify.swf',
        'uploader': 'uploadify.php',
        buttonText: '<div>导出</div>'
    });
});