<template>
  <div class="loyout">
    <bx-header />
    <div class="content">
      <bx-nav/>
      <bx-main/>
    </div>
  </div>
</template>
<script>
import BxHeader from './header'
import BxNav from './nav'
import BxMain from './main'
export default {
  name: 'Home',
  components: {
    BxHeader,
    BxNav,
    BxMain
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>
