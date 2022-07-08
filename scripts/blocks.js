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

const crowBeam = extend(SapBulletType, {
	sapStrength: 0.87,
	damage: 60,
	lifetime: 20,
	length: 250,
	color: Color.valueOf("e56666"),
	hitColor: Color.valueOf("e56666"),
	statusDuration: 280,
	width: 0.86
});

const crowBeamMount = multiTLib.newWeapon(crowBeam, "");
unoMount.reloadTime = 45;
unoMount.ammoPerShot = 5;
unoMount.x = 2.75;
unoMount.y = 2.75;
unoMount.shootY = 13/4;
unoMount.recoilAmount = 1;
unoMount.range = 9 * 8;
unoMount.title = "Uno"

// end luxDuck's content
