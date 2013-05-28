function Game_1()
{	
	//Pausa
	//this.paused = false;
		
	//Introducao
	this.introducao = new Game1SceneIntroducao();

	//Level
	this.level1 = new Game1SceneLevel1();
		
	//FimGanhou 
	this.fimganhou = new Game1SceneGanhou();
		
	//FimPerdeu
	this.fimperdeu = new Game1ScenePerdeu();
	
	//Fluxo das telas
	this.SCENE = { INTRODUCAO: 0, LEVEL_1: 1, FIMGANHOU: 2, FIMPERDEU: 3}
				
	//Para mudar aonde o jogo comeca, ou seja qual cena, mude aqui
	this.currentScene = this.SCENE.INTRODUCAO;

	this.update=function()
	{	
		switch(this.currentScene)
		{
			//introducao
			case this.SCENE.INTRODUCAO:
			{
				this.introducao.update();		
			}
			break;
		
			//level1
			case this.SCENE.LEVEL_1:
			{
				this.level1.update();
			}
			break;
			
			//FimGanhou
			case this.SCENE.FIMGANHOU:
			{
				this.fimganhou.update();
			}
			break;
			
			//FimPerdeu
			case this.SCENE.FIMPERDEU:
			{
				this.fimperdeu.update();
			}
			break;
				
				
		}//fechar switch
			
	}//fechar update

	this.draw=function()
	{
		switch(this.currentScene)
		{
			case this.SCENE.INTRODUCAO:
			{
				this.introducao.draw();
			}
			break;
				
			case this.SCENE.LEVEL_1:
			{
				this.level1.draw();
			}
			break;
				
			case this.SCENE.FIMGANHOU:
			{
				this.fimganhou.draw();
			}
			break;
				
			case this.SCENE.FIMPERDEU:
			{
				this.fimperdeu.draw();
			}
			break;
				
		}
			
	}
	
	this.mouse_down = function(mouse)
	{
		console.log("mouse down game2");
			
		switch(this.currentScene)
		{
			case this.SCENE.INSTRUCOES:
			{
				this.instrucao.mouse_down(mouse);
			}
			break;
				
			case this.SCENE.LEVEL_1:
			{	
				this.level1.mouse_down(mouse);
			}
			break;
				
			case this.SCENE.FIMGANHOU:
			{
				this.fimganhou.mouse_down(mouse);
			}
			break;
				
			case this.SCENE.FIMPERDEU:
			{	
				this.fimperdeu.mouse_down(mouse);
			}
			break;
		}
	}
}