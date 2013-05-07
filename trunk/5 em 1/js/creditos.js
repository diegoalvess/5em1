function Cena_Creditos()
{
	this.fundo = new Image();
	this.fundo.src="imgs/creditosindex.png";//IMAGEM DE FUNDO//
	this.loaded = false;
	
	this.botao_voltar = new Botao("imgs/botaovoltar.png", 70, 70);
	this.botao_voltar.posicao_x = 570;
    this.botao_voltar.posicao_y = 700;
    
    
	
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
   	{
   		screen.drawImage(this.fundo, 0, 0);
   		
   		this.botao_voltar.draw();
   				
		
   	};
   
   
   	this.mouse_down=function(mouse)
   	{
   		//função do clique para o botão mudar de cena//
   		if(this.botao_voltar.clicou(mouse))
    	{
    		cena_atual = CENAS.INTRO;
    	}
   	};
   
   	this.key_down=function(key)
   
   	{
   		
   	};
   
   	this.key_up=function(key)
   
   	{
   		
   	};
   
}