$(document).ready(function() {
	console.log('Coffee Breakdown loaded!');
	$('.intro').css('display','block');
});



// Affogato

$('a[href^="#affogato"]').on('click', function(e) {
	console.log('You clicked Affogato');
	$('.affogato-drink').css('display','block'); return false
});

$('a[href^="#affogato"]').mouseenter(function(e) {
	console.log('You hovered on Affogato');
	$('.affogato-info').css('display','inline-block');
	$('.intro').hide();
	$('.americano-drink').hide();
	$('.breve-drink').hide();
	$('.cappuccino-drink').hide();
	$('.cortado-drink').hide();
	$('.expresso-drink').hide();
});

$('a[href^="#affogato"]').mouseleave(function(e) {
	$('.affogato-info').css('display','none');
	$('.intro').show();
});



// Americano

$('a[href^="#americano"]').on('click', function(e) {
	console.log('You clicked Americano');
	$('.americano-drink').css('display','block'); return false
});

$('a[href^="#americano"]').mouseenter(function(e) {
	$('.americano-info').css('display','inline-block');
	$('.intro').hide();
	$('.affogato-drink').hide();
	$('.breve-drink').hide();
	$('.cappuccino-drink').hide();
	$('.cortado-drink').hide();
	$('.expresso-drink').hide();
});

$('a[href^="#americano"]').mouseleave(function(e) {
	$('.americano-info').css('display','none');
	$('.intro').show();
});



// Breve

$('a[href^="#breve"]').on('click', function(e) {
	console.log('You clicked Breve');
	$('.breve-drink').css('display','block'); return false
});

$('a[href^="#breve"]').mouseenter(function(e) {
	$('.breve-info').css('display','inline-block');
	$('.intro').hide();
	$('.affogato-drink').hide();
	$('.americano-drink').hide();
	$('.cappuccino-drink').hide();
	$('.cortado-drink').hide();
	$('.expresso-drink').hide();
});

$('a[href^="#breve"]').mouseleave(function(e) {
	$('.breve-info').css('display','none');
	$('.intro').show();
});



// Cappuccino

$('a[href^="#cappuccino"]').on('click', function(e) {
	console.log('You clicked Cappuccino');
	$('.cappuccino-drink').css('display','block'); return false

});

$('a[href^="#cappuccino"]').mouseenter(function(e) {
	$('.cappuccino-info').css('display','inline-block');
	$('.intro').hide();
	$('.affogato-drink').hide();
	$('.americano-drink').hide();
	$('.breve-drink').hide();
	$('.cortado-drink').hide();
	$('.expresso-drink').hide();
});

$('a[href^="#cappuccino"]').mouseleave(function(e) {
	$('.cappuccino-info').css('display','none');
	$('.intro').show();
});



// Cortado

$('a[href^="#cortado"]').on('click', function(e) {
	console.log('You clicked Cortado');
	$('.cortado-drink').css('display','block'); return false
});

$('a[href^="#cortado"]').mouseenter(function(e) {
	$('.cortado-info').css('display','inline-block');
	$('.intro').hide();
	$('.affogato-drink').hide();
	$('.americano-drink').hide();
	$('.breve-drink').hide();
	$('.cappuccino-drink').hide();
	$('.expresso-drink').hide();
});

$('a[href^="#cortado"]').mouseleave(function(e) {
	$('.cortado-info').css('display','none');
	$('.intro').show();
});



// Expresso

$('a[href^="#expresso"]').on('click', function(e) {
	console.log('You clicked Expresso');
	$('.expresso-drink').css('display','block'); return false
});

$('a[href^="#expresso"]').mouseenter(function(e) {
	$('.expresso-info').css('display','inline-block');
	$('.intro').hide();
	$('.affogato-drink').hide();
	$('.americano-drink').hide();
	$('.breve-drink').hide();
	$('.cappuccino-drink').hide();
	$('.cortado-drink').hide();
});

$('a[href^="#expresso"]').mouseleave(function(e) {
	$('.expresso-info').css('display','none');
	$('.intro').show();
});





