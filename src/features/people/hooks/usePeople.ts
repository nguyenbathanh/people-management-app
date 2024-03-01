import { faker } from '@faker-js/faker'
import { useState } from 'react'
import { Person } from '../types'

const generateRandomPerson = (): Person => ({
  id: faker.string.uuid(),
  title: faker.company.name()
})

const DEFAULT_PEOPLE: Person[] = Array.from({ length: 5 }, generateRandomPerson)

export default function usePeople() {
  const [list, setList] = useState<Person[]>(DEFAULT_PEOPLE)

  const addPerson = () => {
    setList((prev) => [...prev, generateRandomPerson()])
  }

  const removePerson = (personId: string) => {
    setList((prev) => prev.filter(({ id }) => id !== personId))
  }

  return {
    list,
    addPerson,
    removePerson
  }
}
