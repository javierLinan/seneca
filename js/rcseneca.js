// Vertical scroller

$(function(){
    $('#menu li a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 750);
                return false;
            }
        }
    });
});

// Menu

$(document).ready(function(){$('#menu').find('a').click(menu);function menu(){$(this).parents('ul:first').find('a').removeClass('highlight').end().end().addClass('highlight');}
function trigger(data){var el=$('#menu').find('a[href$="'+data.id+'"]').get(0);menu.call(el);}
if(!window.location.hash){$('#menu a:first').click();}});


// Size text selector

$(document).ready(function() {
	$('#switcher .button').click(function() {
		$('p').removeClass('large').removeClass('giant');
		$('div.color1').removeClass('large').removeClass('giant');
				
		if (this.id == 'switcher-large') {
			$('p').addClass('large');
			$('div.color1').addClass('large');
		}
		else if (this.id == 'switcher-giant') {
			$('p').addClass('giant');
			$('div.color1').addClass('giant');
		}
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});

	$('#switcher .button').hover(function() {
		$(this).addClass('cursor_pointer');
	}, function() {
		$(this).removeClass('cursor_pointer');
	});
});

// Fancybox style

$(document).ready(function() {
	$("a.group_images").fancybox();
});


