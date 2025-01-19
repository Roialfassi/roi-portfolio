<!-- src/components/layout/TheHeader.vue -->
<template>
  <header class="fixed w-full bg-white shadow-sm z-50">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <h1 class="text-xl font-semibold text-gray-900">Roi Alfassi</h1>
      
      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <as
          v-for="item in navigationItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="text-sm font-medium transition-colors duration-200"
          :class="[
            activeSection === item.id
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-900'
          ]"
          @click.prevent="scrollToSection(item.id)"
        >
          {{ item.name }}
        </as>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-900"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            v-if="!isMobileMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navigationItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="block px-3 py-2 rounded-md text-base font-medium"
          :class="[
            activeSection === item.id
              ? 'bg-blue-50 text-blue-600'
              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
          ]"
          @click="scrollToSection(item.id); isMobileMenuOpen = false"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      isMobileMenuOpen: false,
      activeSection: 'hero',
      navigationItems: [
        { id: 'hero', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'projects', name: 'Projects' },
        { id: 'education', name: 'Education' },
        { id: 'experience', name: 'Experience' }
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 64 // height of header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    },
    handleScroll() {
      const sections = this.navigationItems.map(item => item.id)
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const offset = 100 // Adjust this value based on when you want the section to be considered "active"
          
          if (rect.top <= offset && rect.bottom > offset) {
            this.activeSection = sectionId
            break
          }
        }
      }
    }
  }
}
</script>