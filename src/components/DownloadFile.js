import axios from 'axios';
const url = "http://localhost:3000/doc"
export const getDownloadFile = async () => {
    return axios.get(url + '/Daily_Sales_Revenue(2020.11.01--2020.11.30)_CIMS HOSPITAL - AHMEDABAD.csv', {
        responseType: 'blob',
    })
    .then(response => response.blob())
  }