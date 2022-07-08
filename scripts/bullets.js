const effects = require("effects")

const redBoltSmall = extend(BasicBulletType, 2, 4, "bullet", {
  
    width: 15,
    height: 40,
    frontColor: Color.white,
    backColor: Color.valueOf("e56666"),

    lifetime: 20,
    damage: 95,
    pierce: true,
    pierceCap: 3
    hittable: false,
    absorbable: true,
    reflectable: true,
    trailLength: 20
    trailWidth: 2
    trailColor: Color.valueOf("e56666"),
    keepVelocity: false,
    pierceBuilding: true,
  
    hitSound: Sounds.spark,
    hitEffect: effects.redHit,
    status: statuses.burning,
    statusDuration: 75,
    buildingDamageMultiplier: 0.7
})