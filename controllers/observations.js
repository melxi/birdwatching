const Observation = require('../models/Observation')

//@route GET /api/observation
//@desc get all observations
//@access public
exports.getObservations = async (req, res, next) => {
  try {
    const observations = await Observation.find()
    res.status(200).json(observations)
  } catch (err) {
    next(err)
    res.status(500).json({ error: 'Server error' })
  }
}

//@route GET /api/observation/:id
//@desc get observation by id
//@access public
exports.getObservation = async (req, res, next) => {
  try {
    const observation = await Observation.findById(req.params.id)
    res.status(200).json(observation)
  } catch (err) {
    next(err)
    res.status(500).json({ error: 'Server error' })
  }
}

//@route POST /api/observations
//@desc add a observation
//@access public
exports.createObservation = async (req, res, next) => {
  try {
    const observation = await new Observation({
      name: req.body.name,
      rarity: req.body.rarity,
      notes: req.body.notes,
      observationImage: req.file ? req.file.filename : 'default.jpg'
    })

    await observation.save()
    res.status(201).json(observation)
  } catch (err) {
    next(err)
  }
}
