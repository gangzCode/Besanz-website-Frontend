
import Data from './terms-and-condition.json'
import { BASE_URL } from '../../config'

const renderTermsAndConditionTemplate = () => {

    var renderString = '<div>'

    console.log(Data)
    for (let i = 0; i < Data.length; i++) {
        let item = Data[i]
        renderString += `  <h2>  ${item.titleNo} ${item.title}  </h2>`
        for (const section of item.sections) {
            renderString += ` <h5>
                    ${section.sectionNo} ${section.sectionName}
                </h5>`;
            if (section.p) {
                for (const p of section.p) {
                    renderString += `<p>${p.replace("insert_privacy_policy_link",`<a style="color:#82c7e6;" href="${BASE_URL}/privacy-policy">Privacy Policy</a>`)}</p>`
                }
            }
            if (section.bullets && section.bullets[0]) {
                renderString+=` <div>
                <p>${ section.bullets[0].desc && section.bullets[0].desc.replace("insert_terms_and_condition_link",`<a style="color:#82c7e6;" href="${BASE_URL}/privacy-policy">Privacy Policy</a>`)}</p>
                `
                if(section.bullets[0].list){
                renderString+=`<ul>`
                    for (const list of section.bullets[0].list) {
                        renderString += ` <li>
                                       <h5>${list.h}</h5>
                                       <p>${list.text}</p>
                                     </li>`
                    }
                    renderString+='</ul> '
                }
                renderString+=` <div>`
            }
        }


    }
    renderString += '</div>'
    return renderString;
}


export default renderTermsAndConditionTemplate

