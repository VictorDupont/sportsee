class Activity {
    /**
     * @param {Object} data
     * @param {string} data.userId
     * @param {Array} data.sessions
     * @param {string} data.sessions.day
     * @param {number} data.sessions.kilogram
     * @param {number} data.sessions.calories
     * @param {number} data.sessions.index
     */
    constructor(data) {
        this._userId = data.userId;
        this._sessions = data.sessions;
    }

    /**
     * @returns {string}
     */
    get userId() {
        return this._userId;
    }

    /**
     * @returns {Array}
     * @returns {string} return.day
     * @returns {number} return.kilogram
     * @returns {number} return.calorie
     * @returns {number} return.index
     */
    get sessions() {
        return this._sessions.map((session, index = 0) => {
            index++;
            return {
                day: session.day,
                kilogram: session.kilogram,
                calorie: session.calories,
                index: index
            }
        });
    }
}

export default Activity;