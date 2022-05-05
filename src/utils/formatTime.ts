export const formatTime = (timestamp: number) => {
    let date = new Date(timestamp);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatedDate = `${formatNumber(hours)}:${formatNumber(
        minutes
    )}:${formatNumber(seconds)}`;

    return formatedDate;
};

const formatNumber = (number: number) => {
    const newNumber = number < 10 ? `0${number}` : number;
    return newNumber;
};
