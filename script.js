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

	character.hover(function(){
		underText.toggleClass('underText_1--active')
		sectorSecond.toggleClass('sector_2--active')
		sectorThird.toggleClass('sector_3--not-so-active')
	});

	characterSecond.hover(function(){
		underTextSecond.toggleClass('underText_2--active')
		sector.toggleClass('sector_1--not-so-active')
		sectorThird.toggleClass('sector_3--active')

	});

	characterThird.hover(function(){
		underTextThird.toggleClass('underText_3--active')
		sector.toggleClass('sector_1--not-so-active')
		sectorSecond.toggleClass('sector_2--active')

	});


		// musicPanel


	$('.contactBtn').click(function(){
		$('.socialMedias').toggleClass('socialMedias_passive')
		$('.contactBtn').toggleClass('contactBtn_active')
		$('.contactNav').toggleClass('contactNav_active')
	});


	var brightText = $('.brightText');
	backBtn = $('.sidebar--back');
	closeBtn = $('.sidebar--close');

	$('.hamburger').click(function(){
		$('.sidebar__1').toggleClass('sidebar__active')
		$('.hamburger').toggleClass('hamburger__inactive')
	});

	brightText.click(function(){
		if ($(".sidebar").hasClass('sidebar__active')) {
			$('aside').removeClass('sidebar__active')
			$('.hamburger').removeClass('hamburger__inactive')
		} else {
			$('.sidebar__1').toggleClass('sidebar__active')
			$('.hamburger').toggleClass('hamburger__inactive')
		}
	});

	backBtn.click(function(){
		if ($(".sidebar__1").hasClass('sidebar__active')) {
			$('aside').removeClass('sidebar__active')
			$('.hamburger').toggleClass('hamburger__inactive')
		} else {
			$('aside').removeClass('sidebar__active')
			$('.sidebar__1').toggleClass('sidebar__active')
		}
	});
	closeBtn.click(function(){
		$('aside').removeClass('sidebar__active')
		$('.hamburger').toggleClass('hamburger__inactive')
	});
});

// проигрывание музыки при нажатии на буквы R/W/G

var soundNameArr = ['C','C1','D','D1','E','F','F1','G','G1','A','A1','B'];
var soundArr = [];
var songsArr = [];
var rand = 0;

var notesOfSongs = [
	[0,2,4,5,7,9,11],
	[11,9,7,5,4,2],
];

for (var i = 0; i < soundNameArr.length; i++) {
	soundArr[i] = new Audio;
	soundArr[i].src = "Materials/notes/" + soundNameArr[i] + ".mp3";	
}

// добавляет в массив музоном (songsArr) песню (порядок воспроизвидения звуков)
for (var swap = 0; swap < notesOfSongs.length; swap++) {
	for (var i = 0; i < notesOfSongs[swap].length; i++) {
		notesOfSongs[swap][i] = soundArr[notesOfSongs[swap][i]];
		songsArr[swap] = notesOfSongs[swap];
	}
}

// генерация случайного числа
function randomInteger(min, max) {
    var swap = min + Math.random() * (max + 1 - min);
    swap = Math.floor(swap);
    return swap;
}

var times = 0;

function playAudio() {
	(songsArr[rand][times]).play();
	times++;
	// обновление счетчика, при окончании песни
	if (times >= (songsArr[rand]).length) {times = 0;} 
	// смена песни на другую
	var swap = rand;
	if (times == 0) {rand = (randomInteger(1, songsArr.length) - 1);} 
	while (rand == swap & times == 0) {
		rand = (randomInteger(1, songsArr.length) - 1);
	}
}

// function playAudio(){
// 	var rand = Math.floor(Math.random() * soundNameArr.length); /*генерация случайного числа*/
// 	soundArr[rand].play();
// }


