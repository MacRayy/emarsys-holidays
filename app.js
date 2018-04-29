'use strict'

const planHoliday = (function () {
	const createDestinations = (...dests) => {
		let destinations = []

		dests.forEach(dest => {
			if (dest.length > 1) {
				let destWithRule = dest.split(' ').filter(el => el !== '=>')
				destinations.push({
					destination: destWithRule[0],
					travelThrough: destWithRule[1]
				})
			} else {
				destinations.push({
					destination: dest,
					travelThrough: dest
				})
			}
		})
		return destinations
	}

	return {
		createDestinations
	}
})()

export default planHoliday
