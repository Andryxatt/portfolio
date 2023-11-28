import { View, Text } from "@react-pdf/renderer"
// import React from "react"

const Summary = () => {
    return (
        <View style={{marginRight:15, marginLeft:10}}>
        <Text style={[{ fontSize:12, marginTop: 10, marginBottom:5, color: "#002D57", fontWeight: 'bold' }]}>SUMMARY</Text>
        <View style={{ flexDirection: "column", width: '100%' }}>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, fontSize:10 }}>
            <Text>                    As a Full Stack Developer with two years of experience, I have honed my skills in various technologies including ReactJS, NestJS, SQL, HTML/CSS, and JavaScript. I possess a deep understanding of the development process, from frontend design to backend implementation, allowing me to create robust and efficient web applications.</Text>
          </View>
          {/* <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, fontSize:10 }}>
            <Text style={{ marginHorizontal: 8 }}>•</Text>
            <Text>In my role as a Full Stack Developer, I have leveraged ReactJS to build dynamic and interactive user interfaces, providing seamless user experiences. I am proficient in developing reusable components, managing state, and integrating APIs for data retrieval and manipulation.</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, fontSize:10 }}>
            <Text style={{ marginHorizontal: 8 }}>•</Text>
            <Text>With NestJS, I have developed scalable and efficient server-side applications. I am experienced in designing and implementing RESTful APIs, handling authentication and authorization, and working with databases using SQL.</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 2, marginTop: 2, fontSize:10 }}>
            <Text style={{ marginHorizontal: 8 }}>•</Text>
            <Text>My proficiency in HTML/CSS and JavaScript enables me to create visually appealing and responsive web designs. I have a strong understanding of web standards and best practices, ensuring cross-browser compatibility and accessibility.</Text>
          </View> */}
        </View>
      </View>
    )
}
export default Summary