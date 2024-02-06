import React from 'react'
import Card from '../../components/Card'
import Main from '../../components/Main'
import { merch } from '../../App'
export default function Home() {
  return (
    <div>
          <Main />
          <div className='grid-cont'>
            {
              merch.map((obj) =>
                <Card key={obj.id} id={obj.id} title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />)
            }
          </div>
        </div>
  )
}
