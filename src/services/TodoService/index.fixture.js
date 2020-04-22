import usersResponse from "../../fixtures/getUsersResponse.json";

class UserFixtureService {
    getTodos() {
        return new Promise((resolve, reject) => {
            resolve(usersResponse);
        });
    }
}

export default UserFixtureService;
