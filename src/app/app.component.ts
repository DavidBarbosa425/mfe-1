import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.obterDoLocalStorage()
    
  }
  
  obterDoLocalStorage(): void {
    
    const suaVariavel = localStorage.getItem('suaChave');
    console.log('Valor recuperado do localStorage:', suaVariavel);
  }
 
}
