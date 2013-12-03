function Game1Button(arquivo, tam_x, tam_y, pos_x, pos_y)
{
	//Criando botão
	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.loaded = false;
	
	//propriedades
	this.tamanho_x = tam_x;
    this.tamanho_y = tam_y;
    this.posicao_x = pos_x;
    this.posicao_y = pos_y;

	//carregando imagem
	this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	//desenho do botão e sua respectiva posição
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
   	//variável de clique do botão
    this.clicou = function(mouse)
    {
    	
    	//colisão com o mouse
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