module.exports = {

const redBlast = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("e56666"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 4 + e.finpow() * 20);

    Draw.color(Color.valueOf("e56666"));
    for(let i = 0; i < 8; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*45);
    }

    Draw.color();
    for(let i = 0; i < 8; i++){
        Drawf.tri(e.x, e.y, 3, 12 * e.fout(), i*45);
    }
});

};