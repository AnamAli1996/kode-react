import axios from "axios";

export default {
    user: {

        login: credentials => {
            console.log(credentials);
            var credentialsString = credentials;
            console.log(credentialsString.email);
            var apiUrl = "http://localhost:8080/api/demoStudents/login?email=" + credentials.email + "&password=" + credentials.password;
            console.log(apiUrl,credentials);
            return axios.post(apiUrl).then(res => res.data.user,
            console.log("logged in")
        );
        }





    }

}