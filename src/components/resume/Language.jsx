import {
    Text,
    View,
} from "@react-pdf/renderer"

const Language = (props) => {
    return (
        <View style={{marginTop:15}}>
        <Text style={[props.styles.nameTextSmall, {marginBottom:5}]}>LANGUAGES:</Text>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}>
          <Text style={props.styles.nameTextExtraSmall}>Ukrainian</Text>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}>
            <Text style={[props.styles.skillProgressLeft, {
              width: '99%',

            }]}></Text>
            <Text style={[props.styles.skillProgressRight, {
              width: '2%',

            }]}></Text>
          </View>
        </View>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
        }}>
          <Text style={props.styles.nameTextExtraSmall}>English</Text>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
          }}>
            <Text style={[props.styles.skillProgressLeft, {
              width: '60%',

            }]}></Text>
            <Text style={[props.styles.skillProgressRight, {
              width: '40%',

            }]}></Text>
          </View>
        </View>
      </View>
    )
        }
export default Language