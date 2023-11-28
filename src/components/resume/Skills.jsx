
import {
    Text,
    View,
} from "@react-pdf/renderer"

const Skills = (props) => {
    return (
         <View style={{marginTop:15}}>
                  <Text style={[props.styles.nameTextSmall, {marginBottom:5}]}>SKILLS</Text>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>React JS</Text>
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
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>React/Redux</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '55%',

                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '45%',

                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>HTML/CSS</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '90%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '10%',

                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>JavaScript</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '65%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '35%',
                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>Nest.js</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '40%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '60%',
                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>ethers.js</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '55%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '45%',
                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>Vue.js</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '30%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '70%',
                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>SQL</Text>
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
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>C#</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '50%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '50%',
                      }]}></Text>
                    </View>
                  </View>
                  <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                    <Text style={props.styles.nameTextExtraSmall}>ASP.NET</Text>
                    <View style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'nowrap',
                    }}>
                      <Text style={[props.styles.skillProgressLeft, {
                        width: '70%',
                      }]}></Text>
                      <Text style={[props.styles.skillProgressRight, {
                        width: '30%',
                      }]}></Text>
                    </View>
                  </View>

                </View>
    )
}
export default Skills