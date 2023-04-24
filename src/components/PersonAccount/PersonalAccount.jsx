import React from 'react'

const PersonalAccount = () => {
  const person = JSON.parse(localStorage.getItem('lawyer'))

  const handlePerson = () => {
    console.log(person.orders)
  }

  return (
    <div>
      <div>Юристттт: {person.lawyerName}</div>
      <div>Почта: {person.email}</div>
      <div>Номер телефона: {person.phoneNumber}</div>
      <div>
        Отклики:{' '}
        <ul>
          {person.orders.map((order) => {
            return <li>{order}</li>
          })}
        </ul>{' '}
      </div>
      <button onClick={handlePerson}></button>
    </div>
  )
}

export default PersonalAccount
