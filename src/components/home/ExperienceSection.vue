<!-- Experience.vue -->
<template>
    <section class="experience-section">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold mb-8">Professional Experience</h2>
      <div class="space-y-6">
        <div 
          v-for="(job, index) in experience" 
          :key="index"
          class="experience-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-semibold text-gray-800">{{ job.title }}</h3>
            <span class="text-sm text-gray-600">{{ job.period }}</span>
          </div>
          <div class="text-lg text-gray-700 mb-2">{{ job.company }}</div>
          <p class="text-gray-600 mb-4">{{ job.location }}</p>
          <ul class="list-disc list-inside space-y-2">
            <li 
              v-for="(achievement, achIndex) in job.achievements" 
              :key="achIndex"
              class="text-gray-700"
            >
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
    <br>
  </template>
  
  <script>
  export default {
    name: 'Experience',
    data() {
      return {
        experience: [
          {
            title: 'Teaching Assistant',
            company: 'University of Haifa',
            location: 'Haifa, Israel',
            period: '2024 - Present',
            achievements: [
              'Taught Data Structures and Algorithms Course. Assigned coursework, conducted exams.'
            ]
          },
          {
            title: 'Data Engineer NLP Team',
            company: 'Webiks',
            location: 'Tel-Aviv, Israel',
            period: '2022 - 2023',
            achievements: [
              'Designed and developed complex data pipelines and data retrieval for NLP data.',
              'Managed AWS infrastructures for projects (EC2 S3 etc....)',
              'Preformed cleaning of raw data to tagged formats (JSON, CSV, raw HTML)',
              'Provided code maintenance and improvements for existing tools and developed and deployed new tools and sites (AWS, Python, Vue). ',
              'Security clearance.'
            ]
          },
          {
            title: 'Automation Developer',
            company: 'Rafael',
            location: 'Karmiel, Israel',
            period: '2020 - 2022',
            achievements: [
              'Planned and executed complex testing and validation plans of complex procedures',
              'Automated testing processes of various processes.',
              'Developed tools and utilities for testing.',
              'Created test scenarios, then automated analysis of the results'
            ]
          },
          {
            title: 'Teaching Assistant',
            company: 'University of Haifa',
            location: 'Haifa, Israel',
            period: '2020 - 2022',
            achievements: [
              'Taught C programming course. Assigned coursework, conducted exams. '
            ]
          },
          {
            title: ' Final Project Facilitator & Teaching Assistant',
            company: 'Atid College',
            location: 'Haifa, Israel',
            period: '2018 - 2021',
            achievements: [
              'Advised and assisted students with their final project in Java and Web development',
              'Taught programming courses in C and Object Oriented Programming.'
            ]
          },
        ]
      }
    }
  }
  </script>
  