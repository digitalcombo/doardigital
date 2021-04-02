<template>
  <v-footer padless id="Footer">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Digital Combo</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>