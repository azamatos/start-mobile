import {
  Dimensions, Platform, StatusBar, StyleSheet,
} from 'react-native'

const screenDimensions = Dimensions.get('screen')

const styles = StyleSheet.create({
  welcomeLogo: {
    width: '70%',
    height: undefined,
    aspectRatio: 1997 / 1136,
  },
  welcomeCorona: {
    width: '35%',
    height: undefined,
    aspectRatio: 1558 / 1468,
  },
  loginFormWrapper: {
    width: screenDimensions.width * 0.7,
  },
  otpInput: {
    width: 35,
    height: 40,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    borderWidth: 2,
    padding: 0,
    textAlignVertical: 'center',
    borderColor: '#1AC1FB10',
    backgroundColor: '#1AC1FB10',
    borderRadius: 4,
    color: '#344444',
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  navigatorContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  navigatorBottomFill: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
  },
  floatingButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  newOrderTabContentWrapper: {
    alignItems: 'center',
  },
})

export const dimension = {
  width: screenDimensions.width,
  height: screenDimensions.height,
}

export default styles
