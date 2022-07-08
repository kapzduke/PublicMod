// luxDuck's content

// rip

const ripBackfire = extend(BasicBulletType, {
    width: 18,
    height: 18,

    damage: 30,
    speed: 6,
    spin: -3
    lifetime : 20,
    sprite: "large-bomb"
    pierce: true,

    despawnEffect: Fx.hitLancer,
    frontColor: Color.valueOf("ffffff"),
    backColor: Color.valueOf("ffaa5f"),
});

const ripDisk = extend(BasicBulletType, {
    width: 18,
    height: 18,

    damage: 30,
    speed: 6,
    spin: 3
    lifetime: 20,
    sprite: "large-bomb"
    pierce: true,

    despawnEffect: Fx.hitLancer,
    shootEffect: Fx.hitLancer
    frontColor: Color.valueOf("ffffff"),
    backColor: Color.valueOf("ffaa5f"),

    despawned(b){
        ripBackfire.create(b, b.x, b.y, b.rotation() - 180, 1, 1);
    }
});

const rip = extend(PowerTurret, "rip", {
    shootType: ripDisk,
});

// end luxDuck's content