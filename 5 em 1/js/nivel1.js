function Cena_Jogo()
{
	this.fundo = new Image();
	this.fundo.src="imgs/fundo_Pong.png";//IMAGEM DE FUNDO//
	this.loaded = false;
	
	this.tamanho_x = 1336;
    this.tamanho_y = 768;
    this.posicao_x = 0;
    this.posicao_y = 0;
	
	//IMAGEM DO BOTAO//
    this.botao_voltar = new Botao_voltar;
		
	this.update=function()
   	{   		
   		
   	};
   
   	this.draw=function()
   	{	
   		//DESENHANDO O NOME DA CENA//
   		screen.font = "20px Comic Sans MS";
		screen.fillStyle="#000000";
		screen.fillText("JOGO PONG", 20, 20);
		
		//DESENHANDO O JOGO//
		screen.drawImage(this.fundo, 0, 0);
		
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
   		console.log("JOGO keyCode " + key.keyCode );
   		   		
   	};
   	
   	
   	this.key_up=function(key)
   {
   		
   };
   
}