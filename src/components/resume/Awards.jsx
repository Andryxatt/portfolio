import {
    Text,
    View,
} from "@react-pdf/renderer"

const Awards = (props) => {
    return (
        <View style={{marginTop:15}}>
        <Text style={[props.styles.nameTextSmall, {marginBottom:5}]}>AWARDS:</Text>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 5,
        }}>
          <Text style={{fontSize:'12px', color: "#477FB8"}}>StFalcon Academy</Text>
          <Text style={props.styles.nameTextExtraSmall}>Certification Angular</Text>
        </View>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 5,
        }}>
          <Text style={{fontSize:'12px', color: "#477FB8"}}>CyberBionic Systematics</Text>
          <Text style={props.styles.nameTextExtraSmall}>TetProvider certification JavaScript Advanced ID: T5P1J527601 - 2015-09-01</Text>
        </View>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 5,
        }}>
          <Text style={{fontSize:'12px', color: "#477FB8"}}>CyberBionic Systematics</Text>
          <Text style={props.styles.nameTextExtraSmall}>TetProvider certification HTML, CSS                         ID: T4P11H423271 - 2014-11-16</Text>
        </View>
        <View style={{
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 5,
        }}>
          <Text style={{fontSize:'12px', color: "#477FB8"}}>CyberBionic Systematics</Text>
          <Text style={props.styles.nameTextExtraSmall}>TetProvider certification JavaScript Essential ID: T4P12J625371 - 2014-12-04</Text>
        </View>
      </View>
    )
}
export default Awards