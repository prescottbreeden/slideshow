$(document).ready(function() {
	console.log('balls');
	let totalAlbums = 5;
	let currentAlbum = 3;
	draw_albums(currentAlbum);

	function draw_albums(idx) {
		for(let i = 0; i <= totalAlbums; i++) {
			if(i < idx) {
				$(`#slide${i}`).addClass('rotate-left');
				$(`#slide${i}`).removeClass('album-focus');
				$(`#slide${i}`).removeClass('rotate-right');
			}
			else if(i === idx) {
				$(`#slide${i}`).addClass('album-focus');
				$(`#slide${i}`).removeClass('rotate-right');
				$(`#slide${i}`).removeClass('rotate-left');
			}
			else if(i > idx) {
				$(`#slide${i}`).addClass('rotate-right');
				$(`#slide${i}`).removeClass('album-focus');
				$(`#slide${i}`).removeClass('rotate-left');
			}
		}
		
	}

	$(document).keydown(function(e) {
		if(e.which === 39 && e.target == document.body) {
			if(currentAlbum == totalAlbums) {
				return;
			}
			else {
				currentAlbum++;
				draw_albums(currentAlbum);
			}
		}
		if(e.which === 37 && e.target == document.body) {
			if(currentAlbum == 1) {
				return;
			}
			else {
				currentAlbum--;
				draw_albums(currentAlbum);
			}
		}
	})




});
