var isgo=sessionStorage.getItem("isgo");
			console.log(isgo);
			if(isgo!=null&&isgo){
				window.location.href="index.html";
			}else{
				window.location.href="login.html";
			}