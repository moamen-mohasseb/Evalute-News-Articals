
// TODO include your scss file here
import { checkURL } from './js/checkURL'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
// TODO: get the button for submit
window.addEventListener('DOMContentLoaded',()=>{
const buttonSub = document.getElementById("submitBtn")
buttonSub.addEventListener('click',()=>{
    console.log("clicked")
  handleSubmit()  
})});
export {
    checkURL,
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
