<template>
  <div class="min-h-screen bg-secondary-50">
    <AppHeader />
    
    <main>
      <slot />
    </main>
    
    <AppFooter />
    <CosmicBadge />
  </div>
</template>

<script setup lang="ts">
// Layout component with header, footer, and cosmic badge
</script>