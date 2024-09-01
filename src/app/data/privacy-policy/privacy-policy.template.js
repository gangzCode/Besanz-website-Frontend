
import {privacyData as Data }from './privacy-policy'
import { BASE_URL } from '../../config'

const renderPrivacyPolicyTemplate = () => {

    var renderString = '<div>'

    // /console.log(Data)
    for (let i = 0; i < Data.length; i++) {
        let item = Data[i]
        renderString += `  <h2> ${item.title}  </h2>`
        for (const section of item.sections) {
           
            if (section.p && section.p.length>0) {
                for (const p of section.p) {
                    renderString += `<p>${p.replace("insert_terms_and_condition_link",`<a style="color:#82c7e6;" href="${BASE_URL}/terms-and-condition">Terms and Condition</a>`)}</p>`
                }
            }
            if (section.bullets && section.bullets[0]) {
                // console.log("section.bullets.list=======", section.bullets[0].desc)
                if(section.bullets[0].desc){
                    renderString+=` <div>
                    <p>${section.bullets[0].desc.replace("insert_terms_and_condition_link",`<a style="color:#82c7e6;" href="${BASE_URL}/terms-and-condition">Terms and Condition</a>`)}</p>
                    `

                }
                if(section.bullets[0].list){
                renderString+=`<ul>`
                    for (const list of section.bullets[0].list) {
                        renderString += ` <li>
                                
                                  
                    <p>${list.text.replace("www.Besanz.com",`<a style="color:#82c7e6;"  href="https://www.besanz.com">www.Besanz.com</a>`)}</p>

                                     </li>`
                    }
                    renderString+='</ul> '
                }
                renderString+=`</div>`
            }
        }


    }
    renderString += '</div>'
    return renderString;
}


export default renderPrivacyPolicyTemplate

