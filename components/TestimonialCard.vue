<template>
  <div class="card p-6 hover:scale-105 transition-transform duration-200">
    <div class="flex items-center mb-4">
      <img 
        v-if="testimonial.metadata?.client_photo"
        :src="`${testimonial.metadata.client_photo.imgix_url}?w=128&h=128&fit=crop&auto=format,compress`"
        :alt="testimonial.metadata.client_name"
        class="w-16 h-16 rounded-full object-cover border-2 border-primary-100 mr-4"
        width="64"
        height="64"
      />
      <div v-else class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-xl font-bold mr-4">
        {{ getInitials(testimonial.metadata?.client_name || '') }}
      </div>
      
      <div>
        <h3 class="font-bold text-secondary-900">
          {{ testimonial.metadata?.client_name }}
        </h3>
        <p v-if="testimonial.metadata?.company" class="text-secondary-600 text-sm">
          {{ testimonial.metadata.company }}
        </p>
      </div>
    </div>

    <div v-if="testimonial.metadata?.rating" class="flex text-yellow-400 mb-4">
      <svg 
        v-for="star in getRatingValue(testimonial.metadata.rating.key)" 
        :key="star"
        class="w-5 h-5" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>

    <p class="text-secondary-700 italic">
      "{{ testimonial.metadata?.testimonial }}"
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Testimonial } from '~/types'

defineProps<{
  testimonial: Testimonial
}>()

function getInitials(name: string): string {
  const names = name.split(' ')
  // Changed: Use optional chaining to safely access array elements
  const firstInitial = names[0]?.[0]
  const lastInitial = names[names.length - 1]?.[0]
  
  if (names.length >= 2 && firstInitial && lastInitial) {
    return (firstInitial + lastInitial).toUpperCase()
  }
  return name.substring(0, 2).toUpperCase()
}

function getRatingValue(ratingKey: string): number {
  return parseInt(ratingKey) || 5
}
</script>