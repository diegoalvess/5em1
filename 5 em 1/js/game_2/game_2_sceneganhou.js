function Game2SceneGanhou()
{
	this.imagem = new Image();
	this.imagem.src = "imgs/game_2/Win.png"
	this.loaded = false;
    

    this.tamanho_x = 800;
    this.tamanho_y = 600;

    this.posicao_x = 0;
    this.posicao_y = 0;
    
    
    //Som
    this.efeito_sonoro = new Audio();
    this.efeito_sonoro.src = "sounds/game_2/click.mp3"
    this.efeito_sonoro.load();
    
    //imagem dos botoes							TAMANHO_X,TAMANHO_Y,POSICAO_X, POSICAO_Y
   // this.botao_voltar = new Button("imgs/game_2/voltar_teste.png", 70, 70, tamanho_tela_x /2, (tamanho_tela_y-80));
  //  this.imagem.onload = function()
	//{
	//	loaded = true; 
	//}
    
    this.update=function()
    {
    	
    };
    
    this.draw=function()
    {  	
    	screen.drawImage(this.imagem, 0, 0)
    	
    	//desenho dos  botoes
	//	this.botao_voltar.draw();
    };
    
    
    this.mouse_down=function(mouse)
    {   	
    	//para mudar da tela pra algum lugar coloque o comando aqui
    	//fun��o do clique para o bot�o mudar de cena
    	
    }
    
    
    this.key_down=function(key)
    {
		
    };
    
}