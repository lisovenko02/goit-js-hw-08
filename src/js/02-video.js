import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
let pauseTime = localStorage.getItem('videoplayer-current-time') ?? 0;
player.setCurrentTime(Number(pauseTime));

function onUpdTime(data) {
    localStorage.setItem('videoplayer-current-time',
    JSON.stringify(data.seconds)
    );
    pauseTime = data.seconds;
}

player.on('timeupdate', throttle(onUpdTime, 1000, {trailing: false}));
