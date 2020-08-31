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
        title: 'My Portfolio',
        description: 'Github repo of my portfolio',
        href: 'https://github.com/michael-eugene/michael-eugene.github.io'
      },
      {
        title: 'Hire Me',
        description: 'Contract and Full-time Projects',
        href: 'mailto:eugenemichael21@yahoo.com'
      },
    ],
  },
  methods: {
    openLink: (e) => {
      url = e.currentTarget.children[2].innerText
      window.open(url, "_blank")

    }
  }
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
