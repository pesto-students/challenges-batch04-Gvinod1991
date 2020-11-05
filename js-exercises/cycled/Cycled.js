class Cycled {
    constructor(arr){
        this.arr=arr;
    }
    *arrGenerator() {
        for (const element of this.arr) {
            yield element;
        }
    }
    current(){
        const gen=this.arrGenerator();
        const result=gen.next();
        return result.value;
    }
    next(){
        let gen= this.arrGenerator();
        let result= gen.next();
        while(!result.done){

            result=gen.next();
        }
        return result.value
    }
}
const c = new Cycled([1,2,3]);
export { Cycled };
