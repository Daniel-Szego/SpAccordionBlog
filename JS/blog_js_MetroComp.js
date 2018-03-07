
$(document).ready(function () {
    SP.SOD.executeOrDelayUntilScriptLoaded(function () {
        SetShorten();
    }, "jquery-1.9.1.min.js");
});

function SetShorten()
{
    $(".ms-blog-postBody div div").shorten();

}

