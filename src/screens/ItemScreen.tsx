import React from "react"
import { View, Text, Image } from "react-native"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import styles from "../styles"

const ItemScreen = () => {

  const beer: Beer.Item = useSelector((state: RootState) => state.currentElement)

  return (
    <View style={{ flex: 1, backgroundColor: '#BFC8AD' }}>
      <View style={styles.flexColumn}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              style={{ width: 80, height: 240 }}
              source={{ uri: beer.image_url }} />
          </View>
          <View style={styles.flexColumn}>
            <View style={[styles.flexRow, { width: 250 }]}>
              <Text style={styles.beerName}>
                {beer.name}
              </Text>
            </View>
            <View style={styles.foodView}>
              <Text style={styles.foodPairing}>
                Food pairing:
              </Text>
              <View style={{ flexDirection: 'column' }}>
                {beer.food_pairing.map((el, index) => (
                  <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={require('../../assets/arrow.png')}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ color: 'black' }}>
                      {el}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={styles.descName}>
            Description:
          </Text>
          <Text style={styles.descText}>
            {beer.description}
          </Text>
        </View>
      </View>
    </View >
  )
}

export default ItemScreen