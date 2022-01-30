import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
    
player.on('timeupdate', throttle(data => {
    localStorage.setItem(STORAGE_KEY, data.seconds)
}, 1000));

let pauseTime = localStorage.getItem(STORAGE_KEY) || 0;

player.setCurrentTime(pauseTime);


