if (
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .register('/static/sw.js')
    .then(reg => {
      console.log('Service worker registered')
    })
    .catch(e => {
      console.error('Error during register sw: ', e)
    })
}