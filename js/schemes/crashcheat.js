<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener(
'visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/2.jpg");
        document.title = '?';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/2.jpg");
        document.title = '☀' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
