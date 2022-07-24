import {
  Dimensions, StyleSheet,
} from 'react-native'

const screenDimensions = Dimensions.get('screen')

const styles = StyleSheet.create({

  flexColumn: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center'
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  descName: {
    fontSize: 20,
    fontWeight: '700',
    margin: 5,
    color: 'black'
  },
  descText: {
    fontSize: 16,
    margin: 5,
    textAlign: 'justify',
    color: 'black'
  },
  foodPairing: {
    fontSize: 18,
    fontWeight: '500',
    padding: 10,
    color: 'black'
  },
  beerItem: {
    margin: 10,
    flex: 1,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemName: {
    color: '#000',
    width: 200,
    fontSize: 18
  },
  beerName: {
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    textAlign: 'center'
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFC8AD'
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foodView: {
    flexDirection: 'column',
    marginTop: 20,
    width: 200
  }

})

export const dimension = {
  width: screenDimensions.width,
  height: screenDimensions.height,
}

export default styles
