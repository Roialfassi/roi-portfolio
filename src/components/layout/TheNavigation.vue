<!-- src/components/layout/TheNavigation.vue -->
<template>
  <div class="flex space-x-6">
    <a v-for="item in navigationItems" 
       :key="item.name" 
       :href="item.href" 
       class="text-gray-600 hover:text-gray-900">
      {{ item.name }}
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigationItems: [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    }
  }
}
</script>
