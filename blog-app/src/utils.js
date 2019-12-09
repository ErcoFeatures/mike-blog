export const getMonthByNumber = (num) => {
    return ["January","February","March","April","May","June","July,","August","September","October","November",
        "December"][num]
}

export const addEllipsis = (name, n) => {
    name = (name.length > n) ? (name.substring(0, n) + '...') : name;
    return name;
}