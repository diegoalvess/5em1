
function Tijolo_Amarelo()
{
	this.img = new Image();
	this.img.src= "imagens/tijolo amarelo.png";
	this.loaded = false;
	this.visible = true;
	
	this.img.onload = function()
	{
		loaded = true;
	}
	
	this.tamanho_w = 61;
	this.tamanho_h = 26;
	this.posicao_x = 0;
	this.posicao_y = 100;
}	