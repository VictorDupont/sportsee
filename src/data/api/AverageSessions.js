class AverageSessions {

    /**
     * @param {Object} data
     * @param {string} data.userId
     * @param {Array} data.sessions
     * @param {string} data.sessions.day
     * @param {number} data.sessions.sessionLength
     * @param {number} data.sessions.calories
     * @param {number} data.sessions.index
     * @param {number} data.sessions.kilogram
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
     * @returns {number} return.sessionLength
     */
    get sessions() {
        return this._sessions.map((session) => {
            let dayLetter = "";

            switch(session.day) {
                case 1:
                    dayLetter = "L";
                    break;
                case 2:
                    dayLetter = "M";
                    break;
                case 3:
                    dayLetter = "M";
                    break;
                case 4:
                    dayLetter = "J";
                    break;
                case 5:
                    dayLetter = "V";
                    break;
                case 6:
                    dayLetter = "S";
                    break;
                case 7:
                    dayLetter = "D";
                    break;
                default:
                    return session.day;
            }

            return {
                day: dayLetter,
                sessionLength: session.sessionLength
            }
        });
    }
}

export default AverageSessions;