$.ajax( {
	type : "GET",
	url : "xml/timeline.xml",
	dataType : "xml",
	success : function(xml) {
		$(xml).find("Year").each(
				function() {
					var year = $(this).attr("year");
					var entries = '<div id="y_' + year 	+ '" class="timeYear"><h2 class="timeYearHead">' + year + '</h2><ul class="timeEvents">';
					$(this).find("Event").each(
							function(i) {
								var event = $(this).text();
								entries += '<li id="e_' + year + '_' + i + '" class="timeEvent">' + event + '</li>';
							}); // close find Event
					entries += '</ul></div>';
					$(entries).appendTo("div#timeLine");
					
		}); // close find Year
		
		// Snippet: code to wrap a certain number of elements in another element
		var halfDec = $("div#timeLine div.timeYear");
		for ( var i = 0; i < halfDec.length; i += 5) {
				var section = i / 5;
				halfDec.slice(i, i + 5).wrapAll('<div class="section clearfix" id="s_' + section + '" />');
			} // close for loop
		
		// Settings for the serialScroll plug-in
		$('#timeLineWrapper').serialScroll({
			items:'.section',
			prev:'#prev',
			next:'#next',
			start:0,
			duration:1500,
			step:1,
			axis:'x',
			cycle:false, //don't pull back once you reach the end
			easing: 'swing',
			navigation: '#footer a'
		}); // close scrolling settings
		
		$.localScroll({
			target: '#timeLineWrapper', // could be a selector or a jQuery object too.
			queue:true,
			duration:1000,
			hash:false,
			axis:'x',
			cycle:false
		}); // close localScroll
		
	// Cycling background image plug-in settings
	//	$('#timeLineBkgCycle').cycle({ 
	//	    fx:     'fade', 
	//	    speed:  'fast', 
	//	    timeout: 0, 
	//	    speed: 1500,
	//	    nowrap: 1,
	//	    next:   '#next', 
	//	    prev:   '#prev',
	//	    pager:   '#timeDecNav',
	//	    pagerAnchorBuilder: function(idx, slide) { 
	//		    // return selector string for existing anchor 
	//		    return '#timeDecNav li:eq(' + idx + ') a'; 
	//		}
	//	}); // close cycling background settings
		
		$('#timeLoading').fadeOut(1500);
		$('#timeLineBkgCycle').fadeIn(1500);
		$('.timeYear').fadeIn(3000);
		
	} // close xml function
}); // close ajax



