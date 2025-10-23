<template>
  <header class="bg-white shadow-sm sticky top-0 z-40">
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-xl">PS</span>
          </div>
          <span class="font-bold text-xl text-secondary-900 hidden sm:block">Professional Services</span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-secondary-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg 
            v-if="!mobileMenuOpen"
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else
            class="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-secondary-200"
      >
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          @click="mobileMenuOpen = false"
          class="block py-2 text-secondary-700 hover:text-primary-600 font-medium transition-colors"
          active-class="text-primary-600"
        >
          {{ link.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Case Studies', path: '/case-studies' }
]
</script>