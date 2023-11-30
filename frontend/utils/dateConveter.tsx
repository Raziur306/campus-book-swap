export const dateFormatter = (date: string) => {
    const  inputDate = new Date(date);
    return `${inputDate.getDate()}/${inputDate.getMonth() + 1}/${inputDate.getFullYear()}`;
};
