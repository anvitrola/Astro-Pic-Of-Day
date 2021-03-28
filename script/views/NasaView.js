class NasaView {
    makeLayout (media, mediaType, description, title, copyright, date){
        let $ = document.createElement.bind(document);
        let container = document.getElementById('cardsContainer');
        container.firstChild.remove();
        
        let card = $('a');
        let texts = $('div');
        let day = $('h4');
        let name = $('h3');
        let credit = $('h4');
        let desc = $('p');
        
        card.classList.add('card');
        texts.classList.add('card__texts');
        day.classList.add('card__day')
        name.classList.add('card__title');
        credit.classList.add('card__credit');
        desc.classList.add('card__desc');
        
        card.setAttribute('id', 'card');
        card.setAttribute('href', '#');

        day.textContent = date;
        name.textContent = title;
        credit.textContent = copyright;
        desc.textContent = description;
        
        container.appendChild(card);

        if(mediaType == 'image'){
            let img = $('img');
            img.classList.add('card__picture');
            img.src = media;
            card.appendChild(img);
        } else{
            let gif = $('iframe');
            gif.classList.add('card__gif');
            gif.src = media;
            card.appendChild(gif);
        };
        
        card.appendChild(texts);
        card.appendChild(buttons);
        texts.appendChild(name);
        texts.appendChild(day);
        texts.appendChild(credit);
        texts.appendChild(desc);
    }

}