<template>
  <div class="portfolio-mini-container">
    {{projectId}}
  </div>
</template>

<script>
export default {
  name: 'portfolioMiniContainer',
  props: ['projectId']
}
</script>

<style>
.portfolio-mini-container {
    height: 175px;
    width: 300px;
    background-color: white;
    margin-bottom: 20px;
}
</style>