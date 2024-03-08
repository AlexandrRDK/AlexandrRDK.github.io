function smoothScroll() {
    document.querySelectorAll('.smooth-scroll').forEach(link => {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href');
          const targetPosition = document.querySelector(targetId).offsetTop;

          window.scroll({
            top: targetPosition,
            left: 0,
            behavior: 'smooth'
          });
        });
      });
}

export default smoothScroll;