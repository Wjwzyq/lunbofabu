class Login {
	constructor(btn) {
	    this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}
	bindEvents () {
		let _this = this;
		this.btn.onclick = function () {
			console.log(_this);
			_this.container.innerHTML = '<h4>发布</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label>内 容：<input id="password" type="password"></label></p>'+
			'<p><button id="loginBtn" class="logonBtn" type="button">发布</button></p>';			
			tools.showCenter(_this.container);
			_this.modal = document.createElement("div");
			_this.modal.className = "modal";
			document.body.appendChild(_this.modal);
			new Drag(_this.container, "h4").init();
		}
		
		this.container.onclick = function (e) {
			e = e || window.event;
			var target = e.target || e.srcElement;
			switch(target.id) {
				case "loginBtn":
					let username = document.querySelector("#username").value;
					let password = document.querySelector("#password").value;
				case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.modal);
			}	
		}
		this.ss.oncantextmenu=function(e){
			e = e|| window.event;
		}
	}
}
