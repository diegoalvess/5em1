function Cena_Jogo1()
{
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
		screen.fillText("JOGO ARKANOID", 20, 20);
		
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
   		console.log("JOGO1 keyCode " + key.keyCode );
   		   		
   	};
   	
   	
   	this.key_up=function(key)
   {
   		
   };
   
}