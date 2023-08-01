<template>
  <div class="wrap">
    <div class="wrap__content">

      <div>
        <h1>Chào bạn</h1>
        <div class="wrap__form">
          <input type="text" placeholder="...nhập text ở đây" spellcheck="false">
          <div @click="copy">
            <Wrapbutton :text="'COPY'" style="font-weight: 600;" />
          </div>

        </div>
      </div>
      <div class="wrap__form" :class="{ 'show': showDiv, 'hide': !showDiv }" >
        <h4>copied</h4>
        <div @click="confirm">
          <Wrapbutton :text="'ok'" style="font-weight: 600;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Wrapbutton from '../components/Wrapbutton.vue';

export default {
  name: 'IndexPage',
  components: { Wrapbutton },
  data() {
    return {
      showDiv: false,
    };
  },
  methods: {
    copy() {
      this.showDiv = true;
      if (this.showDiv) {
        this.hideTimeOut()
      }
    },
    confirm() {
      this.showDiv = false;
    },
    hideTimeOut() {
      setTimeout(() => {
        this.showDiv = false
      }, 3000)
    }
  },
}
</script>
