<template>
  <aside class="aside-btn-top">
    <button class="btn btn-top js-anchor" data-anchor="#wrap" type="button"><i class="icon-top"></i><span>TOP</span></button>
  </aside>
</template>

<script>
export default {
  methods: {
    autoHide() {
      $.sticky({
        $target: this.$el,
        position: "bottom", // top, bottom
        callback: (_sticky) => {
          // toggle active / disable
          let boundaryT;
          window.onLoadResize((_resize) => {
            const winH = _resize.windowSize.height;

            boundaryT = Math.abs(winH / 4); // 화면 1/4 계산
          });

          window.getScrollDirection((_scroll) => {
            _scroll.scrollY >= boundaryT ? _sticky.$target.classList.remove("is-hidden") : _sticky.$target.classList.add("is-hidden");
          });
        },
      });
    },
  },
  mounted() {
    this.autoHide();
  },
};
</script>

<style lang="scss" scoped>
.aside-btn-top {
  position: relative;
  min-width: $G-inner-width;
  z-index: 30;
  .btn-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5rem;
    z-index: 1;
    width: 9rem;
    height: 9rem;
    color: #fff;
    fill: #fff;
    background: $G-grad-primary;
    transform: translateY(-50%);
    pointer-events: all;
    @include transition($time: 0.5);

    .icon-top {
      width: fz-in-em(12, $G-font-size);
      height: fz-in-em(22, $G-font-size);
      font-size: $G-font-size;
      background-image: svgIcon(arrow-up, fff);
      background-size: 80%;
      background-position: center center;
      background-repeat: no-repeat;
    }

    &:hover {
      $name: inline-#{unique-id()};
      animation: $name 0.4s forwards ease-in-out;

      @keyframes #{$name} {
        20% {
          margin-top: -0.4%;
        }
        40% {
          margin-top: 0.3%;
        }
        60% {
          margin-top: -0.3%;
        }
        80% {
          margin-top: 0.2%;
        }
        90% {
          margin-top: -0.2%;
        }
        100% {
          margin-top: 0%;
        }
      }
    }
  }
  &[style*="fixed"] {
    .btn-top {
      transform: translateY(-150%);
    }
  }
  &.is-hidden {
    .btn-top {
      opacity: 0;
      pointer-events: none;
      transform: translateY(0);
    }
  }
}
</style>
