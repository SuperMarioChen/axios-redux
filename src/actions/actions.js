

import axios from 'axios';

function getDataAction(data){
  return {
    type: 'getData',
    data: data
  }
}
// 获取数据
export function fetchData(params){
  return function (dispatch) {
    return axios(
      'https://www.easy-mock.com/mock/5b593e1b0629ac2a8ce31391/news/test',
      {
        params: params
      }
      //内部success 2. fulfilled（已成功） 失败（）3. rejected（已失败）
    )
      .then(({ data }) => {
        dispatch(getDataAction(data.data))
      })
      
  }
}


