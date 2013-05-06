function Botao_Creditos()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/botaocredito.png"; //IMAGEM DO BOTÃO//
	this.loaded = false;
	
	//TAMANHO//
	this.tamanho_x = 196;
    this.tamanho_y = 51;
    this.posicao_x = 640;
    this.posicao_y = 668;

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