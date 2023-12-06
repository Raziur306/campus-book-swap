export const dateFormatter = (date: string) => {
    const  inputDate = new Date(date);
    return `${inputDate.getDate()}/${inputDate.getMonth() + 1}/${inputDate.getFullYear()}`;
};

export const formatTimeDistance = (targetTime: string) => {
    const currentTime: Date = new Date();
    const targetDate: Date = new Date(targetTime);
    const timeDifference: number = currentTime.getTime() - targetDate.getTime();
  
    const seconds: number = Math.floor(timeDifference / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} ${days === 1 ? "day" : "days"}`;
    } else if (hours > 0) {
      return `${hours} ${hours === 1 ? "hr" : "hrs"}`;
    } else if (minutes > 0) {
      return `${minutes} ${minutes === 1 ? "min" : "mins"}`;
    } else {
      return "Just now";
    }
  };