import Client from './api'
import axios from 'axios'

export const GetUser = async (userId) => {
  try {
    let response = await axios.get(
      `https://bootcamp-buddy-backend.herokuapp.com/api/users/${userId}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
