import { cosmic, hasStatus } from '~/lib/cosmic'
import type { CaseStudy } from '~/types'

export default defineEventHandler(async () => {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const caseStudies = response.objects as CaseStudy[]
    
    return caseStudies
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    
    console.error('Error fetching case studies:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch case studies'
    })
  }
})