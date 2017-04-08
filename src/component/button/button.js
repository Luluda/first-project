import { mapGetters } from 'vuex'
export default{
  beforeCreate () {
    this.$store.dispatch('getFeatures')
    this.$store.dispatch('getMenuList')
  },
  computed: {
    ...mapGetters({
      userName: 'userName',
      menuList: 'menuList',
      featuresList: 'featuresList'
    })
  }
}