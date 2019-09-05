import colors from '../constants/Colors';

export default {
  welcomeContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  piccyStyle: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.navyblue,
  },
  textStyle: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.green,
  },
  wrapper: {
    backgroundColor: colors.navyblue,
    color: colors.white,
    padding: 10,
    margin: 10,
    height: 50,
    width: 300,
    borderRadius: 15,
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  smallButton: {
    backgroundColor: colors.navyblue,
    color: colors.white,
    height: 35,
    width: 120,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    alignContent: 'center',
  },
};
