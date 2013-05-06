function Botao_voltar()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/botaovoltar.png"; //IMAGEM DO BOTÃO//
	this.loaded = false;
	
	//TAMANHO//
	this.tamanho_x = 70;
    this.tamanho_y = 70;
    this.posicao_x = largura_tela_w/2;
    this.posicao_y = altura_tela_h-80;

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
    		mouse.x-19,
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