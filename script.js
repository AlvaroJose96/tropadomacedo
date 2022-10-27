let previous = document.querySelector('#pre')
let play = document.querySelector('#play')
let next = document.querySelector('#next')
let title = document.querySelector('#title')
let recent_volume = document.querySelector('#volume')
let volume_show = document.querySelector('#volume_show')
let slider = document.querySelector('#duration_slider')
let show_duration = document.querySelector('#show_duration')
let track_image = document.querySelector('#track_image')
let auto_play = document.querySelector('#auto')
let present = document.querySelector('#present')
let total = document.querySelector('#total')
let artist = document.querySelector('#artist')

let timer
let autoplay = 0

let index_no = 0
let Playing_song = false

//create a audio Element
let track = document.createElement('audio')

//All songs list
let All_song = [
  {
    name: '00 CD-TROPA DO MACEDO VOL.1',
    path: 'assets/musica/00 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'second song',
    path: 'assets/musica/01 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/CAPA.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first ng',
    path: 'assets/musica/02 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/03 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/04 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/05 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/06 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/07 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/08 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/09 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/10 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/11 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/12 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/13 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/14 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/15 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/16 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/17 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/18 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/19 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/20 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/21 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/22 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/23 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/24 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/25 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/27 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/28 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/29 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/30 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  },
  {
    name: 'first song',
    path: 'assets/musica/31 CD-TROPA DO MACEDO VOL.1 (DIAMANTINO-MT).mp3',
    img: 'assets/img/img1.png',
    singer: 'DjIannkTeles'
  }
]

// All functions

// function load the track
function load_track(index_no) {
  clearInterval(timer)
  reset_slider()

  track.src = All_song[index_no].path
  title.innerHTML = All_song[index_no].name
  track_image.src = All_song[index_no].img
  artist.innerHTML = All_song[index_no].singer
  track.load()

  timer = setInterval(range_slider, 1000)
  total.innerHTML = All_song.length
  present.innerHTML = index_no + 1
}

load_track(index_no)

//mute sound function
function mute_sound() {
  track.volume = 0
  volume.value = 0
  volume_show.innerHTML = 0
}

// checking.. the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong()
  } else {
    pausesong()
  }
}

// reset song slider
function reset_slider() {
  slider.value = 0
}

// play song
function playsong() {
  track.play()
  Playing_song = true
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
}

//pause song
function pausesong() {
  track.pause()
  Playing_song = false
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
}

// next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1
    load_track(index_no)
    playsong()
  } else {
    index_no = 0
    load_track(index_no)
    playsong()
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1
    load_track(index_no)
    playsong()
  } else {
    index_no = All_song.length
    load_track(index_no)
    playsong()
  }
}

// change volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value
  track.volume = recent_volume.value / 100
}

// change slider position
function change_duration() {
  slider_position = track.duration * (slider.value / 100)
  track.currentTime = slider_position
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0
    auto_play.style.background = 'rgba(255,255,255,0.2)'
  } else {
    autoplay = 1
    auto_play.style.background = '#FF8A65'
  }
}

function range_slider() {
  let position = 0

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration)
    slider.value = position
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
    if (autoplay == 1) {
      index_no += 1
      load_track(index_no)
      playsong()
    }
  }
}
