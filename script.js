const createE = (el) => {
    return document.createElement(el);
}

const addClass = (name, el) => {
   return name.classList.add(el);
}

const appendC = (cont, acc) => {
   return cont.appendChild(acc);
}

const container = document.getElementById('root');

let header = createE('header');

let imgHD = createE('div');
addClass(imgHD, 'imgHD');

let imgH = createE('img');
imgH.src = 'https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG31.png';

let logoText = createE('div');
addClass(logoText, 'logoText');
logoText.textContent = 'Series';

appendC(imgHD, imgH);
appendC(header, imgHD);

appendC(header, logoText);

let contain = createE('div');
addClass(contain, 'container'); 

const getData = async function () {
   try {
      const response = await fetch('https://swapi.dev/api/films');

      const data = await response.json();
   
      data.results.forEach(film => {
   
         let card = createE('div');
         addClass(card, 'card');

         let details = createE('div');
         addClass(details, 'details');

         let image = createE('div');
         addClass(image, 'imgBx');
         
         let h1 = createE('h1');
         addClass(h1, 'title');
         h1.textContent = film.title;
   
         let p1 = createE('p');
         addClass(p1, 'text1');
         p1.textContent =  'Episode :' + film.episode_id;
   
         let p2 = createE('p');
         addClass(p2, 'text2');
         p2.textContent = 'Director :' + film.director;
   
         let p3 = createE('p');
         addClass(p3, 'text3');
         p3.textContent = 'Producer :' + film.producer;
         
         let p4 = createE('p');
         addClass(p4, 'text4');
         p4.textContent = 'Release Date :' + film.release_date;
   
         let p5 = createE('p');
         addClass(p5, 'text5');
         p5.textContent = 'Description :' + film.opening_crawl;
    
   
      
         appendC(details, h1);
         appendC(details, p1);
         appendC(details, p2);
         appendC(details, p3);
         appendC(details, p4);
         appendC(details, p5);
         appendC(card, image);
         appendC(card, details);
         appendC(contain, card);
         appendC(container, header);
         appendC(container, contain);
      }); 
   } catch (error) {
      console.log('Error', error);
   }
}

getData();



