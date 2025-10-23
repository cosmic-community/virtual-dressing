import { cosmic, hasStatus } from '~/lib/cosmic'
import type { Service } from '~/types'

export default defineEventHandler(async () => {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const services = response.objects as Service[]
    
    return services
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    
    console.error('Error fetching services:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch services'
    })
  }
})