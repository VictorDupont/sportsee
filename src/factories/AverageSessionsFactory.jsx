import AverageSessions from "../data/api/AverageSessions";

/**
 * @param {Object} data
 * @param {string} type
 * @returns {AverageSessions}
 */
class AverageSessionsFactory {
    constructor(data, type) {
        if(type === "API") {
            return new AverageSessions(data);
        }
    }
}

export default AverageSessionsFactory;