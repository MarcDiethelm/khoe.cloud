require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mailchimp = require('./mailchimp')
const app = express()

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res, next) => {
	res.send('API root')
}).post('/news/signup', (req, res, next) => {
	if (req.body.isSpam) return res.end()

	mailchimp
		.memberSubscribe(req.body.email, req.ip)
		.then(results => {
			res.json({ success: true })
		})
		.catch(err => {
			res.status(500).json({ success: false, detail: err.detail })
		})
})

// export the server middleware
module.exports = {
	path: '/api',
	handler: app
}
