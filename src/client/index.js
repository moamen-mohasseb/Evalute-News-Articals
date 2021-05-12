import { checkURL } from './js/checkURL'
import { handleSubmit } from './js/formHandler'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'
window.addEventListener('DOMContentLoaded',()=>{
const buttonSub = document.getElementById("submitBtn")
buttonSub.addEventListener('click',(event)=>{
    console.log("clicked")
  handleSubmit(event)  
})});
export {
    checkURL,
    handleSubmit
}
