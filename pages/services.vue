<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
      <div class="container-custom">
        <h1 class="text-5xl font-bold mb-4">Our Services</h1>
        <p class="text-xl text-primary-100 max-w-2xl">
          Comprehensive solutions designed to drive your business forward
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="bg-white border-b border-secondary-200">
      <div class="container-custom py-6">
        <div class="flex flex-wrap gap-3">
          <button
            @click="selectedCategory = null"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              selectedCategory === null
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            ]"
          >
            All Services
          </button>
          <button
            v-for="category in categories"
            :key="category.key"
            @click="selectedCategory = category.key as ServiceCategory"
            :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              selectedCategory === category.key
                ? 'bg-primary-600 text-white'
                : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
            ]"
          >
            {{ category.value }}
          </button>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 6" :key="i" class="card p-6 animate-pulse">
            <div class="bg-secondary-200 h-48 rounded-lg mb-4"></div>
            <div class="bg-secondary-200 h-6 rounded mb-2"></div>
            <div class="bg-secondary-200 h-4 rounded w-3/4"></div>
          </div>
        </div>

        <div v-else-if="filteredServices.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            v-for="service in filteredServices" 
            :key="service.id" 
            :service="service"
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-xl text-secondary-600">No services found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Service, ServiceCategory } from '~/types'

// Category filter state
const selectedCategory = ref<ServiceCategory | null>(null)

// Available categories
const categories = [
  { key: 'consulting', value: 'Consulting' },
  { key: 'development', value: 'Development' },
  { key: 'design', value: 'Design' },
  { key: 'marketing', value: 'Marketing' }
]

// Fetch services
const { data: services, pending } = await useFetch<Service[]>('/api/services', {
  default: () => []
})

// Computed filtered services
const filteredServices = computed(() => {
  if (!services.value) return []
  
  if (!selectedCategory.value) {
    return services.value
  }
  
  return services.value.filter(service => 
    service.metadata?.category?.key === selectedCategory.value
  )
})

// SEO
useHead({
  title: 'Our Services - Professional Services Showcase',
  meta: [
    { 
      name: 'description', 
      content: 'Explore our comprehensive range of professional services including consulting, development, design, and marketing solutions.' 
    }
  ]
})
</script>