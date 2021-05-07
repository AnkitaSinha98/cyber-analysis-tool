import axios from 'axios';

export default axios.create({

    APIKEY : "a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4", 
    baseURL : "https://www.virustotal.com/vtapi/v2",
    headers: {
        "Content-type":"application/json",
        }
})




