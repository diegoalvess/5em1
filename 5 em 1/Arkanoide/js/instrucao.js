function SceneInstrucoes()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/creditos_teste.png"//FAZER IMAGEM PARA INSTRUCAO
	this.loaded = false;
	
	//tamanho
	this.tamanho_x = 900;
    this.tamanho_y = 700;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sons/Menu1.mp3"
    this.efeito_sonoro.load();
    
    //imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X, POSICAO_Y
    this.botao_voltar = new Button("imgs/voltar_teste.png", 70, 70, tela_tamanho_x /2, (tela_tamanho_y-80));
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {
		screen.drawImage(this.imagem, 0, 0)
		
		//desenho dos  botoes
		this.botao_voltar.draw();
    };
    
    
    this.mouse_down=function(mouse)
    {
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//fun��o do clique para o bot�o mudar de cena
    	if(this.botao_voltar.clicou(mouse))
    	{
    		currentScene = SCENE.MENU;
    		this.efeito_sonoro.play();	
    	}
    };
    
    
    this.key_down=function(key)
    {

    };
}