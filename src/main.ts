import "./style.css"
import Experience from "./experience/Experience"

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
})

export { experience }
