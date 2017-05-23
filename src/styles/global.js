export const PRIMARY_COLOR = '#F30'
export const PRIMARY_TEXT_COLOR = '#2F9A9E'
export const ACTIVE_COLOR = '#F30'

export const COMMON = {
  container: {
    flex:1,
    position: 'relative',
  },
  centerView: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
    fontSize:27,
    paddingHorizontal:11,
    letterSpacing:1.5
  },
  bottomSection: {
    paddingBottom:60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#f30',
    paddingVertical:13,
    paddingHorizontal:11,
    width:65,
    height:65,
    borderRadius: 65
  },
  icon: {
    textAlign:'center',
    color:'white',
    fontSize:37
  },
  blackOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal:20,
    position:'absolute',
    bottom:0,
    left:0,
    width:'100%',
    height:150
  },
  contactList: {
    flex:1,
    borderBottomWidth:0.5,
    borderColor:'#ccc',
  },
  companyList: {
    flex:1,
  },
  person: {
    marginTop:12,
    maxWidth:150,
    marginRight: 15
  }

}
