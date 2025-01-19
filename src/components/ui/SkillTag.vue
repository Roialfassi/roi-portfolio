
<!-- src/components/ui/SkillTag.vue -->
<template>
    <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
      {{ skill }}
    </span>
  </template>
  
  <script>
  export default {
    props: {
      skill: {
        type: String,
        required: true
      }
    }
  }
  </script>
  