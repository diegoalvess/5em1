//ball.js
function Game2Ball()
{
	this.img = new Image();
	this.img.src="imgs/game_2/bola_finalizada.png";
	this.loaded = false;
	this.visible = true;
	this.followplayer = true;
	
	this.img.onload = function()
	{
		loaded = true;
	};
	
    this.tamanho_x = 35;
    this.tamanho_y = 35;
    this.posicao_x = 400;
    this.posicao_y = 540;
    this.velocity_x = 10;
    this.velocity_y = -10;
   // this.velocity_MAX = 17;
    
     this.update=function(player_position_x)
    {
    	
    	//fazendo a bola ficar presa e sair da paleta
		if(this.followplayer)
		{
			this.posicao_x = player_position_x - this.tamanho_x/2;
			this.posicao_y = 540;
		}
    	
    	//FAZENDO A BOLA SE MOVER
    	this.posicao_x += this.velocity_x;	

    	this.posicao_y -= this.velocity_y;	
    	
    	//COLIDINDO A BOLA
    	//colidindo com a esquerda, dando o desconto da imagem preta no fundo
    	if(this.posicao_x < 60)
		{
			this.velocity_x *=-1;
			this.posicao_y -= 1;	
			
			if(this.posicao_x < 60)
			{
				this.vidas--;
			}
		}
		
		//colidindo em cima dando desconto da imagem preta no fundo...
    	if(this.posicao_y < 40)
		{
			this.velocity_y *=-1;
				
			if(this.posicao_y > 40)
			{
				this.velocity_y *=1;
			}
		}
				
		//colidindo com a direita com desconto da parte preta no fundo...
    	if(this.posicao_x > 750 - this.tamanho_x)//TO DO REFACTOR
		{
			this.velocity_x *=-1;	
			
			if(this.posicao_x < 750 - this.tamanho_x)
			{
				this.vidas--;
			}
		}
				

		
	
    };
    
   this.draw = function()
    {
    	if(this.visible)
    	screen.drawImage(this.img, this.posicao_x, this.posicao_y);
    
    }//FIM DO DRAW
 
 	this.key_down = function (key)
 	{
 		if(key.keyCode == "32")
 		{
 			this.followplayer = false;
 		}
 	}
 }