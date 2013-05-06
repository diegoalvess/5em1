function Botao_Pong()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/botaocomecar.png"; //imagem do botao//
	this.loaded = false;
	
	//TAMANHO//
	this.tamanho_x = 302;
    this.tamanho_y = 85;
    this.posicao_x = 580;
    this.posicao_y = 250;

	this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	//DESENHO DO BOTAO E A POSICAO//
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
   	//VARIAVEL DE CLIQUE DO BOTAO//
    this.clicou = function(mouse)
    {
    	//COLISAO//
    	if(Collide(
    		mouse.x-20,
    		mouse.y-35,
    		1,
    		1,
    		this.posicao_x,
    		this.posicao_y,
    		this.tamanho_x,
    		this.tamanho_y
    	))
    	{
    		return true;
    	}
    	
    	return false;
    };
}