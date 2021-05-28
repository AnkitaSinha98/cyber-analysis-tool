import http from "./http-common";
import httpb from "./http-browser";
import httpc from "./http-cloud";

class Scanservice {
  // https://www.virustotal.com/vtapi/v2/file/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&resource=854895261d51a8f3e91ab9c572b3ffcfa0ff6243dbfbe2dab652e1d0b15df663

  scanHashService(hash) {
    return http.get(
      `/file/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&resource=${hash}`
    );
  }

  // https://www.virustotal.com/vtapi/v2/ip-address/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&ip=192.168.100.3

  scanIPService(ipaddress) {
    return http.get(
      `/ip-address/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&ip=${ipaddress}`
    );
  }

  // https://www.virustotal.com/vtapi/v2/domain/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&domain=.com

  scanDomainService(domain) {
    return http.get(
      `/domain/report?apikey=a8b91d89b9ce8fbf22e71076e62927898c20c8569ce3b91a051ed8df179c18d4&domain=${domain}`
    );
  }
  //https://safebrowsing.googleapis.com/v4/threatMatches:find?key=API_KEY
  scanBrowsingService(address1) {
    return httpb.post(
      "/threatMatches:find?key=AIzaSyCYkU23Ptn3lLQEQJhCEgsDWQ9i10VWfWM",
      {
        client: {
          clientId: "vit",
          clientVersion: "1.5.2",
        },
        threatInfo: {
          threatTypes: [
            "MALWARE",
            "SOCIAL_ENGINEERING",
            "POTENTIALLY_HARMFUL_APPLICATION",
            "UNWANTED_SOFTWARE",
          ],
          platformTypes: [
            "WINDOWS",
            "OSX",
            "LINUX",
            "IOS",
            "ANDROID",
            "CHROME",
            "ALL_PLATFORMS",
            "ANY_PLATFORM",
          ],
          threatEntryTypes: ["URL", "IP_RANGE"],
          threatEntries: [{ url: `${address1}` }],
        },
      }
    );
  }

  scanCloudService(hostname) {
    return httpc.get(`/history/${hostname}/dns/a`);
  }
}

export default new Scanservice();
