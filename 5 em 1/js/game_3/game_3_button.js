function Game3Button(arquivo, tam_x, tam_y, pos_x, pos_y)
{
	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.loaded = false;
	
	//tamanho
	this.tamanho_x = tam_x;
    this.tamanho_y = tam_y;
    this.posicao_x = pos_x;
    this.posicao_y = pos_y;
    
    this.posicao_origem_x = 0;
    this.posicao_origem_y = 0;

	this.visible = true;
	
	this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	console.log("Botao")
    };
    
    this.draw=function()
    {  	
    	//desenho do bot�o e sua respectiva posi��o
    	if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_origem_x, this.posicao_origem_y, this.tamanho_x, this.tamanho_y, this.posicao_x, this.posicao_y, this.tamanho_x, this.tamanho_y)
    	//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
    };
    
   	//vari�vel de clique do bot�o
    this.clicou = function(mouse)
    {
    	//console.log("MOUSE X: " + mouse.x + " MOUSE Y " + mouse.y);
    	
    	//console.log("IMAGEM: " + this.imagem.src + " POS X " + this.posicao_x + " POS Y " + this.posicao_y + " TAM X " + this.tamanho_x + " TAM Y " + this.tamanho_y);
    	    	
    	//colis�o
    	if(Collide(
    		mouse.x,
    		mouse.y,
    		1,
    		1,
    		this.posicao_x,
    		this.posicao_y,
    		this.tamanho_x,
    		this.tamanho_y))
    	
    	{
    		return true;
    	}
    	
    	else
    	{
    		return false;
    	}
    } 
    
    
}