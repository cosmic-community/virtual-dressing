<template>
  <div>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
      <div class="container-custom">
        <h1 class="text-5xl font-bold mb-4">Meet Our Team</h1>
        <p class="text-xl text-primary-100 max-w-2xl">
          The talented professionals behind our success
        </p>
      </div>
    </section>

    <!-- Team Grid -->
    <section class="section-padding">
      <div class="container-custom">
        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="card p-6 animate-pulse">
            <div class="bg-secondary-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
            <div class="bg-secondary-200 h-6 rounded mb-2"></div>
            <div class="bg-secondary-200 h-4 rounded w-3/4 mx-auto"></div>
          </div>
        </div>

        <div v-else-if="team && team.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMemberCard 
            v-for="member in team" 
            :key="member.id" 
            :member="member"
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-xl text-secondary-600">No team members found.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/types'

// Fetch team members
const { data: team, pending } = await useFetch<TeamMember[]>('/api/team', {
  default: () => []
})

// SEO
useHead({
  title: 'Our Team - Professional Services Showcase',
  meta: [
    { 
      name: 'description', 
      content: 'Meet the talented professionals who make our success possible. Learn about their expertise and experience.' 
    }
  ]
})
</script>