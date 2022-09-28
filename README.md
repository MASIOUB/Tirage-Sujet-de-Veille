# Tirage-Sujet-de-Veille

# This is a program to generate a random of student list.

# Programe as default
![image](https://user-images.githubusercontent.com/93975488/192659332-607e3f91-0e78-47a1-906b-a86adb2e6f5b.png)

# After add new students
![image](https://user-images.githubusercontent.com/93975488/192659401-74d86501-91fc-41b8-8bed-9b740ff30da2.png)

# After the generate a random
![image](https://user-images.githubusercontent.com/93975488/192659467-d6d104ec-7f51-46d7-b192-47d88d31ce8e.png)

# For generate dates, I used a moment js library

# For skip weekend date, I used this function:
```javascript
let D = moment().format("YYYY-MM-DD");
let counter = 1;

function skippingWekeend(date, days) {
    let d = moment(new Date(date)).add(Math.floor(days / 5) * 7, "d");
    let remaining = days % 5;
    while (remaining) {
        d.add(1, "d");
        if (d.day() !== 0 && d.day() !== 6) remaining--;
    }
    return d.format("YYYY-MM-DD");
}
```
