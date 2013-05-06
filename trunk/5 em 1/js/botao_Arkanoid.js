function Botao_Arkanoid()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/botaoarkanoid.png"; //imagem do botao//
	this.loaded = false;
	
	//TAMANHO//
	this.tamanho_x = 295;
    this.tamanho_y = 82;
    this.posicao_x = 580;
    this.posicao_y = 350;

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