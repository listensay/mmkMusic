import musicRequest from './index'

export function fetchGetBanners(type = 1) {
  return musicRequest.get('/banner', { type })
}

export function fetchGetHotRank(id) {
  return musicRequest.get('/playlist/detail', {
    id
  })
}

export function fetchGetCategorys() {
  return musicRequest.get('/playlist/hot')
}

export function fetchGetPlaylist() {
  return musicRequest.get('/top/playlist', {
    limit
  })
}

export function fetchGetSongMenu(cat = '全部', limit = 6, offset = 0) {
  return musicRequest.get('/top/playlist', {
    cat,
    limit,
    offset
  })
}