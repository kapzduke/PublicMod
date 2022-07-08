const multiTurretLib = require("multiTurretType")

// luxDuck's content

// rip

const ripBackfire = extend(BasicBulletType, {
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
        ripBackfire.create(b, b.x, b.y, b.rotation() - 180, 1, 1);
    }
});

const rip = extend(PowerTurret, "rip", {
    shootType: ripDisk,
});

// crow

const crowLaser = extend(LaserBulletType, {
    colors : [Color.valueOf("e56666"),Color.valueOf("e56666"),Color.valueOf("ffffff")],
    hitEffect : Fx.hitMeltdown,
    despawnEffect : Fx.none,
    damage: 65,
    hitSize : 16,
    lifetime : 36,
    length : 180,
    width : 10,
    sideLength: 0,
    sideWidth: 0,
    sideAngle: 0,
});

const crow = extend(PowerTurret, "crow", {});
crow.buildType = () => extend(PowerTurret.PowerTurretBuild, crow, {
    creload : 0,
    updateTile(){
        this.super$updateTile();
        let rx = this.x + Mathf.sin(this.rotation) * 10
        let ry = this.y + Mathf.cos(this.rotation) * 10

        if(this.isShooting() && this.power.status > 0.5 && this.hasAmmo() && this.creload >= 10){
            this.creload = 0
            crowLaser.create(this, this.team, rx, ry, this.rotation)
            Fx.absorb.at(rx, ry)
            Sounds.bigshot.at(this)
        }
        else{
            if(this.creload < 10){this.creload += 1} 
        }
    },
});

// end luxDuck's content
