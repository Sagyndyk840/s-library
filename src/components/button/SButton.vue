<script setup lang="ts">
import type {SkyButtonProps} from "@/types/components/button";

const props = withDefaults(defineProps<SkyButtonProps>(), {
  type: "button",
  density: "default",
  size: "regular",
  rounded: "0",
})
</script>

<template>
  <div>
    <button :type="props.type" :class="[
      props.color,
      props.align,
      props.size,
      props.padding,
      {
        'outlined': props.outlined,
        'rounded': props.rounded,
      }
    ]">
      <slot :class="props.textColor">{{ props.label }}</slot>
    </button>
  </div>
</template>
