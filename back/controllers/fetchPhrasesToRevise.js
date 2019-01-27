const { isArray } = require('lodash')

const handleFetchPhrasesToRevise = knex => (req, res) => {
  let { numberOfPhrases } = req.body
  let response = {}
  if (typeof numberOfPhrases !== 'number') {
    res.status(400).json('Bad input type')
  } else {
    knex
      .select('*')
      .from('phrases')
      .where('next_repetition', '<=', 'now()')
      .limit(numberOfPhrases)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        console.dir(err)
        res.status(500).json()
      })
  }
}

module.exports = { handleAddPhrases }
