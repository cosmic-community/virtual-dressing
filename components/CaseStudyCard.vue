<template>
  <div class="card overflow-hidden">
    <!-- Images Gallery -->
    <div v-if="caseStudy.metadata?.project_images && caseStudy.metadata.project_images.length > 0" class="grid grid-cols-2 h-64">
      <img 
        v-for="(image, index) in caseStudy.metadata.project_images.slice(0, 2)"
        :key="index"
        :src="`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`"
        :alt="`${caseStudy.metadata.project_title} - Image ${index + 1}`"
        class="w-full h-full object-cover"
        width="300"
        height="200"
      />
    </div>
    <div v-else class="h-64 bg-gradient-to-br from-primary-500 to-primary-700"></div>

    <div class="p-8">
      <!-- Header -->
      <div class="flex items-start justify-between mb-6">
        <div>
          <h3 class="text-3xl font-bold text-secondary-900 mb-2">
            {{ caseStudy.metadata?.project_title || caseStudy.title }}
          </h3>
          <p class="text-xl text-secondary-600">
            Client: {{ caseStudy.metadata?.client_name }}
          </p>
        </div>
        
        <div v-if="caseStudy.metadata?.related_service" class="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium">
          {{ caseStudy.metadata.related_service.metadata?.service_name || caseStudy.metadata.related_service.title }}
        </div>
      </div>

      <!-- Challenge Section -->
      <div class="mb-6">
        <h4 class="text-xl font-semibold text-secondary-900 mb-3 flex items-center">
          <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          Challenge
        </h4>
        <div 
          class="text-secondary-700 prose prose-sm max-w-none"
          v-html="caseStudy.metadata?.challenge"
        />
      </div>

      <!-- Solution Section -->
      <div class="mb-6">
        <h4 class="text-xl font-semibold text-secondary-900 mb-3 flex items-center">
          <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Solution
        </h4>
        <div 
          class="text-secondary-700 prose prose-sm max-w-none"
          v-html="caseStudy.metadata?.solution"
        />
      </div>

      <!-- Results Section -->
      <div class="bg-primary-50 rounded-lg p-6">
        <h4 class="text-xl font-semibold text-secondary-900 mb-3 flex items-center">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Results
        </h4>
        <div 
          class="text-secondary-700 prose prose-sm max-w-none"
          v-html="caseStudy.metadata?.results"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CaseStudy } from '~/types'

defineProps<{
  caseStudy: CaseStudy
}>()
</script>

<style scoped>
.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose strong {
  font-weight: 600;
  color: #1e293b;
}

.prose p {
  margin-bottom: 0.75rem;
}
</style>