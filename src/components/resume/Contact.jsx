import {
    Text,
    View,
    Image,
    Link
} from "@react-pdf/renderer"

import gitHubIcon from './../../assets/icons-github.png'
import linkedInIcon from './../../assets/icons-linkedin.png'
import locationIcon from './../../assets/icons-location.png'
import phoneIcon from './../../assets/icons-phone.png'
import emailIcon from './../../assets/icons-emai.png'
const Contact = (props) => {
    return (
            <View>
                <Text style={[props.styles.nameTextSmall,{marginBottom:5}]}>CONTACT</Text>
                <View style={props.styles.wrapperContact}>
                    <Image style={props.styles.iconStyle} src={emailIcon} />  <Text style={props.styles.nameTextExtraSmall}>vlasandrey878@gmail.com</Text>
                </View>
                <View style={props.styles.wrapperContact}>
                    <Image style={props.styles.iconStyle} src={phoneIcon} /> <Text style={props.styles.nameTextExtraSmall}>+380930169925</Text>
                </View>
                <View style={props.styles.wrapperContact}>
                    <Image style={props.styles.iconStyle} src={gitHubIcon} /> <Link src="https://github.com/Andryxatt" style={props.styles.linkContact}>Andryxatt</Link>
                </View>
                <View style={props.styles.wrapperContact}>
                    <Image style={props.styles.iconStyle} src={linkedInIcon} /> <Link src="www.linkedin.com/in/andrii-vlasiuk-web-dev" style={props.styles.linkContact}>andrii-vlasiuk-web-dev</Link>
                </View>
                <View style={props.styles.wrapperContact}>
                    <Image style={props.styles.iconStyle} src={locationIcon} />  <Text style={props.styles.nameTextExtraSmall}>Ukraine, Khmelnitsky, UA</Text>
                </View>
            </View>
    )
}
export default Contact