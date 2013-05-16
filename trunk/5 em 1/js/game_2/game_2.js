
function Game_2 ()
{
			
//http://www.maujor.com/blog/2012/07/16/api-fullscreen/

				
		//Pausa
		this.paused = false;
		
		//Introducao
		this.instrucoes = new SceneInstrucoes();

		//Creditos
		//this.creditos = new SceneCreditos();

		//Level
		this.level1 = new SceneLevel1();
		
		//FimGanhou 
		this.fimganhou = new SceneGanhou();
		
		//FimPerdeu
		this.fimperdeu = new ScenePerdeu();
		
		//Menu
		//this.menu = new SceneMenu();
	
		//Fluxo das telas
		this.SCENE = { INSTRUCOES: 0, LEVEL_1: 1, FIMGANHOU: 2, FIMPERDEU: 3}
				
		//Para mudar aonde o jogo comeca, ou seja qual cena, mude aqui
		this.currentScene = this.SCENE.INSTRUCOES;

		this.update=function()
		{	
			switch(this.currentScene)
			{
				//introducao
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.update();		
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
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.draw();
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

		//Funcionando teclado e mouse.
		this.mouse_down = function(mouse)
		{
			switch(this.currentScene)
			{
				case this.SCENE.INSTRUCOES:
				{
					
					this.instrucoes.mouse_down(mouse);
				}
				break;
				
				case this.SCENE.LEVEL_1:
				{
					
					this.level1.mouse_down(mouse);
				}
				break;
				
				case this.SCENE.FIMPERDEU:
				{
					
					this.fimperdeu.mouse_down(mouse);
				}
				break;
				
				case SCENE.FIMGANHOU:
				{
					
					this.fimganhou.mouse_down(mouse);
				}
				break;
								
			}
		}		
}