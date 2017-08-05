let $nav = $('.nav');
$(document).on('click', '.btn--mob-menu', function(e) {
	e.preventDefault();
	$nav.toggle('fast');
});