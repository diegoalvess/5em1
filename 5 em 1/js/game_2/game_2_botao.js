function Game2Button(arquivo, tam_x, tam_y, pos_x, pos_y)
{
	//criando botao
	this.imagem = new Image();
	this.imagem.src = arquivo;
	this.loaded = false;
	
	//tamanho
	this.tamanho_x = tam_x;
    this.tamanho_y = tam_y;
    this.posicao_x = pos_x;
    this.posicao_y = pos_y;

	//imagem carregada
	this.imagem.onload = function()
	{
		loaded = true; 
	};
    
    this.update=function()
    {
    	console.log("Botao")
    };
    
    this.draw=function()
    {  	
    	//desenho do botao e sua respectiva posicao
    	screen.drawImage(this.imagem, this.posicao_x, this.posicao_y)
    };
    
   	//variavel de clique do botao
    this.clicou = function(mouse)
    {
    	//console.log("MOUSE X: " + mouse.x + " MOUSE Y " + mouse.y);
    	
    	//console.log("IMAGEM: " + this.imagem.src + " POS X " + this.posicao_x + " POS Y " + this.posicao_y + " TAM X " + this.tamanho_x + " TAM Y " + this.tamanho_y);
    	    	
    	//colisao
    	if(Collide(
    		mouse.x-9,
    		mouse.y-8,
    		1,
    		1,
    		this.posicao_x,
    		this.posicao_y,
    		this.tamanho_x,
    		this.tamanho_y))
    	
    	{
    		return true;
    	}
    	
    	else
    	{
    		return false;
    	}
    }
    
    //COLISAO
	function Collide(x1, y1, w1, h1, x2, y2, w2, h2)
	{
		if((x1+w1<x2) //SE RECT1 ESQUERDO RECT2//
			||(x1>x2+w2) //SE RECT1 DIREITO RECT2//
			||(y1+h1<y2) //SE RECT1 CIMA RECT2//
			||(y1>y2+h2)) //SE RECT1 BAIXO RECT2//
		{
			return false; //N�O COLIDIU//
		}
		else	
		{
			return true; //COLIDIU//
		}
	}
    
    
    
}