<script setup lang="ts">
import SButton from "@/components/button/SButton.vue";
</script>

<template>
  <div class="wrapper">

    <SButton :loading="false"   color="blue" text-color="white" size="normal" label="Extra large button" icon-left="person" icon-right="person"  >

    </SButton>

  </div>
</template>

<style>
  .wrapper {
    padding: 20px;
  }
</style>