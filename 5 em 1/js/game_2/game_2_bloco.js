
function Bloco(source, hp)
{
	this.bloco_imagem = new Image();
	this.bloco_imagem.src = source;


	this.loaded = false;
	this.visible = true;
	
	this.hp = hp;
	this.pontos = this.hp*2
	

	this.bloco_imagem.onload = function()			
	{
		loaded = true; 
		console.log(loaded);
	};

	this.tam_X = 60;
	this.tam_Y = 20;
	this.psc_X = 0;
	this.psc_Y = 0;
	this.velo_Y = 5;
	this.velo_X = 5;
	this.velo_MAX = 15;    

	this.update=function()
	{
		//this.psc_X += this.velo_Y;	
	};
	
	this.draw=function()
	{
		if(this.visible)
    	screen.drawImage(this.bloco_imagem, this.psc_X, this.psc_Y)
	};
	
			
}