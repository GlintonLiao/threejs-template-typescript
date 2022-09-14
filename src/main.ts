import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'
import Experience from './experience/Experience'

const experience = new Experience({
  targetElement: document.querySelector<HTMLDivElement>('.experience')
})
