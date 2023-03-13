import User from "../data/api/User";

/**
 * @param {Object} data
 * @param {string} type
 * @returns {User}
 */
class UserFactory {
    constructor(data, type) {
        if(type === "API") {
            return new User(data);
        }
        if(type === "JSON") {
            return new User(data);
        }
    }
}

export default UserFactory;