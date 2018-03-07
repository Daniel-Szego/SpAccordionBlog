/*
 * jQuery Shorten plugin 1.0.0
 *
 * Copyright (c) 2013 Viral Patel
 * //viralpatel.net
 *
 * Dual licensed under the MIT license:
 *   //www.opensource.org/licenses/mit-license.php
 */

 (function($) {
	$.fn.shorten = function (settings) {
	
		var config = {
			showChars: 50,
			ellipsesText: "...",
			moreText: "More Details",
			lessText: "Less Details"
		};

		if (settings) {
			$.extend(config, settings);
		}
		
		$(document).off("click", '.morelink');
		
		$(document).on({click: function () {

				var $this = $(this);
				if ($this.hasClass('less')) {
					$this.removeClass('less');
					$this.html(config.moreText);
				} else {
					$this.addClass('less');
					$this.html(config.lessText);
				}
				$this.parent().prev().toggle();
				$this.prev().toggle();
				return false;
			}
		}, '.morelink');

		return this.each(function () {
			var $this = $(this);
			if($this.hasClass("shortened")) return;
			
			$this.addClass("shortened");
			var content = $this.html();
			if (content.lastIndexOf('</h') > -1 ) {
			    var c = content.substr(0, content.lastIndexOf('</h') + 5);
			    var h = content.substr(content.lastIndexOf('</h') + 5, content.length - content.lastIndexOf('</h'));
				var html = c + '<br/> <span class="morecontent"><span>' + h + '</span> <a href="#" class="morelink">' + config.moreText + '</a></span>';
				if (h.length > 0)
                    {
				    $this.html(html);
				    }
				$(".morecontent span").hide();
			}
		});
		
	};

 })(jQuery);

