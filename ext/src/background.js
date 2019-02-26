/* eslint no-undef: 0 */

const state = {
  connected: false,
};

const openPage = (url) => {
  chrome.tabs.create({
    url,
  });
};


const host = 'http://localhost:3000';

const socket = io(host);

socket.on('connect', () => {
  state.connected = true;
});

socket.on('disconnect', () => {
  state.connected = false;
});

socket.on('newtab', (event) => {
  openPage(event.url);
});
