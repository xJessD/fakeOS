/**
 * Automatically stops Youtube Videos on exit of app by re-initialising video source. Would be best to pause video instead, but works for now.
 */
 export const stopYoutube = () => {
  const iframe = document.querySelector('iframe');
  const temp = iframe.src;
  iframe.src = temp;
}