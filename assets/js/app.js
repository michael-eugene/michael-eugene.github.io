// Vue Instance
new Vue({
  el: '#app',
  data: {
    listItems: [
      {
        title: 'Dosage',
        description: 'A simple reminder application',
      },
      {
        title: 'Welp',
        description: 'Expenses tracker made with vuejs',
      },
      {
        title: 'Hire Me',
        description: 'Available for both contract and full-time projects',
      },
    ],
  },
})

// FEATHER ICONS
feather.replace()

// Typed JS Instance
new Typed('#fName', {
  strings: ['Michael Eugene'],
  typeSpeed: 25,
  fadeOut: true,
  startDelay: 1000
})
new Typed('#title', {
  strings: ['Software Developer'],
  typeSpeed: 40,
  fadeOut: true,
  startDelay: 2200
})

// GSAP
gsap.from('.animate', {y: 20, opacity: 0, duration: .9, delay: 3.5})
