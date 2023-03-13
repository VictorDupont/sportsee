import Performance from "../data/api/Performance";

/**
 * @param {Object} data
 * @param {string} type
 * @returns {Performance}
 */
class PerformanceFactory {
    constructor(data, type) {
        if(type === "API") {
            return new Performance(data);
        }
    }
}

export default PerformanceFactory;