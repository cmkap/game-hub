import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'a9042c2b871f400097c13a106bf0c7c6'
    }
})