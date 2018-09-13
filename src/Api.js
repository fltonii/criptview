export const api = {
    getTop: async () => {
        return await fetch(`https://min-api.cryptocompare.com/data/top/totalvol?tsym=BRL&page=2`)
        .then(res => res.json())
        .then(data => {
            return data
        })
        .catch(err => {
            console.error(err);
        });
    }
}