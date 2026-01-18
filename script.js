function hideShow() {
    const icon = document.getElementById('hamburger')
    icon.classList.toggle('fa-times')
    icon.classList.toggle('fa-bars')
    document.getElementById('navId').classList.toggle('show-nav')
  }
  
  // scroll up fn 
  function topFunction() {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  const header=document.querySelector('header')
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    console.log(document.body.scrollTop,document.documentElement.scrollTop)
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      header.classList.add('navFixed')
    } else {
      header.classList.remove('navFixed')
    }
  }
