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
			
			var character3 = $('.text_3');
			var underText3 = $('.underText_3');
			var underTextActive3 = $('.underText_3-active');
			var sector3 = $('.sector:nth-child(3)');
			var sectorActive3 = $('.sector_3-active');

			// #1
			
			character.hover(function(){
				underText.toggleClass('underText_1-active')
				sectorSecond.toggleClass('sector_2-active')
				sector3.toggleClass('sector_3-active-notSo')

			});

			// #2
			
			characterSecond.hover(function(){
				underTextSecond.toggleClass('underText_2-active')
				sector1.toggleClass('sector_1-active')
				sector3.toggleClass('sector_3-active')

			});

			// #3
			
			character3.hover(function(){
				underText3.toggleClass('underText_3-active')
				sector1.toggleClass('sector_1-active')
				sector3.toggleClass('sector_2-active')

			});
		});