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
		let route = []

		destinationsWithRules.forEach(dest => {
			if (!route.includes(dest.destination)) {
				if (dest.destination === dest.travelThrough) {
					route.push(dest.destination)
				} else {
					route.push(dest.travelThrough)
					route.push(dest.destination)
				}
			}
		})

		console.log(route.join(''))

		return route.join('')
	}

	return {
		createDestinations,
		createTravelRoute
	}
})()

planHoliday.createTravelRoute('X', 'Y => Z', 'Z')

export default planHoliday
