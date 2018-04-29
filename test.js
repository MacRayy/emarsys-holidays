'use strict'

import test from 'tape'
import planHoliday from './app.js'

test('Test for creating destination plans', t => {
	t.deepEqual(planHoliday.createDestinations('X'), [{destination: 'X', travelThrough: 'X'}])
	t.deepEqual(planHoliday.createDestinations('X', 'Y', 'Z'), [{destination: 'X', travelThrough: 'X'}, {destination: 'Y', travelThrough: 'Y'}, {destination: 'Z', travelThrough: 'Z'}])
	t.deepEqual(planHoliday.createDestinations('X', 'Y => Z', 'Z'), [{destination: 'X', travelThrough: 'X'}, {destination: 'Y', travelThrough: 'Z'}, {destination: 'Z', travelThrough: 'Z'}])
	t.deepEqual(planHoliday.createDestinations('U', 'V => W', 'W => Z', 'X => U', 'Y => V', 'Z'), [{destination: 'U', travelThrough: 'U'}, {destination: 'V', travelThrough: 'W'}, {destination: 'W', travelThrough: 'Z'}, {destination: 'X', travelThrough: 'U'}, {destination: 'Y', travelThrough: 'V'}, {destination: 'Z', travelThrough: 'Z'}])
	t.end()
})

test('Test for creating route with single input', t => {
	t.deepEqual(planHoliday.createTravelRoute('X'), 'X')
	t.end()
})

test('Test for creating route with multiple input', t => {
	t.deepEqual(planHoliday.createTravelRoute('X', 'Y', 'Z'), 'XYZ')
	t.end()
})
