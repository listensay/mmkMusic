// pages/home/index.js
import { fetchGetBanners, fetchGetCategorys, fetchGetHotRank, fetchGetSongMenu } from '../../services/music'

Page({
  onLoad() {
    this.getBanners()
    this.getHotRank()
    // this.getCategorys()
    this.getTopRank()
    this.getSongMenus()
  },
  data: {
    banners: [],
    recommend: [],
    categorys: [],
    topRank: [],
    recommendMenu: [],
    hotMenu: []
  },
  async getBanners() {
    const result = await fetchGetBanners(0)
    const banners = result.banners

    this.setData({
      banners
    })
  },
  async getHotRank() {
    const result = await fetchGetHotRank(3778678)
    this.setData({
      recommend: result.playlist.tracks.slice(0, 6)
    })
  },
  async getCategorys() {
    const result = await fetchGetCategorys()
    console.log(result);
  },
  async getTopRank() {
    const topSong = await fetchGetHotRank(19723756)
    const newSong = await fetchGetHotRank(3779629)
    const original = await fetchGetHotRank(2884035)

    const list = [
      {
        name: topSong.playlist.name,
        coverImgUrl: topSong.playlist.coverImgUrl,
        songs: topSong.playlist.tracks.slice(0, 3),
        count: topSong.playlist.playCount
      },
      {
        name: newSong.playlist.name,
        coverImgUrl: newSong.playlist.coverImgUrl,
        songs: newSong.playlist.tracks.slice(0, 3),
        count: newSong.playlist.playCount
       },
      {
        name: original.playlist.name,
        coverImgUrl: original.playlist.coverImgUrl,
        songs: original.playlist.tracks.slice(0, 3),
        count: original.playlist.playCount
      }
    ]

    this.setData({
      topRank: list
    })
  },
  async getSongMenus() {
    const hot = await fetchGetSongMenu()
    const recommend = await fetchGetSongMenu('华语')

    this.setData({
      hotMenu: hot.playlists,
      recommendMenu: recommend.playlists
    })
  }
})