
	function vergrootVerklein(clicked_id) {
	    if (document.getElementById(clicked_id).className == "pure-u-1 middenGip-1-4-taak") {
	    	document.getElementById(clicked_id).className = "pure-u-1 middenGip-1-4-taak-vergroot";

	    } else if(document.getElementById(clicked_id).className == "pure-u-1 middenGip-1-4-taak-vergroot"){
	    	document.getElementById(clicked_id).className = "pure-u-1 middenGip-1-4-taak";
    }
}