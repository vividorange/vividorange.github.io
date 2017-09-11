$(function(){	
	
	
	
	
	function makeBgCircle(className, place){
		// 画面の幅に0.0~1.0を掛けることによって、左からの座標を計算する
		var leftPx = parseInt(Math.random() * $(window).width());
		var bottomPx = parseInt(Math.random() * -6000) + 3000;
		
		//　サークルの大きさランダム指定
		var circleWidth;
		var widthRandNum = Math.floor( Math.random() * 4);
		
		switch (widthRandNum) {
		  case 0:
		   circleWidth = 'bg-circle-width-01';
		   break;
		
		  case 1:
		   circleWidth = 'bg-circle-width-02';
		   break;
		
		  case 2:
		   circleWidth = 'bg-circle-width-03';
		   break;
		   
		  default:
		   circleWidth = 'bg-circle-width-04';
		   break;
		}
		
		//　色ランダム指定
		var circleColor;
		var colorRandNum = Math.floor( Math.random() * 5);
		switch (colorRandNum) {
		  case 0:
		   circleColor = 'bg-circle-color-01';
		   break;
		
		  case 1:
		   circleColor = 'bg-circle-color-02';
		   break;
		
		  case 2:
		   circleColor = 'bg-circle-color-03';
		   break;
		  
		  case 3:
		   circleColor = 'bg-circle-color-04';
		   break;
		   
		  default:
		   circleColor = 'bg-circle-color-05';
		   break;
		}
		
		// divにcssを付けて追加する
		$('<div class="bg-circle ' + className + ' ' + circleWidth + ' ' + circleColor + '"><\/div>').css({'left': leftPx, 'bottom' : bottomPx}).appendTo(place);
	}
	
	//ページ表示時の背景生成
	for (var i = 0; i < 30; i++){
		makeBgCircle('circle01', '#move-bg01');
		makeBgCircle('circle02', '#move-bg02');
		makeBgCircle('circle03', '#move-bg01');
		makeBgCircle('circle04', '#move-bg02');
	}	
});