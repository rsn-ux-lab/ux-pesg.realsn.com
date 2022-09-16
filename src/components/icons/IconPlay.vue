<template>
  <i class="icon-play" aria-hidden="true"></i>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-play {
  $name: inline-#{unique-id()};

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: fz-in-em(96, $G-font-size);
  height: fz-in-em(96, $G-font-size);
  border: fz-in-em(3, $G-font-size) solid #fff;
  font-size: $G-font-size;
  border-radius: 100%;
  background-image: svgIcon(play, fff);
  background-size: 38%;
  background-position: 58% center;
  background-repeat: no-repeat;
  transform: translate(-50%, -50%);
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 100%;
    height: 100%;
    margin: fz-in-em(-44, $G-font-size) 0 0 fz-in-em(-44, $G-font-size);
    border-radius: 50%;
    border: fz-in-em(2, $G-font-size) solid rgba(255, 255, 255, 0.75);
    animation: #{$name} 2s forwards infinite;
  }

  @keyframes #{$name} {
    0% {
      transform: scale(1);
      box-shadow: inset 0 0 fz-in-em(25, $G-font-size) fz-in-em(3, $G-font-size) rgba(255, 255, 255, 0.75),
        0 0 fz-in-em(25, $G-font-size) fz-in-em(10, $G-font-size) rgba(255, 255, 255, 0.75);
    }
    100% {
      transform: scale(1.8);
      border-color: transparent;
      box-shadow: none;
    }
  }
}
</style>
