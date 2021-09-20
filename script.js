function diamond(l, i = 1) {

    const
        ZVAIGZNE = '+',
        ATSTARPE = ' ',
        LINIJA = ATSTARPE.repeat((l - i) / 2) + ZVAIGZNE.repeat(i);

    
    console.log(LINIJA);

    if (i >= l) return;

    diamond(l, i + 2);
    console.log(LINIJA);
}
diamond(7);