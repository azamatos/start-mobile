import React, { Ref, useCallback } from 'react'
import { FlatList, ListRenderItem } from 'react-native'
import BeerItem from './Item'

interface Props {
  beers: Beer.Item[]
  onSelect: (beerId: number) => void
  loading: boolean
}

const BeerList = ({ beers, onSelect, loading }: Props) => {

  const renderItem: ListRenderItem<Beer.Item> = useCallback(({ item }) => {

    return (
      <BeerItem
        data={item}
        onSelect={onSelect}
      />
    )
  }, [])

  return (
    <FlatList
      keyExtractor={(item, index) => `${item.id}${index}`}
      data={beers}
      renderItem={renderItem}
      // refreshing={isListRefreshing}
      // onRefresh={onRefresh}
      contentContainerStyle={{
        paddingBottom: 120,
      }}
      // py={3}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default BeerList
