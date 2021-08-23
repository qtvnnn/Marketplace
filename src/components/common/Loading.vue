<template>
  <div class="loadingStyle">
    <v-progress-circular
      :rotate="180"
      :size="150"
      :width="15"
      :value="value"
      color="orange"
    >
    </v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return { interval: {}, value: 0 };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0);
      }
      this.value += 1;
    }, 100);
  },
};
</script>

<style lang="scss" scoped>
.loadingStyle {
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
