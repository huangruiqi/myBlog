import request from '../utils/axios';
// import axios from 'axios';

const config = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: 'http://5bbdec0b8be32700139e34c2.mockapi.io'
}
//获取技术博客
export function queryTec() {
  return request('/tecBlog', config);
}
//获取生活博客
export function queryLife() {
  return request('/lifeBlog', config);
}
//获取个人介绍的技能
export function querySkills() {
  return request('/skills', config);
}
//获取个人介绍的画作
export function queryDrawers() {
  return request('/drawers', config);
}
//获取个人介绍的视频
export function queryVideos() {
  return request('/videos', config);
}
//获取个人介绍的奖项
export function queryAwards() {
  return request('/awards', config);
}