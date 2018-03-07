
$(document).ready(function () {
    //ExecuteOrDelayUntilScriptLoaded(function () {SetShorten(); }, "jquery.min.js");
    SetShorten();
});

function SetShorten()
{
    $(".ms-blog-postBody div div").shorten();

}

