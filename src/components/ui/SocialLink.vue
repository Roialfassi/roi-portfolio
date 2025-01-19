<!-- src/components/ui/SocialLink.vue -->
<template>
    <a :href="link.url" 
       target="_blank"
       class="text-gray-600 hover:text-gray-900">
      <span class="w-6 h-6">{{ link.icon }}</span>
    </a>
  </template>
  
  <script>
  export default {
    props: {
      link: {
        type: Object,
        required: true
      }
    }
  }
  </script>