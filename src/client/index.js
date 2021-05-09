
// TODO include your scss file here
import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
// TODO: get the button for submit
const button = document.getElementById("submit")
button.addEventListener('click',()=>{
    
})
export {
    checkForName,
    handleSubmit
}
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO
 *  - Get Value of the input for URL
 *  - Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
