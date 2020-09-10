// Vue Instance
new Vue({
  el: '#app',
  data: {
    listItems: [
      // {
      //   title: 'Dosage',
      //   description: 'A simple reminder application',
      // },
      {
        title: 'Vue-Weather-App',
        description:
          'A simple Vuejs app that tells the weather of any location chosen.',
        github: 'https://github.com/michael-eugene/vue-weather',
        main: 'https://vue-weather-v2.netlify.com',
      },
      {
        title: 'Vue-News-App',
        description:
          'A very responsive news web app made with vue.',
        github: 'https://github.com/michael-eugene/vue-news',
        main: 'https://pensive-snyder-9583da.netlify.app/',
      },
      {
        title: 'Hire Me',
        description: 'Contract and Full-time Projects',
        href: 'mailto:eugenemichael21@yahoo.com',
      },
    ],
    isActive: false,
    showProjects: true,
  },
  methods: {
    openLink(e) {
      url = e.currentTarget.children[3].textContent
      if (url !== '') {
        window.open(url)
      }
    },
  },
})

// FEATHER ICONS
feather.replace()

// Typed JS Instance
new Typed('#fName', {
  strings: ['Michael Eugene'],
  typeSpeed: 25,
  fadeOut: true,
  startDelay: 1000,
})
new Typed('#title', {
  strings: ['Software Developer'],
  typeSpeed: 40,
  fadeOut: true,
  startDelay: 2200,
})

// GSAP
gsap.from('.animate', { y: 20, opacity: 0, duration: 0.9, delay: 3.5 })
