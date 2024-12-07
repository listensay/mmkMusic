// components/search/search.js
Component({
  /**
   * 组件的方法列表
   */
  methods: {
    toSearchPage() {
      wx.navigateTo({
        url: '/pages/search/index',
      })
    }
  }
})