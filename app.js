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

	const createTravelRoute = (...destinations) => {
		const destinationsWithRules = createDestinations(...destinations)
		let route = ''

		destinationsWithRules.forEach(dest => {
			if (dest.destination === dest.travelThrough) {
				route += dest.destination
			}
		})

		return route
	}

	return {
		createDestinations,
		createTravelRoute
	}
})()

export default planHoliday
