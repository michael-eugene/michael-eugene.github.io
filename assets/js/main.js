// FEATHER ICONS
feather.replace()

// GSAP ANIMATIONS
gsap.from('#title', { delay: 1.5, y: -50, opacity: 0, duration: 1 }) // Title
gsap.from('#about', { delay: 2.2, y: 50, opacity: 0, duration: 1.2})
gsap.from('#socials', { delay: 2.2, y: 30, opacity: 0, duration: 1.3})
gsap.from('#section', { delay: 4, x: -50, opacity: 0, duration: 1.5})

// VUE INSTANCE
new Vue({
  el: '#projects',
  data: {},
  methods: {
    openModal: function (e) {
      e.currentTarget.classList.toggle('modal')
      e.currentTarget.classList.toggle('rectangle')
    }
  }
})
