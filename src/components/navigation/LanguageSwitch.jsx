import { LANGUAGES } from "../../constants/languages"
import { useTranslation } from "react-i18next"
const LanguageSwitch = () => {
    const { i18n } = useTranslation()
    const handleChange = (e) => {
        console.log(e)
        console.log(i18n.language)
        i18n.changeLanguage(e.target.value)
        localStorage.setItem('language', e.target.value)
    }
    return (
        <select className="select-custom language" onChange={(e)=>handleChange(e)}>
            {
              LANGUAGES.map((lang) => {
                return (
                    <option key={lang.code} selected={lang.isDefault} value={lang.code}>{lang.label}</option>
                )
              })    
            }
        </select>
    //     <Select
    //     components={{
    //         IndicatorSeparator: () => null
    //     }}
    //     styles={{
    //         control: (baseStyles) => ({
    //             ...baseStyles,
    //             border: 0,
    //             background: '#000',
    //             color: '#fff',
    //             fontSize: 1.2 + 'rem',
    //             outline: "none",
    //             fontWeight: 300,
    //             boxShadow: 'none',
    //             ':hover': {
    //                 border: 0,
    //             },
    //             cursor: 'pointer',
    //         }),
    //         dropdownIndicator: (baseStyles) => ({
    //             ...baseStyles,
    //             color: '#fff',
    //         }),
    //         menuList: (baseStyles) => ({
    //             ...baseStyles,
    //             background: '#000',
    //         }),
    //         //and selected value color 
    //         singleValue: (baseStyles) => ({
    //             ...baseStyles,
    //             color: '#fff',
    //             textAlign: 'center',
    //         }),
    //         option: (baseStyles) => ({
    //             ...baseStyles,
    //             color: '#fff',
    //             textAlign: 'center',
    //             cursor: 'pointer',
    //             background: '#000',
    //             ':hover': {
    //                 background: '#000',
    //                 color: '#fff',
    //             },
    //         }),
    //     }}
    //     isSearchable={false}
    //     defaultValue={
    //         LANGUAGES.find((lang) => lang.code === i18n.language)
    //     }
    //     classNames=""
    //     options={
    //         LANGUAGES.map((lang) => {
    //             return {
    //                 value: lang.code,
    //                 label: lang.label
    //             }
    //         })
    //     }
    //     onChange={(e) => handleChange(e)}
    // />
    )
}
export default LanguageSwitch