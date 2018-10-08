$(document).ready(function(){

			// #1

			var character = $('.text_1');
			var underText = $('.underText_1');
			var underTextActive = $('.underText_1-active');
			
			character.hover(function(){
				underText.toggleClass('underText_1-active')
				underTextActive.removeClass('underText_1')
			});

			// #2

			var character2 = $('.text_2');
			var underText2 = $('.underText_2');
			var underTextActive2 = $('.underText_2-active');
			
			character2.hover(function(){
				underText2.toggleClass('underText_2-active')
				underTextActive2.removeClass('underText_2')
			});

			// #3

			var character3 = $('.text_3');
			var underText3 = $('.underText_3');
			var underTextActive3 = $('.underText_3-active');
			
			character3.hover(function(){
				underText3.toggleClass('underText_3-active')
				underTextActive3.removeClass('underText_3')
			});
		});