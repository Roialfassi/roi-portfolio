<!-- src/components/home/HeroSection.vue -->
<template>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="text-center">
        <h2 class="text-4xl font-bold text-gray-900 sm:text-5xl">
          Hi, I'm Roi Alfassi
        </h2>
        <p class="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          {{ introduction }}
        </p>
        <div class="mt-8 flex justify-center space-x-4">
          <SocialLink v-for="link in socialLinks" 
                     :key="link.name" 
                     :link="link" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import SocialLink from '../ui/SocialLink.vue'
  
  export default {
    components: {
      SocialLink
    },
    data() {
      return {
        introduction: '',
        socialLinks: [
          { name: 'GitHub', icon: 'GitHub', url: 'https://github.com/roialfassi' },
          { name: 'LinkedIn', icon: 'LinkedIn', url: 'https://www.linkedin.com/in/roi-alfassi/' },
          { name: 'Email', icon: 'roialfassi@gmail.com', url: 'mailto:roialfassi@gmail.com' }
          // { name: 'Resume', icon: '📄', url: '/your-resume.pdf' }
        ]
      }
    }
  }
  </script>