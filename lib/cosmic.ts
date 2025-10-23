import { createBucketClient } from '@cosmicjs/sdk'

const config = useRuntimeConfig()

export const cosmic = createBucketClient({
  bucketSlug: config.cosmicBucketSlug as string,
  readKey: config.cosmicReadKey as string,
})

// Helper function for error checking
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}