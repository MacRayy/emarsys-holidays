'use strict'

import test from 'tape'
import planHoliday from './app.js'

test('Test for creating destination plans', t => {
	t.deepEqual(planHoliday.createDestinations('X'), [{destination: 'X', rule: 'X'}])
	t.end()
})
