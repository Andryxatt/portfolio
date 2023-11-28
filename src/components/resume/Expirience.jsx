import { View, Text } from "@react-pdf/renderer"
const Expirience = (props) => {
  return (
    <View>
      <Text style={[props.styles.nameTextSmall, { marginTop: 10, marginBottom:5, color:"#18315D", fontWeight: 700 }]}>EXPERIENCE</Text>
      <View style={{ flexDirection: "column", width: '100%' }}>
        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{color: "#0C0C0C", }}>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Frontend Developer</Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Web3Finance, Ukraine</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Responsibilities</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Aug 2022 - Jun 2023</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Writing functionality for sending ERC20 Token to multiple accounts in one transaction.  </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Connect wallet integration with wagmi.sh</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Getting history of transactions</Text>
          </View>
        </View>
        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Frontend Developer</Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Daiwo, Ukraine</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Responsibilities</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Mar 2022 - Jul 2022</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Integration WalletConnect to React App</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Working with Charts of token price changes</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Selling and buying tokens for native currency</Text>
          </View>
        </View>
        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Frontend Developer </Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>OlympianGuru, Canada</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Responsibilities</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Sep 2021 - Jan 2022</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Fixed bugs and created new functionality using Vue.js</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Working with GraphQL and utilizing Apollo.js and Vuex to execute queries store data effectively</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Added functionality to manage cordinats on map</Text>
          </View>
        </View>
        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Full-Stack .NET developer </Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Comtainer Ltd, Israel</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Responsibilities</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Sep 2020 - Aug 2021</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Building a custom control panel for a cargo company using HTML/CSS, JavaScript, JQuery</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Performing bug fixes and code rewiews</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Working with Google API</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text>
            <Text>Developing entity models and controllers using ASP.NET</Text>
          </View>
        </View>

        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Frontend Developer</Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Galaxy IT, Ukraine</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Responsibilities</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Apr 2020 - Jun 2020</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Development of a blog for an artist, using Vue.js</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Adding multilingual and administrative panel to manage the blog.</Text>
          </View>
        </View>
        <View>
          <View style={{ marginLeft: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Frontend Developer</Text>
              <Text style={{ fontSize: 10, fontWeight: "600" }}>Freelance</Text>
              <Text style={{ fontSize: 10, fontStyle: 'italic', fontWeight: "600" }}>Key Responsibilities</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: "#477F91" }}>Jan 2020 - Apr 2020</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, marginLeft:5, fontSize: 10 }}>
            <Text style={{ marginHorizontal: 8, fontSize:"14px" }}>•</Text><Text>Specialized in creating UI and functional layouts with HTML/CSS</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Expirience