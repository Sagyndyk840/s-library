<script setup lang="ts">
import type SkyLoaderProps from "@/types/components/loaders/clip-loader";
import { computed } from 'vue'

const props = withDefaults(defineProps<SkyLoaderProps>(), {
  loading: false,
  color: 'red',
  size: 'x-large',
  radius: '90%'
})

const spinnerStyle = computed(() => {
  return {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: props.color + ' ' + props.color + ' transparent',
    borderRadius: props.radius,
    background: 'transparent'
  }
})

</script>

<template>
  <div class="s-spinner" v-show="props.loading">
    <div class="s-clip" :class="[
        `s-clip-size-${props.size}`
    ]" :style="spinnerStyle">
    </div>
  </div>

</template>

<style scoped lang="scss">
.s-spinner {
  text-align: center;

  .s-clip {
    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
    animation: v-clipDelay 0.75s 0s infinite linear;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    display: inline-block;

    &-size {
      &-x-small {
        width: 10px;
        height: 10px;
      }
      &-small {
        width: 10px;
        height: 11px;
      }
      &-large {
        width: 15px;
        height: 14px;
      }
      &-x-large {
        width: 15px;
        height: 14px;
      }
      &-normal {
        width: 14px;
        height: 14px;
      }
    }
  }


}

@-webkit-keyframes v-clipDelay
{
  0%
  {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }
  50%
  {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
  }
  100%
  {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}

@keyframes v-clipDelay
{
  0%
  {
    -webkit-transform: rotate(0deg) scale(1);
    transform: rotate(0deg) scale(1);
  }
  50%
  {
    -webkit-transform: rotate(180deg) scale(0.8);
    transform: rotate(180deg) scale(0.8);
  }
  100%
  {
    -webkit-transform: rotate(360deg) scale(1);
    transform: rotate(360deg) scale(1);
  }
}
</style>