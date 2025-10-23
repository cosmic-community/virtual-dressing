import { cosmic, hasStatus } from '~/lib/cosmic'
import type { Testimonial } from '~/types'

export default defineEventHandler(async () => {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const testimonials = response.objects as Testimonial[]
    
    return testimonials
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    
    console.error('Error fetching testimonials:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch testimonials'
    })
  }
})