const Calc:any = {
    random(min, max){
        //retornar numero inteiro entre o mínimo e o maximo

        return Math.floor(Math.random() * (max - min) + min)
    },
    newSectionId(){

        

        let caracteres = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        console.log(caracteres[10])

        let parte1 = "";
        let parte2 = "";
        let parte3 = "";
        let parte4 = "";

        let rand1 = this.random(0, 61);
        let rand2 = this.random(0, 61);
        let rand3 = this.random(0, 61);
        let rand4 = this.random(0, 61);

   
        for (let i = 0; i < 5; i++) {
            
        
            
            parte1 += caracteres[rand1];
            parte2  += caracteres[rand2];
            parte3 += caracteres[rand3];
            parte4 += caracteres[rand4];

            rand1 = this.random(0, 36);
            rand2 = this.random(0, 36);
            rand3 = this.random(0, 36);
            rand4 = this.random(0, 36);
                 
        }

        return parte1 +"-"+ parte2 +"-"+ parte3 +"-"+ parte4
    }
}

export default Calc;