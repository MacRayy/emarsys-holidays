'use strict'

const planHoliday = (function () {
	const createDestinations = (...dests) => {
		let destinations = []

		dests.forEach(dest => {
			destinations.push({
				destination: dest,
				rule: dest
			})
		})
		return destinations
	}

	return {
		createDestinations
	}
})()

export default planHoliday
