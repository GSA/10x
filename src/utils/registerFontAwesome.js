/** istanbul ignore file */
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

const registerAnalytics = () => {
  library.add(far, fas)
}

export default registerAnalytics
