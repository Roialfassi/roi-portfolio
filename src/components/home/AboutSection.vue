<!-- src/components/home/AboutSection.vue -->
<template>
  <section id="about" class="bg-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 class="text-3xl font-bold text-gray-900">About Me</h3>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="text-gray-600">{{ bio }}</p>
          <p class="mt-4 text-gray-600">{{ additionalInfo }}</p>
        </div>
        <div class="space-y-4">
          <h4 class="font-semibold text-gray-900">Skills</h4>
          <div class="flex flex-wrap gap-2">
            <SkillTag v-for="skill in skills" 
                     :key="skill" 
                     :skill="skill" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillTag from '../ui/SkillTag.vue'

export default {
  components: {
    SkillTag
  },
  data() {
    return {
      bio: "I am an experienced Developer specializing in Python. I studied both M.Sc. and B.Sc. in Information Systems at the University of Haifa. I am passionate about multiple computer science concepts including Generative AI, Data Science, software engineering, and machine learning.",
      additionalInfo: "When I'm not coding, you can find me following sports, playing sports and playing Chess",
      skills: [
        'Coding',
        'Python',
        'C',
        'C#',
        'Java',
        'Web Development',
        'Databases',
        'Prompt Engineering',
        "Machine Learning",
        'AI',
        'Gen-AI',
        'AWS',
        'SQL'
      ]
    }
  }
}
</script>
