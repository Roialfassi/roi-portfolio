<!-- src/components/home/ProjectsSection.vue -->
<template>
    <section id="projects" class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold text-gray-900">Featured Projects</h3>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in projects" 
                      :key="project.id" 
                      :project="project" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import ProjectCard from '../ui/ProjectCard.vue'
  
  export default {
    components: {
      ProjectCard
    },
    data() {
      return {
        projects: [
          {
            id: 1,
            title: 'PromptQueueRunner',
            description: 'This Python script allows you to query a locally hosted Large Language Model (LLM) with multiple prompts and save the responses to text files. It provides a command-line interface for easy usage and configuration.',
            image: '/src/assets/images/PromptQueueRunner.webp',
            demoLink: 'https://github.com/Roialfassi/PromptQueueRunner',
            sourceLink: 'https://github.com/Roialfassi/PromptQueueRunner'
          },
          {
            id: 2,
            title: 'Stock Comparator',
            description: ' Stock Performance Comparison is a Streamlit application that allows users to compare the historical performance of two stock tickers, including stocks, ETFs, or index funds.',
            image: '/src/assets/images/stock_comparator.webp',
            demoLink: 'https://stock-comparator.streamlit.app/',
            sourceLink: 'https://github.com/Roialfassi/Stock_Comparator'
          },
          {
            id: 3,
            title: 'World Temperature over time Dashboard',
            description: 'A World Temperature visualization dashboard that shows temperature changes over time based on Kaggle dataset',
            image: '/src/assets/images/WorldTemp.webp',
            demoLink: 'https://roialfassi.github.io/ViZ_Project/',
            sourceLink: 'https://github.com/Roialfassi/ViZ_Project'
          }
        ]
      }
    }
  }
  </script>