<script setup lang="ts">
import SButton from "@/components/button/SButton.vue";
import ClipLoader from "@/components/loaders/ClipLoader.vue";
</script>

<template>
  <div class="wrapper">

    <SButton :loading="true" color="blue" block text-color="white" size="normal" label="Extra large button" icon-left="person" icon-right="person"  >

    </SButton>

  </div>
</template>

<style>
  .wrapper {
    padding: 20px;
  }
</style>