function SceneMenu()
{
	this.imagem = new Image();//BACKGROUND
	this.imagem.src = "Imagens/Menu.png"
	this.loaded = false;
    

    this.tamanho_x = 1500;
    this.tamanho_y = 1366;

    this.posicao_x = 0;
    this.posicao_y = 0;
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "Sons/Menu.mp3"
    this.efeito_sonoro.load();
    
    //imagem dos botões
    this.botao_comecar = new Button("Imagens/botaocomecar.png", 302, 85, 580, 300);
    this.botao_creditos = new Button("Imagens/botaocredito.png", 302, 85, 630, 480);
    //this.botao_instru = new Button("Imagens/botaoinstrucoes.png", 302, 85, 400, 550);
    
    this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	this.efeito_sonoro.play();
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0);
    	
    	//desenho dos botões
    	this.botao_comecar.draw();
    	this.botao_creditos.draw(); 
    	//this.botao_instrucao.draw();  	
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//this.efeito_sonoro.pause();	
    	    	
    	//função do clique para o botão mudar de cena
    	if(this.botao_comecar.clicou(mouse))
    	{
    		currentScene = SCENE.INTRODUCAO;
    		this.efeito_sonoro.pause();	
    	}
    	
    	if(this.botao_creditos.clicou(mouse))
    	{
    		currentScene = SCENE.CREDITOS;		
    	}
		
    	/*if(this.botao_instrucao.clicou(mouse))
    	{
			currentScene = ;
		}
    	*/
		
    };
    
    
    this.key_down=function(key)
    {
		
    };
    
    this.key_up=function(key)
    {
		
    };
    
}