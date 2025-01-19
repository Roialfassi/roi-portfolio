<!-- src/components/ui/ProjectCard.vue -->
<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden" id = "ProjectCard">
      <div class="h-48 bg-gray-200">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
      </div>
      <div class="p-6">
        <h4 class="text-lg font-semibold text-gray-900">{{ project.title }}</h4>
        <p class="mt-2 text-gray-600">{{ project.description }}</p>
        <div class="mt-4 flex space-x-2">
          <a :href="project.demoLink" 
             class="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800">
            View Project
          </a>
          <a :href="project.sourceLink" 
             class="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            Source Code
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  <style>
  #ProjectCard {
    /* border-radius: 8px; */
    /* overflow: hidden; */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  #ProjectCard:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px var(--color-shadow);
  }
</style>
  