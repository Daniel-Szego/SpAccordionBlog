
$(document).ready(function () {
    // ExecuteOrDelayUntilScriptLoaded(function () { RemoveDynamicParts(); }, "sp.js");
    RemoveDynamicParts();
});

function RemoveDynamicParts()
{
    $("#onetidDoclibViewTbl0 .ms-tileview-tile-content").unbind('mouseout mouseover');
    $("#onetidDoclibViewTbl0 div").unbind('mouseout mouseover');
    $("#onetidDoclibViewTbl0 div").removeAttr('mouseover');
    $("#onetidDoclibViewTbl0 div").removeAttr('mouseout');
    $("#onetidDoclibViewTbl0 .ms-tileview-tile-content").off();
    $("#onetidDoclibViewTbl0 div").off();

    $("#onetidDoclibViewTbl0 a").unbind('mouseout mouseover');
    $("#onetidDoclibViewTbl0").unbind('mouseout mouseover');
    $("#onetidDoclibViewTbl0 a").unbind('mouseout mouseover');
    $("#onetidDoclibViewTbl0 a").unbind('blur focus');
    $("#onetidDoclibViewTbl0 a").removeAttr('blur');
    $("#onetidDoclibViewTbl0 a").removeAttr('focus');

    $("#onetidDoclibViewTbl0 .ms-tileview-tile-content").each(function (index) {

        var el = $(this).get(0);

        elClone = el.cloneNode(true);

        el.parentNode.replaceChild(elClone, el);

    });

    //var el = $("#onetidDoclibViewTbl0 .ms-tileview-tile-content").first().get(0);

    //elClone = el.cloneNode(true);

    //el.parentNode.replaceChild(elClone, el);
}

