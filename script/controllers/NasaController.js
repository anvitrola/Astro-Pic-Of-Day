class NasaController {
    constructor(element) {
        this.date = ''; 
        this.__d = new Date();
        this.__p = `${this.__d.getFullYear()}-${(this.__d.getMonth())+1}-${this.__d.getDate()}`;

        if(element == this.__p){
            this.model = new NasaModel(element);
            this.model.makeRequest();
        } else{
            this.verifyDate(element);
            this.model = new NasaModel(this.date);
            this.model.makeRequest();
        }
    };
    verifyDate(day) {
        let date = new Date(day+ 'T00:00:00');
        let treatedDate = '';

        if (date > this.__d) {
            alert('Sorry, we can not predict the future...yet! :)');
            date = new Date();
        } 
        else if (date < new Date("Jun 16 1995")) {
            alert('You got us! The Astronomy Picture Of The Day project was invented in Jun 16 1995, so that is the minimum date. Maybe you should try another date! ;)');
            date = new Date();
        }

        if(date.getDate() < 10){
            treatedDate =  `${date.getFullYear()}-${(date.getMonth())+1}-0${date.getDate()}`;
        }else{
            treatedDate =  `${date.getFullYear()}-${(date.getMonth())+1}-${date.getDate()}`;
        }

        this.date = treatedDate;
    };
    
}