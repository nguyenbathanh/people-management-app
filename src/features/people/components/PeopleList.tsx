import { memo } from 'react'
import { Person } from '../types'
import classes from './PeopleList.module.css'

type Props = {
  items: Person[]
  onItemClick: (id: string) => void
}

export const PeopleList = memo(({ items, onItemClick }: Props) => {
  return (
    <div className={classes.root}>
      {items.map((item) => (
        <div
          className={classes.personItem}
          key={item.id}
          onClick={() => onItemClick(item.id)}
        >
          {item.title}
        </div>
      ))}
    </div>
  )
})
