import http from './http-common';

class Scanservice{

    // https://www.virustotal.com/vtapi/v2/file/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&resource=854895261d51a8f3e91ab9c572b3ffcfa0ff6243dbfbe2dab652e1d0b15df663

    scanHashService(hash){
        return http.get(`/file/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&resource=${hash}`);
    }

    
}

export default new Scanservice();