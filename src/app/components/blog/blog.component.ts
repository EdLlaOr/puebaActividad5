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

  arrNoticias : any [] = [
    {
      'titulo':"Zabala ofrece una exhibición en Pamplona",
      'url': "https://aspepelota.eus/wp-content/uploads/2024/02/Zabala-5-U200203750906J5H-U2101494324537quC-1200x840@La-Rioja.webp",
      'texto': "Es difícil jugar mejor a pelota. Javier Zabala ofreció este sábado una exhibición en el Labrit de Pamplona y junto a Julen Martija ganó por 12-22 a Artola e Imaz, que acabaron desesperados ante el dominio ejercido por sus rivales, en especial por el riojano. La cátedra no se equivocó en su apuesta",
      'fecha':"11/02/2024"  
    },
    {
      'titulo' : "China ha conseguido que una semilla germine por primera vez sobre otro mundo en su misión Chang'e 4",
      'url': "https://i.blogs.es/06c2cd/algodon/1366_2000.jpg",
      'texto': "La sonda Chang'e 4 hizo historia al aterrizar por primera vez en la cara oculta de la Luna, pero los hitos parecen no acabar ahí. Ahora nos han llegado imágenes de una semilla germinando en la Luna, aunque no se trata de una plantación en el yermo suelo del satélite, sino de que la planta ha logrado crecer en un ambiente tan poco favorable como ése.",
      'fecha': "17/01/2019"  
    }
  ];

  newNoticia : any = {
    'titulo':"",
    'url':"",
    'texto':"",
    'fecha':""
  }

  
  guardarNoticia():void{
    if((this.newNoticia.titulo!=="") && (this.newNoticia.url!=="") && (this.newNoticia.texto!=="") &&(this.newNoticia.fecha!=="")){
      const noticia={
        titulo:this.newNoticia.titulo,
        url:this.newNoticia.url,
        texto:this.newNoticia.texto,
        fecha:this.newNoticia.fecha
      }
      this.arrNoticias.push(noticia);
      this.newNoticia.titulo="";
      this.newNoticia.url="";
      this.newNoticia.texto="";
      this.newNoticia.fecha="";    
      console.log(this.arrNoticias)
    }else{
      alert("Debe completar todos los campos");
    }
  }

  pintarNoticias():string{
    let html: string ="";
    this.arrNoticias.forEach(element=>{
      html += '<article>'
      html += '<div class="noticia">';
      html += '<p class="titulo_noticia">'+element.titulo+'</p>';
      html += '<figure> <img src='+element.url+' alt='+element.titulo+' width="150" heigth="150 >"</figure>'
      html += '<p class="texto_noticia">'+element.texto+'</p>'
      html += '<p class="fecha_noticia">'+element.fecha+'</p>'
      html += '</div>'
      html += '<article>'
    })
    return html
  }
}
