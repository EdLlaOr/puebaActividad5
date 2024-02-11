import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})


export class BlogComponent {

  arrNoticias : any [] = [];

  newNoticia : any = {
    'titulo':"",
    'url':"",
    'texto':"",
    'fecha':""
  }
  

  noticia1 = {
    'titulo':"Zabala ofrece una exhibición en Pamplona",
    'url': "https://aspepelota.eus/wp-content/uploads/2024/02/Zabala-5-U200203750906J5H-U2101494324537quC-1200x840@La-Rioja.webp",
    'texto': "Es difícil jugar mejor a pelota. Javier Zabala ofreció este sábado una exhibición en el Labrit de Pamplona y junto a Julen Martija ganó por 12-22 a Artola e Imaz, que acabaron desesperados ante el dominio ejercido por sus rivales, en especial por el riojano. La cátedra no se equivocó en su apuesta",
    'fecha':"11/02/2024"
  }

  noticia2 = {
    'titulo' : "China ha conseguido que una semilla germine por primera vez sobre otro mundo en su misión Chang'e 4",
    'url': "https://i.blogs.es/06c2cd/algodon/1366_2000.jpg",
    'texto': "La sonda Chang'e 4 hizo historia al aterrizar por primera vez en la cara oculta de la Luna, pero los hitos parecen no acabar ahí. Ahora nos han llegado imágenes de una semilla germinando en la Luna, aunque no se trata de una plantación en el yermo suelo del satélite, sino de que la planta ha logrado crecer en un ambiente tan poco favorable como ése.",
    'fecha': "17/01/2019" 
  }

  constructor(){
    this.arrNoticias.push(this.noticia1);
    this.arrNoticias.push(this.noticia2);
  }

}
