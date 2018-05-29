import axios from 'axios'
const host = 'http://140.143.228.212'

const fetchList = (page) => {
  return axios.get('http://140.143.228.212/api/documents',{
    parmas:{
      current_page:page
    }
  })
}
const fetchDetail = (urlparmas) => {
  return axios.get('http://140.143.228.212/api/documents/' + urlparmas)
}
const fetchComments = (page) => {
  return axios.get('http://140.143.228.212/api/comments', {
    params: {
      commentable_type: 'Document',
      commentable_id: 1,
      current_page: page
    }
  })
}
const saveComments = (content) => {
  return axios.post('http://140.143.228.212/api/comments', {
    commentable_type: 'Document',
    commentable_id: 1,
    content: content,
    pid:0
  })
}

export default {fetchList, fetchDetail, fetchComments, saveComments}

