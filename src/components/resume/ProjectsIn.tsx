import {
    Text,
    View,
} from "@react-pdf/renderer"
import React from "react"

const ProjectsIn = (props) => {
    return (
        <>
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 5,
            }}>
                <Text style={{ fontSize: '12px' }}>Cargo Ship loading control board. <Text style={{fontWeight: 'bold', fontSize: "10px"}}>ASP.NET MVC, JavaScript, HTML/CSS, SQL</Text></Text>
            </View>
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 5,
            }}>
                <Text style={{ fontSize: '12px' }}>Artist multilanguage Blog. <Text style={{fontWeight: 'bold', fontSize: "10px"}}>Vue.js, SQL</Text></Text>
            </View>
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 5,
            }}>
                <Text style={{ fontSize: '12px' }}>Olympayn Guru Sport events.<Text style={{fontWeight: 'bold', fontSize: "10px"}}>Vue.js, GraphQL, Apollo.js, Vuex</Text></Text>
            </View>
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 5,
            }}>
                <Text style={{ fontSize: '12px' }}>Daiwo Web3 Token.<Text style={{fontWeight: 'bold', fontSize: "10px"}}> React.js, web3.js, ethers.js</Text></Text>
            </View>
            <View style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: 5,
            }}>
                <Text style={{ fontSize: '12px' }}>Web3 Finance. <Text style={{fontWeight: 'bold', fontSize: '10px'}}> React.js, web3.js, ethers.js, wagmi.sh, tailwindcss</Text></Text>
            </View></>
    )
}
export default ProjectsIn