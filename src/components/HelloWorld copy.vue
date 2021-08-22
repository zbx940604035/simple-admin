<template>
  <div class="hello">
    <el-empty description="描述文字" class="empty"></el-empty>
    <p>
      {{ name1 }}
    </p>
    <p>
      {{ age1 }}
    </p>
    <p>
      <!-- {{$store.getters.decorationName}} -->
      {{ decorationName }}
    </p>
    <p>
      {{ $store.state.user.name }}
    </p>
    <div>
      <el-button type="primary"
                  @click="setDataVuex">主要按钮</el-button>
      <el-button type="primary"
                  @click="updateName('小三')">使用mapMutations</el-button>
      <el-button type="primary"
                  @click="setActions">使用actions</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    // ...mapState(['name','age'])
    ...mapState( {name1:'name', age1:'age'} ),
    ...mapGetters( ['decorationName'] )
  },
  data() {
    return {

    }
  },
  methods:{
    ...mapMutations(['updateName', 'updateAge']),
    ...mapActions(['updateNameAsync']),
    setDataVuex() {
      // this.$store.commit('updateName','小三')
      // this.$store.commit('updateAge', 18)
      this.updateName('小四')
      this.updateAge(20)
    },
    setActions(){
      // this.$store.dispatch('updateNameAsync', '小单')
      this.updateNameAsync('小单')
    }
  }
}
</script>

<style  lang="scss">
.hello {
  p {
    font-size: 30px;
    color:rgb(148, 202, 238);
  }
}
</style>
