
export const int2VND = (price) =>{
    const str = String(price)
    const res = ""
    let c = 0;

    for (let i = str.length - 1; i >= 0; i--){
        // console.log(res, c)
        if (c == 3){
            c = 1
            res = str.charAt(i, 1) + "," + res
        }else{
            res = str.charAt(i, 1) + res
            c++
        }
    }
    return res
}