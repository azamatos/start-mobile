import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import styles from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

interface Props {
  data: Beer.Item
  onSelect: (beerId: number) => void
}

const BeerItem = ({ data, onSelect }: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<ItemStack>>()

  const { id } = useSelector((state: RootState) => state.currentElement)

  const onClicking = () => {
    onSelect(data.id)
    navigation.navigate('Item')
  }

  return (
    <Pressable
      onPress={onClicking}
    >
      <View style={styles.beerItem}>
        <View
          style={{ width: 100 }}
        >
          <Image
            style={{ width: 30, height: 90 }}
            source={{ uri: data.image_url }}
          />
        </View>
        <Text style={styles.itemName}>
          {data.name}
        </Text>
        <View style={{}}>
          {
            data.id === id &&
            (
              <Image
                style={{ width: 30, height: 30 }}
                source={require('../../../assets/checklist.png')}
              />
            )
          }
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, borderColor: 'gray' }} />
    </Pressable >
  )
}

export default BeerItem
