import { Subject, weekday } from "../models/tt"
const tts = (a: number): String => {
    if(a==12)return "12 AM"
    if (a > 12) return `${a - 12} PM`
    return `${a} AM`
}
export const HTMLResponse = (subject:Subject,date:number,hour:number): String => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="Description" content="${subject.name} by ${subject.teacher}" />
    <title>${subject.name}</title>
</head>
<style>
    body {
        background-color: ${subject.color};
        color: #fff;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    button {
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>

<body>
    <h2>${weekday[date]} , ${tts(hour)} - ${tts(hour+1)}</h2>
    <h1>${subject.name}</h1>
    <h2>${subject.code}</h2>
    <h2>${subject.short}</h2>
    <h2>${subject.teacher}</h2>
   <div>
    <a href="${subject.classroom}" target="_blank" rel="noopener noreferrer">
    <button>Classroom</button></a>
    <a href="/"><button>Today</button></a>
    <a href="?time=${hour+1}"><button>Next</button></a>
    <a href="https://res.cloudinary.com/dzuijvryp/image/upload/v1629965440/94eaa887-23ae-459e-bcc5-ff54293d22b2_ampfxy.jpg">
    <button>Full TT</button>
    </a>
    </div>
    <br>
<br>
<br>
<br>

    <form >
    <label for="day">Choose a day:</label><br>
<select name="day" id="day">
${weekday.map((e)=>`<option value="${e}" ${e===weekday[date]?"selected":""} >${e}</option>`)}
</select>
<br>
    <label for="time">Choose a time:</label>
<br>
<input type="number" value="${hour}" id="time" name="time" min="1" max="12">
<br>
<input type="submit" value="Submit">
</form> 

  </body>
</html>
    `
}