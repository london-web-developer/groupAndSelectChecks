/*
 * jQuery Group and select checkboxes.
 *
 * Simplified BSD License (@see License)
 * @author Matthew Barnden
 * @copyright(c) 2013 Matthew Barnden
 * Usage: $(elem).groupSelectChecks() (@see Readme.md)
 * @version 0.3.0
 */
 
;(function($){
  $.fn.groupSelectChecks = function(opts){
  
		var opts = opts || {},
		savedCheckIndex = false,
		selectThem = false,
		slcdIndex,
		loopInt,
		$check,
		selectedChecks,
		settings = {
			siblingGroup:null,
			keyCode:16
		};
		
		opts = $.extend(settings, opts);
		
		return this.each(function() {

			var $this = $(this),
				keyPressed = false;
		
			$(window).keydown(function(evt) {
  				if (evt.which == opts.keyCode) {
    				keyPressed = true;
  				}
			}).keyup(function(evt) {
  				if (evt.which == opts.keyCode) { 
    				keyPressed = false;
  				}
			});
			
			$this.find('input:checkbox').click(function(e){
			
				if(opts.siblingGroup){
					slcdIndex = $(this).closest(opts.siblingGroup).index();
				}
				else {
					slcdIndex = $(this).index();
				}
				if(keyPressed){
					if(savedCheckIndex === slcdIndex  || savedCheckIndex === false){
						savedCheckIndex = slcdIndex;
						selectThem = $(this).is(':checked');
					}
					else {
						if(slcdIndex > savedCheckIndex){
							for(loopInt = savedCheckIndex; loopInt < slcdIndex; loopInt++){
								opts.siblingGroup ? $check = $($this.parents().find(opts.siblingGroup + " input:checkbox")[loopInt]) : $check = $($this.children('input')[loopInt]);
								$check.attr('checked', selectThem);
							}
							savedCheckIndex = false;
						}
						else {
							for(loopInt = savedCheckIndex-1; loopInt >= slcdIndex; loopInt--){
								opts.siblingGroup ? $check = $($this.parents().find(opts.siblingGroup + " input:checkbox")[loopInt]) : $check = $($this.children('input')[loopInt]);
								$check.attr('checked', selectThem);
							}
							savedCheckIndex = false;
						}
					}
				}
				else {
					savedCheckIndex = slcdIndex;
					selectThem = $(this).is(':checked');
				}
			});
		});
	}
}(jQuery));
