function getArea(dimensioni) {
    if(dimensioni[0] >= 0 && dimensioni[1] >= 0) {
        return 2 * dimensioni[0] + 2 * dimensioni[1];
    } else {
        return -1;
    }
}

export{getArea};