import { Subject, subjects, tt } from "../models/tt"
interface Arg{day:number,hour:number}
export const findSubject = (arg:Arg): Subject => {
    if (arg.day >= tt.length || arg.day < 0) return subjects.no;
    arg.hour = arg.hour - 8;
    if (arg.hour >= tt[arg.day].length || arg.hour < 0) return subjects.no;
    return tt[arg.day][arg.hour];
}
export const today = (day: number): Subject[] => {
    return tt[day];
}