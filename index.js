require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

morgan.token('data', function getData (request) {
    return JSON.stringify(request.body)
})
const app = express()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
    { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
    },
    { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
    },
    { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
    },
    { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
    }
]

app.get('/info', (request, response) => {
    response.send((
        `
        <p>Phonebook as has info for ${persons.length} people</p>
        <p>${new Date()}</p>
        `
    ))
})
app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => response.json(persons))
})
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    
    if (person){
        response.json(person)
    }
    else {
        response.status(404).end()
    }
})
app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})
app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error:'name is missing'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error:'number is missing'
        })
    }

    const person = new Person({
        name: body.name,
        number: body.number
    })

    person.save().then(result => {
        response.json(person)
    })
})
app.put('/api/persons/:id', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error:'name is missing'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error:'number is missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, {new: true})
        .then(updatedPerson => {
            response.json(person)
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } 
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})