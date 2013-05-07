function Botao(arquivo, tam_x, tam_y)
{
	this.imagem = new Image();
	this.imagem.src = arquivo; //imagem do botao//
	this.loaded = false;
	
	//TAMANHO//
	this.tamanho_x = tam_x;
    this.tamanho_y = tam_y;
    this.posicao_x = 0;
    this.posicao_y = 0;

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
    		mouse.x,
    		mouse.y,
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