function Ball()
{
	this.img = new Image();
	this.img.src = "imagens/bola.png";
	this.loaded = false;
	
	this.followplayer = true;
	
	this.img.onload = function()
	{
		loaded = true;
	}
	
	this.posicao_x = 370;
	this.posicao_y = 1033;
	this.velocidade_x = 10;
	this.velocidade_y = -10;
	this.size_x = 30;
	this.size_y = 30;
	
	
	
	this.update = function(player_position_x)
	{
		
		//console.log("FOLLOW PLAYER ---------- " + this.followplayer);
		
		if(this.followplayer)
		{
			this.posicao_x = player_position_x-this.size_x/2;
			this.posicao_y = 1033;
		}		
		
		//FAZENDO A BOLA SE MOVER//
		this.posicao_x += this.velocidade_x;
		this.posicao_y += this.velocidade_y;
	
		//FAZENDO A BOLA REBATER//
		if(this.posicao_x < 19 + this.size_x)
		{
			this.velocidade_x *=-1;
		}
	
		if(this.posicao_y < 2 + this.size_y)
		{
		this.velocidade_y *=-1;
		}
		
		if(this.posicao_x > 764 - this.size_x)
		{
			this.velocidade_x *=-1;
		}
		
		
		
		
	
	}//FIM UPDATE
	

}//FIM CLASSE BOLA BALL