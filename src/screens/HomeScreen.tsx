import React, { useCallback, useEffect, useState } from "react"
import { ActivityIndicator, Text, View } from "react-native"
import BeerList from "../components/BeerList"
import { useDispatch } from "react-redux"
import { selectElement } from "../redux/currentElementSlice"
import styles from "../styles"

const HomeScreen = () => {

  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentBeer, setCurrentBeer] = useState<number>(0)
  const dispatch = useDispatch()

  const onSelect = (beerId: number) => {
    setCurrentBeer(beerId - 1)
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.punkapi.com/v2/beers/')
        const result = await response.json()
        setBeers(result)
        setLoading(false)
      }
      catch (err) {
        console.log(err)
      }
    }

    fetchData()
      .catch(console.error);;
  }, [])

  // useEffect(() => {
  if (beers.length != 0) {
    const { id, name, description, image_url, food_pairing } = beers[currentBeer]

    dispatch(
      selectElement(
        { id, name, description, image_url, food_pairing })
    )
  }
  // }, [currentBeer])

  return (
    <>
      {!loading ? (
        <View style={styles.homeScreen}>
          <BeerList
            beers={beers}
            onSelect={onSelect}
            loading={loading}
          />
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </>
  )
}

export default HomeScreen