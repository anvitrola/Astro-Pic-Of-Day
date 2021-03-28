class NasaModel {
    constructor(date){
        this.__chosen_date = date;
        this.__media = '';
        this.__mediaType = '';
        this.__description = '';
        this.__copyright = '';
        this.__date = '';
        this.__title = '';
    }
    makeRequest (){
        let request = new XMLHttpRequest();
        request.open('GET', `https://api.nasa.gov/planetary/apod?api_key=MS0B4yaMAYTN28jxyRSq0i4sFzFjh6iU6rb40NyH&date=${this.__chosen_date}`);
        request.addEventListener('load', () => {
            if(request.status == 200){
                let result = JSON.parse(request.responseText);
                this.__media = result.url;
                this.__mediaType = result.media_type;
                this.__description = result.explanation;
                this.__copyright = result.copyright;
                this.__title = result.title;
                this.__date = result.date;

                let view = new NasaView();
                view.makeLayout(this.__media, this.__mediaType, this.__description, this.__title, this.__copyright, this.__date);
            }else{
                console.log(`ERROR ${request.status}: ${request.statusText}`);
            }
        });
        request.send();
    }
    get date (){
        return this.chosen_date;
    }
    get media (){
        return this.__media;
    }
    get mediaType (){
        return this.__mediaType;
    }
    get description (){
        return this.__description;
    }
    get copyright (){
        return this.__copyright;
    }
    get title (){
        return this.__title
    }
}