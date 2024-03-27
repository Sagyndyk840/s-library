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
      font-size: 8px;
    }
    &-small {
      font-size: 10px;
    }
    &-large {
      font-size: 12px;
    }
    &-x-large {
      font-size: 22px;
    }
    &-normal {
      font-size: 24px;
    }
  }
}
</style>