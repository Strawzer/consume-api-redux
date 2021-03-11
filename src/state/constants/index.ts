const PATIENTS_URL = "https://dev.ekareinc.com/api/1.14/web/patients?clinic=1105&limit=25";

const API_PASS = "7c89ad287e0ba21d58647201dc8b3c69";
const API_KEY = "13e6b8b4168ed280993f3a6f167d983a";
const USER = "Akram21";
const CLINIC = "1100";



export const Request =  {
  url: PATIENTS_URL ,
  config : {
    headers : {
      api_pass: API_PASS,
      api_key: API_KEY,
      user: USER,
      clinic: CLINIC
    }
  }
};