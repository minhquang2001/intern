<template>
  <div class="wrap">
    <div class="wrap__content">

      <div>
        <h1>Chào bạn</h1>
        <div class="wrap__form">
          <input type="text" v-model="textCopy" placeholder="...nhập text ở đây" spellcheck="false">
          <div @click="copy">
            <Wrapbutton :text="'COPY'" style="font-weight: 600;" />
          </div>

        </div>
      </div>
      <div class="wrap__form" :class="{ 'show': showDiv, 'hide': !showDiv }">
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
import { Clipboard } from '@capacitor/clipboard';


export default {
  name: 'IndexPage',
  components: { Wrapbutton },
  data() {
    return {
      textCopy: '',
      showDiv: false,
    };
  },
  methods: {
    async copy() {
      await Clipboard.write({
        string: this.textCopy
      });
      this.showDiv = true;
      console.log(this.textCopy)
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
