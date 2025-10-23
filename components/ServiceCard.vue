<template>
  <div class="card overflow-hidden hover:scale-105 transition-transform duration-200">
    <div v-if="service.metadata?.featured_image" class="h-48 overflow-hidden">
      <img 
        :src="`${service.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`"
        :alt="service.metadata.service_name"
        class="w-full h-full object-cover"
        width="300"
        height="200"
      />
    </div>
    <div v-else class="h-48 bg-gradient-to-br from-primary-500 to-primary-700"></div>

    <div class="p-6">
      <div v-if="service.metadata?.category" class="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
        {{ service.metadata.category.value }}
      </div>

      <h3 class="text-2xl font-bold text-secondary-900 mb-3">
        {{ service.metadata?.service_name || service.title }}
      </h3>

      <div 
        v-if="service.metadata?.description" 
        class="text-secondary-600 mb-4 line-clamp-3"
        v-html="service.metadata.description"
      />

      <div class="flex items-center justify-between mt-4">
        <span v-if="service.metadata?.starting_price" class="text-lg font-semibold text-primary-600">
          {{ service.metadata.starting_price }}
        </span>
        <button class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
          Learn More →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Service } from '~/types'

defineProps<{
  service: Service
}>()
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>