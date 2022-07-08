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

const crowMountBeam = extend(SapBulletType, {
	sapStrength: 0.87,
	damage: 60,
	lifetime: 20,
	length: 273,
	color: Color.valueOf("e56666"),
	hitColor: Color.valueOf("e56666"),
	width: 0.86
});

const crowMount = multiTLib.newWeapon(crowBeam, "publicmod-crowM");
crowBeamMount.reloadTime = 45;
crowBeamMount.ammoPerShot = 5;
crowBeamMount.x = 0;
crowBeamMount.y = 2.75;
crowBeamMount.shootY = 13/4;
crowBeamMount.recoilAmount = 1;
crowBeamMount.range = 250;
crowBeamMount.title = "Beam Mount"

const crowWeapons = [crowMount];

const crowBolt = extend(BasicBulletType, {
    width: 15,
    height: 15,

    damage: 65,
    speed: 3,
    shrinkY: 0,
    lifetime: 50,
    pierce: false,
    absorbable: true,

    despawnEffect: Fx.hitMeltdown,
    hitEffect: Fx.hitMeltdown,
    frontColor: Color.valueOf("e78888"),
    backColor: Color.valueOf("e56666"),
});

const crow = multiTurretLib.newMultiTurret("crow", crowWeapons, Items.lead, crowBolt, 80, 20, "Crow");
crow.size = 2;
crow.range = 15 * 8;
crow.maxAmmo = 225;
crow.ammoPerShot = 12;
crow.recoil = 2;
crow.reloadTime = 21;
crow.requirements = ItemStack.with(Items.copper, 135, Items.lead, 40, Items.graphite);
crow.category = Category.turret;

// end luxDuck's content
