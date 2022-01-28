import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
    
const onPlay = function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds)
};

const startPlay = localStorage.getItem(STORAGE_KEY);
const setTime = startPlay ? startPlay: 0;
player.setCurrentTime(setTime);

player.on('timesaved', throttle(onPlay, 1000));