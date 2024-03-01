import { memo } from 'react'
import usePeople from '../hooks/usePeople'
import { AddPerson } from './AddPerson'
import { PeopleList } from './PeopleList'
import classes from './PeopleManagement.module.css'

export const PeopleManagement = memo(() => {
  const { list, removePerson, addPerson } = usePeople()

  return (
    <div className={classes.root}>
      <PeopleList items={list} onItemClick={removePerson} />
      <AddPerson onAddPerson={addPerson} />
    </div>
  )
})
