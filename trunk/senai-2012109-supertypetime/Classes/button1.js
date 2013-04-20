function Button(arquivo, tam_x, tam_y, pos_x, pos_y)
{
	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.loaded = false;
	
	//tamanho
	this.tamanho_x = tam_x;
    this.tamanho_y = tam_y;
    this.posicao_x = pos_x;
    this.posicao_y = pos_y;

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
    	console.log("MOUSE X: " + mouse.x + " MOUSE Y " + mouse.y);
    	
    	console.log("IMAGEM: " + this.imagem.src + " POS X " + this.posicao_x + " POS Y " + this.posicao_y + " TAM X " + this.tamanho_x + " TAM Y " + this.tamanho_y);
    	    	
    	//colisão
    	if(Collide(
    		mouse.x-512,
    		mouse.y-12,
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
