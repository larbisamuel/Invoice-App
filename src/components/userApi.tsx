import { User } from "./User";

export interface staffInfo {
    staff_id: string;
}

const baseUrl = "http://localhost:3000";
const userloginUrl = `${baseUrl}/api/auth/login`;
// const token = localStorage.getItem('token');

function translateStatuseTOErrorMessage(status: number) {
    switch (status) {
      case 401:
        return "Please login again.";
      case 403:
        return "You do not have permission to view the projects(s).";
      default:
        return "There was an error retrieving the project(s). Please try again.";
    }
  }



const userApi = {
    async loginUser(user_id: staffInfo): Promise<User> {
        return await fetch(userloginUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_id)
        }).then(async (response) => {
            if (response.ok) {
                const jsonResponse = await response.json();
                localStorage.setItem('token', jsonResponse.token);
                return {
                    'data': jsonResponse.data, 
                    'token': jsonResponse.token
                }
            }
            else{
                const httpErrorInfo = {
                    status: response.status,
                    statusText: response.statusText,
                    url: response.url,
                  };
                  console.log(`logserver http error ${JSON.stringify(httpErrorInfo)}`)
          
                  const errorMessage = translateStatuseTOErrorMessage(httpErrorInfo.status)
                  throw new Error(errorMessage);
            }
    })
    },
}


export default userApi;