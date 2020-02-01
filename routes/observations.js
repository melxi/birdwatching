const express = require('express')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './client/public/assets/images/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

// const uploadFilter = function(req, file, cb) {
//   //reject file
//   console.log(file.mimitype)
//   if (file.mimitype === 'image/jpeg' || file.mimitype === 'images/png') {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  }
})

const {
  getObservations,
  getObservation,
  createObservation
} = require('../controllers/observations')

const observationsRoute = express.Router()

observationsRoute
  .route('/')
  .get(getObservations)
  .post(upload.single('observationImage'), createObservation)

observationsRoute.route('/:id').get(getObservation)

module.exports = observationsRoute
