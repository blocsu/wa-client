import { $axios } from '../../api'

import { WORKOUTS } from './workout.service'

const LOG = `${WORKOUTS}/log`

class WorkoutLogService {
	async getById(id) {
		return $axios.get(`${LOG}/${id}`)
	}
	//name, times, iconPath
	async create(workoutId) {
		return $axios.post(`${LOG}/workoutId`)
	}

	// "isCompleted": true
	async complete(id) {
		return $axios.patch(`${LOG}/complete/${id}`)
	}
}

export default new WorkoutLogService()
