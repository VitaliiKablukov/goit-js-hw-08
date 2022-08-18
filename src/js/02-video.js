import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
console.log(Player);

const player = new Player(iframe);

function currentTime(data) {
  console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`);
}
player.on('timeupdate', throttle(currentTime, 1000));

if (localStorage.getItem('videoplayer-current-time')) {
  //
  player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function (seconds) {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          break;
        default:
          break;
      }
    });
}
