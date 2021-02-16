$(document).ready(function(){

  $nav=$('.nav');
  $toggleCollapse=$('#hamburger-menu');

  // click event on toggle menu
  $toggleCollapse.click(function(){
    $nav.toggleClass('collapse');
  })

  // click to scroll top
  $('.move-up span').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1300);
  })

})

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      // document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    // document.getElementById('slider').checked = true;
  }
})();

$(".noClick").unbind("click");