import Mock from 'mockjs'
Mock.mock('/api/user/login', 'post', {
  'code': 200,
  'data': {
    'id': 0,
    'userName': 'name',
    'phone': '18706711564'
  }
})
