import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
   suaVariavel: any
  ngOnInit(): void {
    this.obterDoLocalStorage()
    
  }
  
  obterDoLocalStorage(): void {
    
     this.suaVariavel = localStorage.getItem('sessaoApp');
    console.log('Valor recuperado do localStorage:',this.suaVariavel);
  }
 
}
