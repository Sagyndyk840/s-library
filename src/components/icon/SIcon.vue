<script setup lang="ts">

import type SkyIconProps from "@/types/components/icon";

const props = withDefaults(defineProps<SkyIconProps>(), {
  icon: 'pie_chart',
  variant: 'material-icons',
  size: 'normal',
  color: 'black',
})
</script>

<template>
  <span :class="[
      props.variant,
      `text-${props.color}`,
      `icon-size-${props.size}`
  ]">{{ props.icon }}</span>
</template>

<style scoped lang="scss">
.icon {
  &-size {
    &-x-small {
      font-size: 15px;
    }
    &-small {
      font-size: 18px;
    }
    &-large {
      font-size: 20px;
    }
    &-x-large {
      font-size: 22px;
    }
    &-normal {
      font-size: 16px;
    }
  }
}
</style>