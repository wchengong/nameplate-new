// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$.backstretch('/img/bg.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 200,
	gutter: 10,
	isFitWidth: true
});