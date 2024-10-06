class formatDatabyte{
    constructor(bytes){
        this._bytes = E(bytes);
    }
    static fromGB(GBs){ // 2^30
        return new formatDatabyte(GBs.mul(1073741824))
    }
    static fromMB(MBs){ // 2^20
        return new formatDatabyte(MBs.mul(1048576))
    }
    static fromKB(KBs){ // 2^10
        return new formatDatabyte(MBs.mul(1024))
    }
    static fromBytes(Bs){ 
        return new formatDatabyte(Bs)
    }
    static fromTB(TBs){
        return new formatDatabyte(TBs.mul(2**40))
    }
    static fromPB(PBs){
        return new formatDatabyte(PBs.mul(2**50))
    }
    copyFrom(other) {
        this._bytes = other._bytes
    }
    get totalPerabytes(){
        return this._bytes.div(2**50)
    }
    get totalTerabytes(){
        return this._bytes.div(2**40)
    }
    get totalGigabytes(){
        return this._bytes.div(2**30)
    }
    get totalMegabytes(){
        return this._bytes.div(2**20)
    }
    get totalKilobytes(){
        return this._bytes.div(2**10)
    }
    get totalBytes(){
        return this._bytes.clone()
    }

    get modularedPerabytes(){
        return this.totalPerabytes.floor()
    }
    get modularedTerabytes(){
        return this.totalTerabytes.mod(1024).floor()
    }
    get modularedGigabytes(){
        return this.totalGigabytes.mod(1024).floor()
    }
    get modularedMegabytes(){
        return this.totalMegabytes.mod(1024).floor()
    }
    get modularedKilobytes(){
        return this.totalKilobytes.mod(1024).floor()
    }
    get modularedBytes(){
        return this.totalBytes.mod(1024).floor()
    }
    toString(){
        let result = ""
        if (this.modularedPerabytes.neq(0)){
            result += `${this.modularedPerabytes.format()} PB `
        }
        if (this.modularedTerabytes.neq(0)){
            result += `${this.modularedTerabytes.format()} TB `
        }
        if (this.modularedGigabytes.neq(0)){
            result += `${this.modularedGigabytes.format()} GB `
        }
        if (this.modularedMegabytes.neq(0)){
            result += `${this.modularedMegabytes.format()} MB `
        }
        if (this.modularedKilobytes.neq(0)){
            result += `${this.modularedKilobytes.format()} KB `
        }
        if (this.modularedBytes.neq(0)){
            result += `${this.modularedBytes.format()} B `
        }
        return result
    }
}