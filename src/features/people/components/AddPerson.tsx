import { memo } from 'react'
import classes from './AddPerson.module.css'

type Props = {
  onAddPerson: () => void
}

export const AddPerson = memo(({ onAddPerson }: Props) => {
  return (
    <button className={classes.addPersonBtn} onClick={onAddPerson}>
      add new person
    </button>
  )
})
