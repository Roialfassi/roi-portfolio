
<!-- src/components/home/ContactSection.vue -->
<template>
    <section id="contact" class="bg-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 class="text-3xl font-bold text-gray-900">Get in Touch</h3>
        <p class="mt-4 text-gray-600">
          {{ description }}
        </p>
        
        <!-- Contact Form -->
        <form @submit.prevent="handleSubmit" class="mt-8 max-w-2xl">
          <div class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" 
                     id="name" 
                     v-model="formData.name"
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" 
                     required />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" 
                     id="email" 
                     v-model="formData.email"
                     class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" 
                     required />
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" 
                        v-model="formData.message"
                        rows="4" 
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500" 
                        required></textarea>
            </div>
            
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button type="submit" 
                      class="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 flex items-center justify-center">
                Send Message
              </button>
              
              <a :href="'mailto:' + contactEmail" 
                 class="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center justify-center">
                <span class="mr-2">📧</span>
                Email Directly
              </a>
            </div>
          </div>
        </form>
  
        <!-- Alternative Contact Methods -->
        <div class="mt-12">
          <h4 class="text-lg font-semibold text-gray-900">Alternative Contact Methods</h4>
          <div class="mt-4 space-y-2">
            <p v-for="(method, index) in alternativeContacts" 
               :key="index" 
               class="text-gray-600">
              <strong>{{ method.platform }}:</strong> {{ method.value }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        description: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
        contactEmail: 'your.email@example.com',
        formData: {
          name: '',
          email: '',
          message: ''
        },
        alternativeContacts: [
          { platform: 'LinkedIn', value: 'linkedin.com/in/yourprofile' },
          { platform: 'Twitter', value: '@yourhandle' },
          { platform: 'Location', value: 'City, Country' }
        ]
      }
    },
    methods: {
      async handleSubmit() {
        // Here you would typically implement form submission logic
        // For example, sending to an API endpoint
        console.log('Form submitted:', this.formData)
        
        try {
          // Simulated API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // Reset form after successful submission
          this.formData = {
            name: '',
            email: '',
            message: ''
          }
          
          alert('Message sent successfully!')
        } catch (error) {
          alert('Failed to send message. Please try again.')
        }
      }
    }
  }
  </script>