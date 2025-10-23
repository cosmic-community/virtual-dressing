<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
      <div class="container-custom">
        <h1 class="text-5xl font-bold mb-4">Case Studies</h1>
        <p class="text-xl text-primary-100 max-w-2xl">
          Real results from real clients - explore our success stories
        </p>
      </div>
    </section>

    <!-- Case Studies List -->
    <section class="section-padding">
      <div class="container-custom">
        <div v-if="pending" class="space-y-12">
          <div v-for="i in 2" :key="i" class="card p-8 animate-pulse">
            <div class="bg-secondary-200 h-8 rounded mb-4 w-2/3"></div>
            <div class="bg-secondary-200 h-4 rounded mb-2"></div>
            <div class="bg-secondary-200 h-4 rounded w-3/4"></div>
          </div>
        </div>

        <div v-else-if="caseStudies && caseStudies.length > 0" class="space-y-12">
          <CaseStudyCard 
            v-for="caseStudy in caseStudies" 
            :key="caseStudy.id" 
            :caseStudy="caseStudy"
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-xl text-secondary-600">No case studies available at the moment.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { CaseStudy } from '~/types'

// Fetch case studies
const { data: caseStudies, pending } = await useFetch<CaseStudy[]>('/api/case-studies', {
  default: () => []
})

// SEO
useHead({
  title: 'Case Studies - Professional Services Showcase',
  meta: [
    { 
      name: 'description', 
      content: 'Explore our successful case studies and see how we have helped clients achieve their business goals with measurable results.' 
    }
  ]
})
</script>