export class Cadena{
    private cad:string;

    constructor(cad:string){
        this.cad=cad;
    }

    get esPalindromo():string{
        var x=(this.cad.toLowerCase()).replace(" ","");
        var arr=x.split("");
        for(var i=0,t=arr.length-1;i<arr.length;i++,t--){
            if(arr[i]!=arr[t]){
                return `${this.cad} no es palindromo`
            }
        }
        return `${this.cad} es palindromo`
    }

    get contarVoc():String{
        let a:any;
        let e:any;
        let i:any;
        let o:any;
        let u:any;

        a=this.cad.toLowerCase().split("a");
        e=this.cad.toLowerCase().split("e");
        i=this.cad.toLowerCase().split("i");
        o=this.cad.toLowerCase().split("o");
        u=this.cad.toLowerCase().split("u");
        
        return `a=${a.length-1}\n e=${e.length-1}\n i=${i.length-1}\n o=${o.length-1}\n u=${u.length-1}\n `;
    }

    get contarLet():number{
        let letras:string=(this.cad.toLowerCase()).replace(" ","");
        return letras.length
    }

    get contarPal():number{
        let ar:any=this.cad.split(" ");
        return ar.length
    }

}