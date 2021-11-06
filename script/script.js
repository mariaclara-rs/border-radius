var se, sd, id, ie;
var tela;


function init(){
    tela = document.getElementById("display-area");
}
function Inputs(){
 
    se = document.getElementById("val1").value; if(se>100) se=100;
    sd = document.getElementById("val2").value; if(sd>100) sd=100;
    id = document.getElementById("val3").value; if(id>100) id=100;
    ie = document.getElementById("val4").value; if(ie>100) ie=100;
//seleção do conteudo
//se.select();
//copiar conteudo = document.execCommand("copy");
    
}
function Update(){
    Inputs();
    document.getElementById("code").value = "";
    if(se!='' && sd=='' && id=='' && ie=='') {
        document.getElementById("code").value  =  "border-radius: " + se + "px;"
        sd=id=ie=se;
    }
    else 
    {
        if(se!='') document.getElementById("code").value  =  "border-top-left-radius: " + se + "px;\n";
        else se=0;
        if(sd!=''){
            if(se!='')
                document.getElementById("code").value  +=  "border-top-right-radius: " + sd + "px;\n";
            else
                document.getElementById("code").value  =  "border-top-right-radius: " + sd + "px;\n";
        }else sd=0;
        if(id!=''){
            if(sd!='' || se!='')
                document.getElementById("code").value += "border-bottom-right-radius: " + id +"px;\n";
            else
                document.getElementById("code").value = "border-bottom-right-radius " + id + "px;\n";
        }else id=0;
        if(ie!=''){
            if(sd!='' || se!='' || id!='')
                document.getElementById("code").value += "border-bottom-left-radius: " + ie +"px;\n";
            else
                document.getElementById("code").value = "border-bottom-left-radius " + ie + "px;\n";
        }else ie=0;
    }
    tela.style.borderTopLeftRadius = se+"px";
    tela.style.borderTopRightRadius = sd+"px";
    tela.style.borderBottomRightRadius = id+"px";
    tela.style.borderBottomLeftRadius = ie+"px";   
}
function observe_input_keypress(e){
    var code = e.charCode ? e.charCode : e.keyCode;
    if (! e.shiftKey && ! e.ctrlKey && ! e.altKey && ! e.metaKey && code != 46 && (code > 31 && (code < 48 || code > 57))) 
       return false;
    else
        return true;
}
