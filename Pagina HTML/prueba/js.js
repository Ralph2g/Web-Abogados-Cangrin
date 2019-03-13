   function functionScroll() {
    var section = document.querySelectorAll(".section"),
        sections = {}, i = 0;

  Array.prototype.forEach.call(section, function(e) {
    sections[e.id] = e.offsetTop;
  });

    for (i in sections) {
      if (sections[i] <= window.pageYOffset +100) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('a[href*=' + i + ']').classList.add('active');
      }
    }
  }

  window.addEventListener('scroll', functionScroll);
  window.addEventListener('resize', functionScroll);