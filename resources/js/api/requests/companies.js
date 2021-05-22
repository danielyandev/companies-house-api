import axios from "axios";

export async function search(q, items_per_page = 20, start_index = 0){
    return await axios.post('/api/companies/search', {q, items_per_page, start_index})
}
