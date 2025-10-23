<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business with Expert Services
          </h1>
          <p class="text-xl md:text-2xl text-primary-100 mb-8">
            We deliver innovative solutions that drive growth and success for your organization
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/services" class="btn btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Explore Services
            </NuxtLink>
            <NuxtLink to="/case-studies" class="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
              View Case Studies
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Services -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">Our Services</h2>
          <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique business needs
          </p>
        </div>

        <div v-if="servicesLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="card p-6 animate-pulse">
            <div class="bg-secondary-200 h-48 rounded-lg mb-4"></div>
            <div class="bg-secondary-200 h-6 rounded mb-2"></div>
            <div class="bg-secondary-200 h-4 rounded w-3/4"></div>
          </div>
        </div>

        <div v-else-if="services.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            v-for="service in services.slice(0, 3)" 
            :key="service.id" 
            :service="service"
          />
        </div>

        <div v-else class="text-center text-secondary-600">
          <p>No services available at the moment.</p>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/services" class="btn btn-primary">
            View All Services
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-secondary-900 mb-4">What Clients Say</h2>
          <p class="text-xl text-secondary-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div v-if="testimonialsLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="card p-6 animate-pulse">
            <div class="bg-secondary-200 h-20 rounded mb-4"></div>
            <div class="bg-secondary-200 h-4 rounded mb-2"></div>
            <div class="bg-secondary-200 h-4 rounded w-2/3"></div>
          </div>
        </div>

        <div v-else-if="testimonials.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            v-for="testimonial in testimonials" 
            :key="testimonial.id" 
            :testimonial="testimonial"
          />
        </div>

        <div v-else class="text-center text-secondary-600">
          <p>No testimonials available at the moment.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p class="text-xl text-primary-100 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <NuxtLink to="/team" class="btn bg-white text-primary-600 hover:bg-primary-50">
            Meet Our Team
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Service, Testimonial } from '~/types'

// Fetch services
const { data: services, pending: servicesLoading } = await useFetch<Service[]>('/api/services', {
  default: () => []
})

// Fetch testimonials
const { data: testimonials, pending: testimonialsLoading } = await useFetch<Testimonial[]>('/api/testimonials', {
  default: () => []
})

// SEO
useHead({
  title: 'Professional Services Showcase - Expert Solutions for Your Business',
  meta: [
    { 
      name: 'description', 
      content: 'Discover our comprehensive range of professional services, meet our expert team, and explore our successful case studies.' 
    }
  ]
})
</script>