import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemplos',
  templateUrl: './pipes-exemplos.component.html',
  styleUrls: ['./pipes-exemplos.component.scss']
})
export class PipesExemplosComponent implements OnInit {

  livro:any = {
    titulo: 'LIVRO DE C',
    rating: 4.9,
    numeroPaginas: 314,
    preco: 50.55,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.inf.ufpr.br/lesoliveira/download/c-completo-total.pdf'
  };

  livros:string[] = ['Java', 'Angular 2'];
  filtro:string = '';
  constructor() { }

  ngOnInit(): void {
  }

  addCurso(newCurso:string){
      this.livros.push(newCurso);
  }
}
