class Clock {
    constructor(timeDivId, alarmDivId, alarmTime) {
        this.timeDiv = timeDiv;
        this.alarmDiv = alarmDiv;
        this.alarmTime = alarmTime;
        let tim = document.querySelector(this.timeDiv)
        let t = new Date();
        let time = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        tim.innerHTML = time;
this.setAlarm();

        setInterval(this.updateTime.bind(this), 1000);

    }
    updateTime() {
        let tim = document.querySelector(this.timeDiv);
        let t = new Date();
        let time = t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        tim.innerHTML = time;
    }
    setAlarm() {
        const alarm = document.querySelector(this.alarmDiv + ' span');
        alarm.innerText = `Alarm`
    }
}
new Clock('#time', '#alarm', )