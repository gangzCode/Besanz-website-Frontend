
import Data from './911.json'
import { BASE_URL } from '../../config'

const render911Template = () => {

    var renderString = '<div>'

    console.log(Data)
    for (let i = 0; i < Data.length; i++) {
        let item = Data[i]
        renderString += `  <h1>${item.title}  </h1>`
        for (const section of item.sections) {

            if(section.sectionName){
                renderString += ` <h2>${section.sectionName}</h2>`;
            }
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
                                       <h3>${list.h}</h3>
                                       <p>${list.text}</p>
                                     </li>`
                    }
                    renderString+='</ul> '
                }
                renderString+=` /<div>`
            }
        }


    }
    renderString += '</div>'
    return renderString;
}


export default render911Template

