function SceneCreditos()
{
	this.imagem = new Image();
	this.imagem.src = "Imagens/Creditos.png"
	this.loaded = false;
	
	//tamanho
	this.tamanho_x = 1500;
    this.tamanho_y = 1366;
    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X, POSICAO_Y
    this.botao_voltar = new Button("Imagens/botaovoltar.png", 70, 70, tamanho_tela_x/2, (tamanho_tela_y-80));
    
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
    	//função do clique para o botão mudar de cena
    	if(this.botao_voltar.clicou(mouse))
    	{
    		currentScene = SCENE.MENU;
    			
    	}
    };

}