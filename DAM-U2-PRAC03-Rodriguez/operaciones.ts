export class Operaciones{
    aux:number;
    x:number;
    constructor(){
        
    }

    resSum(n1:number,n2:number):number{
        return n1+n2
    }
    resRes(n1:number,n2:number):number{
        return n1-n2
    }
    resFac(n1:number):number{
        this.aux=1;
        for(this.x=1;this.x<=n1;this.x++){
            this.aux*=this.x;
        }
        return this.aux;
    }
    resPri(n1:number):String{
        this.aux=0;
        for(this.x=1;this.x<=n1;this.x++){
            if(n1%this.x==0){
                this.aux++;
            }
        }
        if(this.aux>2){
            return `El número ${n1} no es primo`
        }
        return `El número ${n1} es primo`

    }
}