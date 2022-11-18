import Client from './api'
import axios from 'axios'

export const JoinBootcamp = async (bootcampId) => {
  try {
    const res = await Client.post(`/api//userbootcamps/${bootcampId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUserBootcamp = async (userId) => {
  try {
    let response = await axios.get(
      `https://bootcamp-buddy-backend.herokuapp.com/api/userbootcamps/${userId}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const LeaveBootcamp = async (bootcampId) => {
  try {
    const res = await Client.delete(`/api//userbootcamps/${bootcampId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
