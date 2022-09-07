
export async function fetchCur(base: string){
    return await fetch(`https://api.exchangerate.host/latest?base=${base}`).then(res => res.json());
}
