import musicRequest from "./index";

export function fetchGetMvList(offset = 0, limit = 20) {
  return musicRequest.get('/top/mv', {
    offset,
    limit
  })
}