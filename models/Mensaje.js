
module.exports=class Mensaje{

    //constructor
    constructor(texto,destinatario,prioridad,fechaEnvio){
        this.texto=texto
        this.destinatario=destinatario
        this.fechaCreacion=new Date()
        this.fechaEnvio=fechaEnvio
        this.prioridad=prioridad
    }

    //getter y setter
    getTexto(){
        return this.texto
    }
    setTexto(texto){
        this.texto=texto
    }
    getDestinatario(){
        return this.destinatario
    }
    setDestinatario(destinatario){
        this.destinatario=destinatario
    }

    //metodos privados
    encriptar(){
        //METODO1
        let textoEncriptado=this.texto
        textoEncriptado=textoEncriptado.replace(/a/ig,'*')
        textoEncriptado=textoEncriptado.replace(/e/ig,'=')
        textoEncriptado=textoEncriptado.replace(/i/ig,'&')
        textoEncriptado=textoEncriptado.replace(/o/ig,'%')
        textoEncriptado=textoEncriptado.replace(/u/ig,'$')
        //METODO2
        /*let textoEncriptado=''
        for(let i=0;i<this.texto.length;i++){
            if(this.texto[i]=='a') textoEncriptado+='*'
            else if(this.texto[i]=='e') textoEncriptado+='='
            else if(this.texto[i]=='i') textoEncriptado+='&'
            else if(this.texto[i]=='o') textoEncriptado+='%'
            else if(this.texto[i]=='u') textoEncriptado+='$'
            else textoEncriptado+=this.texto[i]
        }*/
        return textoEncriptado
    }

    desencriptar(text){
        let iv = Buffer.from(text.iv, 'hex');
        let encryptedText = Buffer.from(text.encryptedData, 'hex');
        let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString();                
    }
    validar(){  
        return "esto valida el texto del mensaje"
    }

    calcularIMC(){
        let peso=70
        let estatura=180
        let resultado=((estatura/100)^2)/peso
        if(resultado<20)
            return "Tu IMC es " + resultado + ". Estas flaco."
        else if(resultado>=20 && resultado<=25)
            return "Tu IMC es " + resultado + ". Estas en tu peso."
        else    
            return "Tu IMC es " + resultado + ". Estas gordo."
        
    }

}