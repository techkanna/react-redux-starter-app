import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { listItems } from '../actions/itemActions'
import Meta  from "../components/Meta";
import Item  from "../components/Item";

const HomeScreen = () => {
  const dispatch = useDispatch()

  const itemList = useSelector((state) => state.ItemList)
  const { loading, error, items } = itemList

  useEffect(() => {
    dispatch(listItems())
  }, [dispatch])

  return (
    <>
      <Meta />
      <h1>Home Screen</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <ul>            
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default HomeScreen
