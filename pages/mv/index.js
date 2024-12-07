import { fetchGetMvList } from "../../services/mv";

// pages/mv/index.js
Page({
  onLoad() {
    this.getMvs()
  },
  data: {
    list: [],
    offset: 0,
    hasMore: true
  },
  async getMvs() {
    const result = await fetchGetMvList(this.data.offset)
    const newList = [...this.data.list, ...result.data]

    this.setData({
      list: newList
    })

    this.data.hasMore = result.hasMore
    this.data.offset = this.data.list.length
  },
  // 下拉刷新
  async onPullDownRefresh() {
    this.setData({ list: [] })
    this.data.offset = 0
    this.data.hasMore = true
    await this.getMvs()
    wx.stopPullDownRefresh()
  },
  // 上拉加载
  onReachBottom() {
    if(!this.data.hasMore) return

    this.getMvs()
  }
})