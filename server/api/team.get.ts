import { cosmic, hasStatus } from '~/lib/cosmic'
import type { TeamMember } from '~/types'

export default defineEventHandler(async () => {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const team = response.objects as TeamMember[]
    
    return team
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    
    console.error('Error fetching team members:', error)
    throw createError({
      statusCode: 500,
      message: 'Failed to fetch team members'
    })
  }
})