// getting my id
const insert = document.getElementById('insert');

// accessing event from built in keydown function from window
// just because space key brings back empty string we will display Space text instead line nr 9
window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

  <div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
  </div>
  
  <div class="key">
    ${event.code}
    <small>event.code</small>
  </div>
    `
} )