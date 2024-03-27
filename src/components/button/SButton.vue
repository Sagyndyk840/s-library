<script setup lang="ts">
import type {SkyButtonProps} from "@/types/components/button";

const props = withDefaults(defineProps<SkyButtonProps>(), {
  type: "button",
  density: "default",
  size: "normal",
  rounded: "normal",
  outlined: false,
  label: "label",
  align: "center",
  loading: false,
  color: "blue",
  textColor: "white",
  disabled: false,
})

</script>

<template>
  <div>
    <button :type="props.type" class="btn" :class="[
      `text-${props.textColor}`,
      `bg-${props.color}`,
      props.align,
      `btn-size-${props.size}`,
      `btn-align-${props.align}`,
      `btn-density-${props.density}`,
      `rounded-${props.rounded}`,
      {
        'outlined': props.outlined,
      }
    ]">
      <slot :class="props.textColor">{{ props.label }}</slot>
    </button>
  </div>
</template>

<style scoped lang="scss">
  .btn {
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;

    &-size {
      &-x-small {
        padding: 4px 8px;
      }
      &-small {
        padding: 7px 12px;
      }
      &-large {
        padding: 14px 20px;
      }
      &-x-large {
        padding: 16px 23px;
      }
      &-normal {
        padding: 10px 16px;
      }
    }

    &-align {
      &-center {
        justify-content: center;
      }
      &-left {
        justify-content: left;
      }
      &-right {
        justify-content: right;
      }
    }

    &-density {
      &-default {
        padding: 10px 16px;
      }
      &-compact {
        padding: 7px 12px;
      }
      &-comfortable {
        padding: 7px 12px;
      }
    }
  }
</style>