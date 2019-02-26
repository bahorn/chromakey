/* eslint no-undef: 0 */

const socket = io(state.host);

socket.on('connect', () => {
  state.connected = true;
});

socket.on('disconnect', () => {
  state.connected = false;
});

socket.on('newtab', (event) => {
  openTab(event.url);
});
