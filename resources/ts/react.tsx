import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./Controllers/Home/Home"

const elements: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName("react-handler") as HTMLCollectionOf<HTMLElement>

for (let i = 0; i < elements.length; i++) {

    const comp = elements.item(i).dataset["component"]
    const config = JSON.parse(atob(elements.item(i).dataset["config"]))

    if (comp === "Home") {
        ReactDOM.createRoot(elements.item(i)).render(<Home {...config} />)
    }
}

