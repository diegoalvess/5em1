//ball.js
function Ball()
{
	this.img = new Image();
	this.img.src="imgs/bola.png";
	this.loaded = false;
	
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
    this.velocity_x = 5;
    this.velocity_y = -5;
    this.velocity_MAX = 6;
    
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
    	if(this.posicao_x < 50)
		{
			this.velocity_x *=-1;	
		}
		
    	if(this.posicao_y > 45)
		{
			this.velocity_y *=-1;	
		}
				
    	if(this.posicao_x > 850 - this.tamanho_x)//TO DO REFACTOR
		{
			this.velocity_x *=-1;	
		}
				
    	if(this.posicao_y > 0 - this.tamanho_y)//TO DO REFACTOR
		{
			this.velocity_y *=-1;	
		}
	
    };
 
 }