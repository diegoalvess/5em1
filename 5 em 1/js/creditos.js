function Cena_Creditos()
{
	this.imagem = new Image();
	this.loaded = false;
	
	//TAMANHO//
	this.tamanho_x = 1500;
    this.tamanho_y = 1366;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //IMAGEM DO BOTAO//
    this.botao_voltar = new Botao_voltar;
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
	
	this.update=function()
   	{
   	
   	};
   
   	this.draw=function()
   	{
   		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("CREDITOS", 20, 20);
		
		//desenho do  botao//
		this.botao_voltar.draw();
   	};
   
   
   	this.mouse_down=function(mouse)
   	{
   		//função do clique para o botão mudar de cena//
   		if(this.botao_voltar.clicou(mouse))
    	{
    		Cena_atual = CENAS.INTRO;
    	}
   	};
   
   	this.key_down=function(key)
   
   	{
   		
   	};
   
}