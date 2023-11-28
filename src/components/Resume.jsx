import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font
} from "@react-pdf/renderer";
import Contact from "@/components/resume/Contact";
import Skills from "@/components/resume/Skills";
import Language from "@/components/resume/Language";
import Awards from "@/components/resume/Awards";
import Summary from "@/components/resume/Summary";
import Expirience from "@/components/resume/Expirience";
import Roboto from "@/assets/fonts/Roboto/Roboto-Regular.ttf";
import RobotoBold from "@/assets/fonts/Roboto/Roboto-Bold.ttf";
import RobotoItalic from "@/assets/fonts/Roboto/Roboto-Italic.ttf";
import RobotoBoldItalic from "@/assets/fonts/Roboto/Roboto-BoldItalic.ttf";
import Education from "./resume/Education";
import ProjectsIn from "./resume/ProjectsIn";
Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: Roboto,
    },
    {
      src: RobotoBold,
      fontWeight: 'bold',
    },
    {
      src: RobotoItalic,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
    {
      src: RobotoBoldItalic,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  ],
  format: 'truetype',
});

const styles = StyleSheet.create({
  page: {
    color: "black",
    columnCount: 2,
    padding: 15,
    fontFamily: 'Roboto',
  },
  leftColumn: {
    width: "40%",
    paddingTop: 10,
    color: "#F8FFFF",
    height: "100%",
    backgroundColor: "#002D57"
  },
  rightColumn: {
    width: "60%",
    height: "100%",
    right: 0,
    position: "absolute",
  },
  nameText: {
    fontSize: 26,
    marginLeft: 10,
  },
  nameTextSmall: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 10,
  },
  namePosition: {
    fontSize: 12,
    marginTop: 2,
    marginLeft: 11,
    paddingBottom: 10,
    borderBottom: '2px solid black',
  },
  nameTextExtraSmall: {
    fontSize: 10,
    marginTop: 2,
    lineHeight: 1.5,
  },
  iconStyle: {
    width: 10,
    marginRight: 5,
    height: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  wrapperContact: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  },
  skillProgressLeft: {
    height: 5,
    backgroundColor: "#477FB8",
  },
  skillProgressRight: {
    height: 5,
    backgroundColor: '#cbd0d1',
  },
  linkContact: {
    fontSize: 10,
    marginTop: 2,
    lineHeight: 1.5,
    color: '#F8FFFF',
    textDecoration: 'none',
  }
});
const Resume = () => {

  return (
    <>
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View>
              <View style={styles.leftColumn}>
                <Contact styles={styles} />
                <Skills styles={styles} />
                <Language styles={styles} />
                <Awards styles={styles} />
              </View>
              <View style={styles.rightColumn}>
                <View>
                  <Text style={[styles.nameText]}>Vlasiuk Andrii</Text>
                  <Text style={styles.namePosition}>Full-Stack Web Dev</Text>
                </View>
                <Summary styles={styles} />
                <Expirience styles={styles} />

              </View>

            </View>

            {/* <View style={styles.section}>
            <Text>Andrii Vlasiuk</Text>
          </View>
          <View style={styles.section}>
            <Text>Full Stack Web Dev</Text>
          </View>
          <View style={styles.section}>
            <Link src="www.linkedin.com/in/andrii-vlasiuk-web-dev">Linkedin</Link>
          </View> */}
          </Page>
          <Page size="A4" style={styles.page}>
            <View>
              <View style={[styles.leftColumn, { color: "#002D57" }]}>
                {/* <Awards styles={styles} /> */}
                <Text>   </Text>
              </View>
              <View style={styles.rightColumn}>
                <Education styles={styles} />
                <View>
                  <Text style={[styles.nameTextSmall, { marginTop: 10, marginBottom: 5, color: "#18315D", fontWeight: 600 }]}>PROJECTS</Text>
                </View>
                <ProjectsIn />
              </View>

            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>

  )
}
export default Resume