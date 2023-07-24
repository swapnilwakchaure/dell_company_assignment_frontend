const username = (name) => {

    let res = name[0];

    for(let i=0; i<name.length; i++) {
        if (name[i] === ' ') {
            res = res + name[i+1];
            break;
        }
    }

    return res;
}

export { username };