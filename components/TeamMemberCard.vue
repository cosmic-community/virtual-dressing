<template>
  <div class="card p-6 text-center hover:scale-105 transition-transform duration-200">
    <div class="mb-4">
      <img 
        v-if="member.metadata?.photo"
        :src="`${member.metadata.photo.imgix_url}?w=256&h=256&fit=crop&auto=format,compress`"
        :alt="member.metadata.full_name"
        class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary-100"
        width="128"
        height="128"
      />
      <div v-else class="w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-bold">
        {{ getInitials(member.metadata?.full_name || member.title) }}
      </div>
    </div>

    <h3 class="text-2xl font-bold text-secondary-900 mb-1">
      {{ member.metadata?.full_name || member.title }}
    </h3>

    <p class="text-primary-600 font-medium mb-3">
      {{ member.metadata?.role }}
    </p>

    <p v-if="member.metadata?.bio" class="text-secondary-600 mb-4">
      {{ member.metadata.bio }}
    </p>

    <div v-if="member.metadata?.linkedin_url || member.metadata?.twitter_handle" class="flex justify-center space-x-4 mt-4">
      <a 
        v-if="member.metadata.linkedin_url"
        :href="member.metadata.linkedin_url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-secondary-600 hover:text-primary-600 transition-colors"
        aria-label="LinkedIn Profile"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a 
        v-if="member.metadata.twitter_handle"
        :href="`https://twitter.com/${member.metadata.twitter_handle.replace('@', '')}`"
        target="_blank"
        rel="noopener noreferrer"
        class="text-secondary-600 hover:text-primary-600 transition-colors"
        aria-label="Twitter Profile"
      >
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TeamMember } from '~/types'

defineProps<{
  member: TeamMember
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
</script>