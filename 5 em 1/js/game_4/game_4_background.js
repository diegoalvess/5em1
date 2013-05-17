function Background(source, tx, ty, vx)
{
	this.imagem = new Image();
	this.imagem.src = source;
	this.loaded = false;
	this.visible = true;
		
	this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.tamanho_x = tx;
    this.tamanho_y = ty;
    this.posicao_x = 0;
    this.posicao_y = 0;
    this.velocidade_x = vx;
    this.velocidade_y = 0;
    
    this.update=function()
    {
    	//Movendo fundo da tela
    	this.posicao_x += this.velocidade_x;
    	
    	//Fazendo tela voltar pro comeco dando impressao de infinito
   		if(this.posicao_x <= - (this.tamanho_x-tamanho_tela_x))
    	{
    		this.posicao_x = 0
    	}
    	
    };
    
    
    this.draw=function()
    {
    	if(this.visible)
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y);
    };
    
    /*
    this.mouse_down=function(mouse)
    {
    	
    };
    
    
    this.key_down=function(key)
    {
    	   	
    	
    };
    
        
    this.mouse_up=function(mouse)
    {
    	
    	
    };
    
    this.key_up=function(key)
    {
    	
    	
    };
	*/
 
 }