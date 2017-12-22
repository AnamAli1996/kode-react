import axios from "axios";

export function userSignupRequest(userData){
    return dispatch => {
        var apiUrl = "http://localhost:8080/api/" + userData.accountType + "/add?" +
            "firstName=" + userData.firstName + "&lastName="+ userData.lastName +
            "&email=" + userData.email +  "&password=" + userData.password + "&age=" + userData.age;
        console.log(apiUrl);
       return axios.post(apiUrl);
    }

}