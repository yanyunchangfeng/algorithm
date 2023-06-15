const unique = (arr) => {
    const result = [], hash = [];
    for (let i = 0; i < arr.length; i++) {
        if (!hash[arr[i]]) {
            result.push(arr[i]);
            hash[arr[i]] = true;
        }
    }
    return result;
};
export default unique;
//# sourceMappingURL=index.js.map