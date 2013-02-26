/*
 * jQuery Select all checkboxes
 *
 * Simplified BSD License (@see License)
 * @author        Matthew Barnden
 * @copyright     (c) 2013 Matthew Barnden
 * Usage: $(elem).groupSelectChecks() (@see Readme.md)
 * @version 0.0.1
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
			classHelper:'selected'
		};
		
		opts = $.extend(settings, opts);
		
		return this.each(function() {

			var $this = $(this);
			$this.find('input:checkbox').click(function(e){
			
				if(opts.siblingGroup){
					slcdIndex = $(this).closest(opts.siblingGroup).index();
				}
				else {
					slcdIndex = $(this).index();
				}
				if(e.ctrlKey){
					if(savedCheckIndex === slcdIndex  || savedCheckIndex === false){
						savedCheckIndex = slcdIndex;
						selectThem = $(this).is(':checked');
					}
					else {
						if(selectThem){
							$(this).addClass(opts.classHelper);
						}
						else {
							$(this).removeClass(opts.classHelper);
						}
						if(slcdIndex > savedCheckIndex){
							for(loopInt = savedCheckIndex; loopInt < slcdIndex; loopInt++){
								opts.siblingGroup ? $check = $($this.parents().find(opts.siblingGroup + " input:checkbox")[loopInt]) : $check = $($this.children('input')[loopInt]);
								$check.attr('checked', selectThem);
								if(selectThem){
									$check.addClass(opts.classHelper);
								}
								else {
									$check.removeClass(opts.classHelper);
								}
							}
							savedCheckIndex = false;
						}
						else {
							for(loopInt = savedCheckIndex-1; loopInt >= slcdIndex; loopInt--){
								opts.siblingGroup ? $check = $($this.parents().find(opts.siblingGroup + " input:checkbox")[loopInt]) : $check = $($this.children('input')[loopInt]);
								$check.attr('checked', selectThem);
								if(selectThem){
									$check.addClass(opts.classHelper);
								}
								else {
									$check.removeClass(opts.classHelper);
								}
							}
							savedCheckIndex = false;
						}
					}
				}
				else {
					savedCheckIndex = slcdIndex;
					selectThem = $(this).is(':checked');
					if(selectThem){
						$(this).addClass(opts.classHelper);
					}
					else {
						$(this).removeClass(opts.classHelper);
					}
				}
			});
		});
	}
}(jQuery));