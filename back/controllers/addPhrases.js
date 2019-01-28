const { isArray } = require('lodash')

const handleAddPhrases = knex => (req, res) => {
  let {
    newPhrases,
    translations,
    initialEaseFactor,
    firstRepetitionInterval
  } = req.body
  let response = {}
  if (!isArray(newPhrases) || !isArray(translations)) {
    res.status(400).json('Bad input type')
  } else if (newPhrases.length !== translations.length) {
    res
      .status(400)
      .json('Phrases and translations should have the same number of lines')
  } else {
    const next_repetition = new Date()
    next_repetition.setDate(next_repetition.getDate() + firstRepetitionInterval)
    const inputs = newPhrases.map((phrase, index) => {
      return {
        original: phrase,
        translation: translations[index],
        username: 'none',
        ease_factor: initialEaseFactor,
        next_repetition,
        number_of_repetition: 0
      }
    })
    knex
      .insert(inputs)
      .into('phrases')
      .then(data => {
        res.status(200).json('good')
      })
      .catch(err => {
        console.dir(err)
        res.status(500).json()
      })
  }
}

module.exports = { handleAddPhrases }
