import axios from "axios"

export default axios.create({
    baseUrl:
        process.env.NODE_ENV == "production" ?
            "https://app.bestbefed.ca" :
            "http://localhost:8090"

})