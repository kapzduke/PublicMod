const multiTurretLib = require("multiTurretType")

// effects

const redBlast = new Effect(40, 100, e => {
    Draw.color(Color.valueOf("e56666"));
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, e.finpow() * 20);

    Draw.color(Color.valueOf("e56666"));
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 6, 10 * e.fout(), i*90+45);
    }

    Draw.color();
    for(let i = 0; i < 4; i++){
        Drawf.tri(e.x, e.y, 3, 3 * e.fout(), i*90+45);
    }
});

// end effects

// luxDuck's content

// rip

const ripDiskBack = extend(BasicBulletType, {
    width: 18,
    height: 18,

    damage: 60,
    speed: 3,
    shrinkY: 0,
    spin: -3,
    lifetime : 40,
    sprite: "large-bomb",
    pierce: true,

    despawnEffect: Fx.hitLancer,
    frontColor: Color.valueOf("ffffff"),
    backColor: Color.valueOf("33AEDA"),
});

const ripDisk = extend(BasicBulletType, {
    width : 18,
    height: 18,

    damage : 60,
    speed : 3,
    shrinkY: 0,
    spin: 3,
    lifetime : 40,
    sprite: "large-bomb",
    pierce : true,

    despawnEffect : Fx.hitLancer,
    frontColor : Color.valueOf("ffffff"),
    backColor  : Color.valueOf("33AEDA"),

    despawned(b){
        ripDiskBack.create(b, b.x, b.y, b.rotation() - 180, 1, 1);
    }
});

const rip = extend(PowerTurret, "rip", {
    shootType: ripDisk,
    recoilAmount: 4,
});

// end rip
// crow

const crowLaser = extend(LaserBulletType, {
    colors : [Color.valueOf("e56666"),Color.valueOf("e56666"),Color.valueOf("ffffff")],
    hitEffect : Fx.hitMeltdown,
    despawnEffect : Fx.none,
    damage: 65,
    hitSize : 16,
    lifetime : 36,
    length : 180,
    width : 7,
    sideLength: 0,
    sideWidth: 0,
    sideAngle: 0,
});

const crow = extend(PowerTurret, "crow", {});
crow.buildType = () => extend(PowerTurret.PowerTurretBuild, crow, {
    creload : 0,
    updateTile(){
        this.super$updateTile();

        if(this.isShooting() && this.power.status > 0.5 && this.hasAmmo() && this.creload >= 30){
            this.creload = 0
            crowLaser.create(this, this.team, this.x, this.y, this.rotation)
            redBlast.at(this.x, this.y)
            Sounds.bigshot.at(this)
        }
        else{
            if(this.creload < 30){this.creload += 1} 
        }
    },
});

// end crow
// hawk

const hawkOrbEffect = extend(WaveEffect, {
    sides: 8,
    sizeFrom: 16,
    sizeTo: 0,
    lifetime: 100,
    strokeFrom: 0,
    strokeTo: 4,
    colorFrom: Color.valueOf("e56666"),
    colorTo: Color.valueOf("ffffff"),
});

const hawkOrbBeam = extend(ShrapnelBulletType, {
    width : 10,
    length: 40,
    serrations: 6,

    damage : 105,
    lifetime : 20,
    pierce : true,

    hitEffect: Fx.hitLancer,
    fromColor : Color.valueOf("e56666"),
    backColor  : Color.valueOf("e56666"),
});

const hawkOrb = extend(MissileBulletType, {
    width : 6,
    height: 6,

    damage : 75,
    speed : 1,
    shrinkY: -0.4,
    shrinkX: -0.4,
    lifetime : 100,
    sprite: "circle-bullet",
    pierce : true,

    despawnEffect : redBlast,
    trailEffect: hawkOrbEffect,
    weaveScale: 0,
    weaveMag: 0,
    trailSpacing: 99999,
    parentizeEffects: true,
    hitEffect: Fx.none,
    frontColor : Color.valueOf("e56666"),
    backColor  : Color.valueOf("e56666"),

    fragBullet: hawkOrbBeam,
    fragBullets: 6,
    fragCone: 360
});

const hawk = extend(PowerTurret, "hawk", {
    shootType: hawkOrb,
    recoilAmount: 4,
    range: 200,
});

// end hawk

// end luxDuck's content
