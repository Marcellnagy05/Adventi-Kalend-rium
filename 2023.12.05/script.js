let date = document.getElementById('date');
let items = document.getElementsByClassName('card')
let messages = 
["Legyen szép!","Boldog Karácsonyt!","A szeretet","A hit","Jézus","Öröm",
"Tessék egy Csoki","3 Szent","Kereszt","Boldogság","Ajándékozás","13.Havi nyugdíj",
"Mézeskalács","Bejgli","Karácsonyfa","Csillagok","Fények","Hóesés",
"Töltött Káposzta","Halászlé","Amerikában a Télapó jön :(","Templomi Mise","Együtt töltött idő","Család",]

currentDate = new Date();

date.innerHTML += `${currentDate.getFullYear()}/${currentDate.getMonth()+1}/${currentDate.getDate()}`;

const Change = (item) =>{
    if (parseInt(item.innerHTML) <= currentDate.getDate()) {        
        let Generated = Math.floor(Math.random()*messages.length)
        item.innerHTML = messages[Generated]
        messages.splice(Generated,1)
    }
}