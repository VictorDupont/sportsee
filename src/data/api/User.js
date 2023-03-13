class User {

    /**
     * @param {object} data
     * @property {number} id
     * @property {object} userInfos
     * @property {string} userInfos.firstname
     * @property {string} userInfos.lastname
     * @property {number} userInfos.age
     * @property {number} todayScore
     * @property {object} keyData
     * @property {number} keyData.calorieCount
     * @property {number} keyData.proteinCount
     * @property {number} keyData.carbohydrateCount
     * @property {number} keyData.lipidCount
     * @constructor
     */
    constructor(data) {
        this._id = data.id;
        this._userInfos = data.userInfos;
        this._todayScore = data.todayScore || data.score;
        this._keyData = data.keyData;
    }

    /**
     * Get the user id
     * @returns {number}
     */
    get id() {
        return this._id;
    }

    /**
     * Get the user infos
     * @returns {object}
     * @property {string} firstname
     * @property {string} lastname
     * @property {number} age
     */
    get userInfos() {
        return this._userInfos;
    }

    /**
     * Get the user score for today
     * @returns {number}
     */
    get todayScore() {
        return this._todayScore;
    }

    /**
     * Get the user key data
     * @returns {object}
     * @property {number} calorieCount
     * @property {number} proteinCount
     * @property {number} carbohydrateCount
     * @property {number} lipidCount
     */
    get keyData() {
        return this._keyData;
    }
}

export default User;