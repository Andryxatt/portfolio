import { View, Text } from '@react-pdf/renderer';
const Education = (props) => {
  return (

    <View style={{ fontFamily: 'Roboto' }}>
      <Text style={[props.styles.nameTextSmall, { marginTop: 10, marginBottom: 5, color: "#18315D", fontWeight: 600 }]}>EDUCATION</Text>
      <View style={{ flexDirection: "column", width: '100%' }}>
        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ color: "#0C0C0C", }}>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>ITStep Academy</Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Software Developer</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Technologies</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Oct 2016 - Oct 2019</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft: 5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize: '14px' }}>•</Text><Text>C, C++, C#</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft: 5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize: '14px'}}>•</Text>
            <Text>HTML/CSS</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft: 5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize: '14px' }}>•</Text>
            <Text>JavaScript</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft: 5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize: '14px' }}>•</Text>
            <Text>ASP.NET</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Education