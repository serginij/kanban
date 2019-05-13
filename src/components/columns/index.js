import React from 'react'

import { Column } from './column'

const testColumns = ['First', 'Second']

export const Columns = () => {
  const columns = testColumns.map((column, index) => (
    <Column name={column} key={index} />
  ))
  return (
    <section>
      {columns}
      <article>
        <input type="text" placeholder="Введите название колонки" />
        <button>Добавить колонку</button>
      </article>
    </section>
  )
}
