    function GetLatenciaFP_ADD_SUB(){
   			var ciclo = document.getElementById('ciclo_FP_ADD/SUB');	
            return ciclo;
};

	function GetLatenciaINT_DIV(){
   			var ciclo = document.getElementById('ciclo_INT_DIV');
            return ciclo;
	};

	function GetLatenciaFP_MULT(){
   			var ciclo = document.getElementById('ciclo_FP_MULT');
            return ciclo;
	};

	function GetLatenciaFP_DIV(){
   			var ciclo = document.getElementById('ciclo_FP_DIV');
            return ciclo;
	};

	function GetFuncao(){
   			var func = document.getElementById('funcao');
            return func;
	};

	function GetRD(){
   			var rd = document.getElementById('rd');
            return rd;
	};

	function GetRS(){
   			var rs = document.getElementById('rs');
            return rs;
	};

	function GetRT(){
   			var rt = document.getElementById('rt');	
            return rt;
};  

    function controlador() {
            console.log(GetLatenciaFP_ADD_SUB());
            console.log(GetLatenciaINT_DIV());
            console.log(GetLatenciaFP_MULT());
            console.log(GetLatenciaFP_DIV());
            console.log(GetFuncao());
            console.log(GetRD());
            console.log(GetRS());
            console.log(GetRT());
    };