function Game2Paleta(player_position_x)
{	
	//Criando paleta
	this.img = new Image();
	this.img.src="imgs/game_2/paleta.png";
	this.loaded = false;
	this.visible = true;
		
	this.img.onload = function()
	{
		loaded = true;
	};
	
	//propriedades
	this.tamanho_x = 200;
    this.tamanho_y = 20;
    this.posicao_x = (tamanho_tela_x  - this.tamanho_x)/2;
    this.posicao_y = (tamanho_tela_y - this.tamanho_y-2);
    this.velocity_x = 10;
    this.velocity_y = 0;
    this.velocity_MAX = 15;
    
    this.direita = false;
	this.esquerda = false;
    
    this.update=function()
    {
		//mover paleta
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
             	
  
       	if(this.posicao_x > 750 - this.tamanho_x)
       	{
       		this.posicao_x = 750 - this.tamanho_x;
        }
    
    	
       
    }
    
       
    this.draw = function()
    {
    	//desenhando paleta
    	if(this.visible)
    	screen.drawImage(this.img, this.posicao_x, this.posicao_y);
    
    }//FIM DO DRAW
    
	//movendo a paleta
     this.key_down = function(key)
     {
     	     	
             	if(key.keyCode== "37") //seta esquerda
				{					
					this.esquerda = true;//verdadeiro
				}
			
				if(key.keyCode== "39") //seta direita
				{
					this.direita = true;//verdadeiro
				}
	
							
		}
             
             this.key_up = function(key)
            { 
             	if(key.keyCode== "37") // seta esquerda
				{
					this.esquerda = false;
				}
			
				if(key.keyCode== "39") //seta direita
				{
					this.direita = false;//verdadeiro
				}	
			}
 
 }// FIM DA CLASSE
 
 