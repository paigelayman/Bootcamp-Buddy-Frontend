import Client from './api'
import axios from 'axios'

export const GetBootcampList = async () => {
  try {
    let response = await axios.get(
      'https://bootcamp-buddy-backend.herokuapp.com/api/bootcamps'
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const GetBoomcampDetail = async (bootcampId) => {
  try {
    let response = await axios.get(
      `https://bootcamp-buddy-backend.herokuapp.com/api/bootcamps/${bootcampId}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
