<!-- src/views/HomeView.vue -->
<template>
  <div class="min-h-screen bg-gray-50">
    <TheHeader />
    <main class="pt-16"> <!-- Added padding-top to account for fixed header -->
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="education">
        <EducationSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
    </main>
    <TheFooter />
  </div>
</template>
  <script>
  import TheHeader from '@/components/layout/TheHeader.vue'
  //  import TheNavigation from '@/components/layout/TheNavigation.vue'
  import TheFooter from '@/components/layout/TheFooter.vue'
  import HeroSection from '@/components/home/HeroSection.vue'
  import AboutSection from '@/components/home/AboutSection.vue'
  import ProjectsSection from '@/components/home/ProjectsSection.vue'
  import ExperienceSection from '@/components/home/ExperienceSection.vue'
  import EducationSection from '@/components/home/EducationSection.vue'
  // import ContactSection from '@/components/home/ContactSection.vue'
  
  export default {
    name: 'HomeView',
    components: {
      TheHeader,
      // TheNavigation,
      TheFooter,
      HeroSection,
      AboutSection,
      ProjectsSection,
      ExperienceSection,
      EducationSection
      // ContactSection
    }
  }
  </script>