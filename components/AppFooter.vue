<template>
  <footer class="bg-secondary-900 text-white">
    <div class="container-custom py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Company Info -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">PS</span>
            </div>
            <span class="font-bold text-lg">Professional Services</span>
          </div>
          <p class="text-secondary-400">
            Delivering innovative solutions that drive growth and success for your organization.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink 
                :to="link.path"
                class="text-secondary-400 hover:text-white transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="font-semibold text-lg mb-4">Get in Touch</h3>
          <p class="text-secondary-400 mb-4">
            Ready to transform your business? Let's talk about how we can help.
          </p>
          <a 
            href="mailto:contact@example.com" 
            class="text-primary-400 hover:text-primary-300 transition-colors"
          >
            contact@example.com
          </a>
        </div>
      </div>

      <div class="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
        <p>&copy; {{ currentYear }} Professional Services Showcase. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Case Studies', path: '/case-studies' }
]
</script>