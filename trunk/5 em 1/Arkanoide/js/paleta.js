//paleta.js
function Paleta()
{
	this.img = new Image();
	this.img.src="imgs/paleta.png";
	this.loaded = false;
	this.visible = true;
		
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe PALETA" + loaded);
	};
	
	this.tamanho_x = 200;
    this.tamanho_y = 20;
    this.posicao_x = (tela_tamanho_x  - this.tamanho_x)/2;
    this.posicao_y = (tela_tamanho_y - this.tamanho_y - 2);
    this.velocity_x = 10;
    this.velocity_y = 0;
    this.velocity_MAX = 15;
    
    this.direita = false;
	this.esquerda = false;
    
    this.update=function()
    {
    	if(this.direita == true)
    	{
    		this.posicao_x += this.velocity_x;
    	}
    	if(this.esquerda == true)
    	{
    		this.posicao_x -= this.velocity_x;
    	}
    
     //MANTENDO PALETA PRETA NO CAMPO
      	if(this.posicao_x < 50) 
       	{
      		this.posicao_x = 50;
       	}
             	
  
       	if(this.posicao_x > 850 - this.tamanho_x)
       	{
       		this.posicao_x = 850 - this.tamanho_x;
        }
    
    	
       
    }
    
       
    this.draw = function()
    {
    	
    	if(this.visible)
    	screen.drawImage(this.img, this.posicao_x, this.posicao_y);
    
    }//FIM DO DRAW
    
     this.key_down = function(key)
             {
             	if(key.keyCode=="37")
				{
					
					this.esquerda = true;//verdadeiro
				}
			
				if(key.keyCode=="39")
				{
					this.direita = true;//verdadeiro
				}
				/*
				if(key.keyCode == "32")
				{
					bola.followplayer = false;
				}*/	
				
			
			}
             
             this.key_up = function(key)
            { 
             	if(key.keyCode=="37")
				{
					this.esquerda = false;
				}
			
				if(key.keyCode=="39")
				{
					this.direita = false;//verdadeiro
				}	
			}
 
 }// FIM DA CLASSE
 
 