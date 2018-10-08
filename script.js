$(document).ready(function(){

			var character = $('.text_1');
			var underText = $('.underText_1');
			var underTextActive = $('.underText_1-active');
			var sector = $('.sector:nth-child(1)');
			var sectorActive = $('.sector_1-active');
			
			var characterSecond = $('.text_2');
			var underTextSecond = $('.underText_2');
			var underTextActiveSecond = $('.underText_2-active');
			var sectorSecond = $('.sector:nth-child(2)');
			var sectorActiveSecond = $('.sector_2-active');
			
			var characterThird = $('.text_3');
			var underTextThird = $('.underText_3');
			var underTextActiveThird = $('.underText_3-active');
			var sectorThird = $('.sector:nth-child(3)');
			var sectorActiveThird = $('.sector_3-active');

			// #1
			
			character.hover(function(){
				underText.toggleClass('underText_1-active')
				sectorSecond.toggleClass('sector_2-active')
				sectorThird.toggleClass('sector_3-active-notSo')

			});

			// #2
			
			characterSecond.hover(function(){
				underTextSecond.toggleClass('underText_2-active')
				sector.toggleClass('sector_1-active-notSo')
				sectorThird.toggleClass('sector_3-active')

			});

			// #3
			
			characterThird.hover(function(){
				underTextThird.toggleClass('underText_3-active')
				sector.toggleClass('sector_1-active-notSo')
				sectorSecond.toggleClass('sector_2-active')

			});
		});