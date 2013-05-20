//ball.js
function Game2Ball()
{
	this.img = new Image();
	this.img.src="imgs/game_2/bola.png";
	this.loaded = false;
	this.visible = true;
	this.followplayer = true;
	
	this.img.onload = function()
	{
		loaded = true; 
		console.log("carregamento pela classe BALL " + loaded);
	};
	
    this.tamanho_x = 40;
    this.tamanho_y = 40;
    this.posicao_x = 400;
    this.posicao_y = 633;
    this.velocity_x = 10;
    this.velocity_y = -10;
    //this.velocity_MAX = 13;
    
     this.update=function(player_position_x)
    {
    	
    	//fazendo a bola sair da paleta
		if(this.followplayer)
		{
			this.posicao_x = player_position_x - this.tamanho_x/2;
			this.posicao_y = 633;
		}
    	
    	//MOVENDO A BOLA
    	this.posicao_x += this.velocity_x;	

    	this.posicao_y += this.velocity_y;	
    	
    	//COLIDINDO A BOLA
    	//colidindo com a esquerda, dando o desconto da imagem de fundo
    	if(this.posicao_x < 60)
		{
			this.velocity_x *=-1;	
		}
		
		//colidindo com cima...
    	if(this.posicao_y < 40)
		{
			this.velocity_y *=-1;	
		}
				
		//colidindo com a direita
    	if(this.posicao_x > 850 - this.tamanho_x)//TO DO REFACTOR
		{
			this.velocity_x *=-1;	
			
		}
				
		//colidindo com baixo
    	if(this.posicao_y > 768 - this.tamanho_y)//TO DO REFACTOR
		{
		//	this.velocity_y *=-1;	
		}
		
		
	
    };
    
   this.draw = function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.posicao_x, this.posicao_y);
    
    }//FIM DO DRAW
 
 	this.key_down = function (key)
 	{
 		if(key.keyCode == 32)
 		{
 			bola.followplayer = false;
 		}
 	}
 }