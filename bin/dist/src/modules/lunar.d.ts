import Calendar, { ICalendarDate } from "./calendar";
import SolarDate from "./solar";
export interface ILunarDate extends ICalendarDate {
    jd?: number;
    leap_month?: boolean;
    leap_year?: boolean;
}
interface ILuckyHour {
    name: string;
    time: number[];
}
export default class LunarDate extends Calendar {
    private leap_month?;
    constructor(date: ILunarDate);
    init(force_change?: boolean): void;
    private static getRecommended;
    private static getYearCode;
    private static generateJdOfNewYear;
    private static decodeLunarYear;
    private static findLunarDate;
    private static getSunLongitudeByJd;
    private static getSunLongitude;
    static fromSolarDate(date: SolarDate): LunarDate;
    getYearName(): string;
    getMonthName(): string;
    getDayName(): string;
    getHourName(): string;
    getDayOfWeek(): string;
    getSolarTerm(): string;
    getLuckyHours(): Array<ILuckyHour>;
    setDate(date: ILunarDate): void;
    toSolarDate(): SolarDate;
    get(): {
        year_name: string;
        name: import("./calendar").CalendarName;
        day: number;
        month: number;
        year: number;
        leap_year: boolean;
        julian: number;
    };
}
export {};
