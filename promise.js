function getData(name) {
    if (name == "Willis") {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ name: "Willis", age: Math.floor(Math.random() * 10) });
            }, 2000);
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Not allowed to access data."));
            }, 2000);
        });
    }
}

function getMovies(age) {
    if (age < 12) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ text: "cartoon" });
            }, 1500);
        });
    } else if (age < 18) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ text: "teen movies" });
            }, 1500);
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("not allowed . Too old."));
            }, 1500);
        });
    }
}
// async await try catch 
async function showMovie() {
    try {
        const obj = await getData("Willis");
        const movie = await getMovies(obj.age);
        console.log(movie.text);
    } catch (e) {
        console.log(e);
    }
}


showMovie();