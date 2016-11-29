
	function vergrootVerklein(clicked_id) {
	    if (document.getElementById(clicked_id).className == "pure-u-1 middenGip-1-4-taak") {
	    	document.getElementById(clicked_id).className = "pure-u-1 middenGip-1-4-taak-vergroot";

	    } else if(document.getElementById(clicked_id).className == "pure-u-1 middenGip-1-4-taak-vergroot"){
	    	document.getElementById(clicked_id).className = "pure-u-1 middenGip-1-4-taak";
    }
}

$(window).on('resize', function() {
    if($(window).width() < 720) {
    	$('#mItem1', '#mItem2', '#mItem3').removeClass('pure-u-1-3');
        $('#mItem1', '#mItem2', '#mItem3').addClass('pure-u-1');
        $('#mItem1', '#mItem2', '#mItem3').removeClass('pure-u-1-3');
    }else{
    	$('#mItem1', '#mItem2', '#mItem3').removeClass('pure-u-1-3');
        $('#mItem1', '#mItem2', '#mItem3').addClass('pure-u-1-3');
        $('#mItem1', '#mItem2', '#mItem3').removeClass('pure-u-1');
    }
})