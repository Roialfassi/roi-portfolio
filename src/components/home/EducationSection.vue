
<!-- Education.vue -->
<template>
    <section class="education-section">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold mb-8">Education</h2>
      <div class="space-y-6">
        <div 
          v-for="(edu, index) in education" 
          :key="index"
          class="education-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div class="flex justify-between items-start">
            <div>
              <h3 class="text-xl font-semibold text-gray-800">{{ edu.degree }}</h3>
              <div class="text-lg text-gray-700">{{ edu.institution }}</div>
              <p class="text-gray-600">{{ edu.location }}</p>
            </div>
            <div class="text-right">
              <span class="text-sm text-gray-600">{{ edu.period }}</span>
              <div class="text-sm font-semibold text-gray-700 mt-1">GPA: {{ edu.gpa }}</div>
            </div>
          </div>
          
          <div v-if="edu.honors" class="mt-4">
            <h4 class="font-semibold text-gray-700 mb-2">Honors & Awards:</h4>
            <ul class="list-disc list-inside">
              <li 
                v-for="(honor, honIndex) in edu.honors" 
                :key="honIndex"
                class="text-gray-700"
              >
                {{ honor }}
              </li>
            </ul>
          </div>
  
          <div v-if="edu.relevantCourses" class="mt-4">
            <h4 class="font-semibold text-gray-700 mb-2">Relevant Coursework:</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(course, courseIndex) in edu.relevantCourses" 
                :key="courseIndex"
                class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {{ course }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <br><br>
  </template>
  
  <script>
  export default {
    name: 'Education',
    data() {
      return {
        education: [
          {
            degree: 'Master of Science in Information Systems',
            institution: 'University of Haifa',
            location: 'Haifa, Israel',
            period: '2020 - 2025',
            gpa: '84.83',
            relevantCourses: [
              'Visualization of Information',
              'Machine Learning',
              'Data Science',
              'Social network analysis'
            ]
          },
          {
            degree: 'Bachelor of Science in Information Systems',
            institution: 'University of Haifa',
            location: 'Haifa, Israel',
            period: '2016 - 2019',
            gpa: '82.2',
            relevantCourses: [
              'Data Structures and Algorithms',
              'Introduction to Computer Science',
              'Object Oriented Programming',
              'Software Engineering',
              'Design of databases',
              'Development of Web-Based Systems',
              'Ubiquitous Computing',
              'Information systems analysis'

            ]
          }
        ]
      }
    }
  }
  </script>