let codexData = {
	"Slots": {
		"Defensiva": "Shield, Helmet, Chest, Pants, Amulet [+50%].",
		"Offensive": "1H Weapon, 2H Weapon [+100%], Off-Hand, Gloves, Amulet [+50%], Ring.",
		"Resource": "Helmet, Amulet [+50%], Ring.",
		"Utility": "Helmet, Chest, Boots, Gloves, Amulet [+50%].",
		"Mobility": "Boots, Amulet [+50%]."
	},
	"General": {
		"Defensiva": {
			"Aspect of the Deflecting Barrier": {
				"power": "While you have a Barrier active, there is a 20% chance to ignore incoming direct damage from Distant enemies.",
				"region": "Hawezar",
				"id": 0
			},
			"Aspect of Disobedience": {
				"dungeon": "Halls of the Damned",
				"power": "You gain 0.25% increased Armor for 4 segundos when you deal any form of damage, stacking up to 25.00%.",
				"region": "Kehjistan",
				"id": 1
			},
			"Aspect of Might": {
				"dungeon": "Dark Ravine",
				"power": "Basico Skills grant 25% Damage Reduction for 4.0 segundos.",
				"region": "Dry Steppes",
				"id": 2
			},
			"Protecting Aspect": {
				"dungeon": "Caldera Gate",
				"power": "When struck, a magical bubble forms around you for 8 segundos, absorbing # damage. Can only occur once per 10 segundos.",
				"region": "Fractured Peaks",
				"id": 3
			},
			"Aspect of the Protector": {
				"dungeon": "Lost Archives",
				"power": "Every 10 segundos, gain a Barrier absorbing up to # damage.",
				"region": "Fractured Peaks",
				"id": 4
			}
		},
		"Offensive": {
			"Edgemaster's Aspect": {
				"power": "Skills deal up to x24% increased damage based on available resource when cast, receiving the full benefit while at full resource.",
				"region": "Scosglen",
				"id": 5
			},
			"Aspect of the Expectant": {
				"power": "Enemies hit with Basico Skills increases the damage of your next Core Skill by x5.0%, up to x50%.",
				"region": "Scosglen",
				"id": 6
			},
			"Aspect of Inner Calm": {
				"power": "Deal x3.0% increased damage for each second you stand still, up to x30%.",
				"region": "Scosglen",
				"id": 7
			},
			"Needleflare Aspect": {
				"power": "Thorns damage dealt has a 20% chance to deal damage to all enemies around you.",
				"region": "Kehjistan",
				"id": 8
			},
			"Aspect of Pummeling": {
				"power": "Deal x40% increased damage to Stunned, Knocked Down, and Frozen enemies.",
				"region": "Kehjistan",
				"id": 9
			},
			"Rapid Aspect": {
				"power": "Basico Skills gain 23% Attack Speed.",
				"region": "Dry Steppes",
				"id": 10
			},
			"Aspect of Retribution": {
				"dungeon": "Abandoned Mineworks",
				"power": "Distant enemies have a 15% chance to be Stunned for 2 segundos when they hit you. You deal 30% increased damage to Stunned enemies.",
				"region": "Kehjistan",
				"id": 11
			}
		},
		"Resource": {
			"Aspect of the Umbral": {
				"power": "Restore 1 resource when you Crowd Control an enemy.",
				"region": "Dry Steppes",
				"id": 12
			}
		},
		"Utility": {
			"Aspect of Shared Misery": {
				"power": "Lucky Hit: When you hit a Crowd Controlled enemy, there is up to a 30% chance for that Crowd Control effect to spread to another unaffected enemy.",
				"region": "Hawezar",
				"id": 13
			}
		},
		"Mobility": {
			"Ghostwalker Aspect": {
				"power": "You may move freely through enemies while below 40% total Life.",
				"region": "Scosglen",
				"id": 14
			},
			"Wind Striker Aspect": {
				"power": "Critical Strikes grant 8.0% Movement Speed for 1 second. The duration can be extended.",
				"region": "Kehjistan",
				"id": 15
			}
		}
	},
	"Barbarian": {
		"Defensiva": {
			"Aspect of Bul-Kathos": {
				"power": "Leap creates an Earthquake that deals # Physical damage over 4 segundos. While standing in Earthquakes, you gain 5% increased Damage Reduction.",
				"region": "Hawezar",
				"id": 16
			},
			"Aspect of the Iron Warrior": {
				"power": "Iron Skin also makes you Unstoppable.",
				"region": "Dry Steppes",
				"id": 17
			},
			"Aspect of Numbing Furia": {
				"power": "Each point of Fury generated while at maximum Fury grants # Fortify.",
				"region": "Hawezar",
				"id": 18
			},
			"Aspect of Tempering Blows": {
				"dungeon": "Defiled Catacomb",
				"power": "After swapping weapons 6 times, gain # Fortify.",
				"region": "Fractured Peaks",
				"id": 19
			}
		},
		"Offensive": {
			"Aspect of Ancestral Echoes": {
				"power": "Lucky Hit: Damaging enemies with Leap, Upheaval, or Whirlwind has up to a 40% chance to summon an Ancient to perform the same Skill. Can only happen once every 5 segundos.",
				"region": "Hawezar",
				"id": 20
			},
			"Aspect of Ancestral Force": {
				"power": "Hammer of the Ancients quakes outwards, dealing 32% of its damage to enemies.",
				"region": "Scosglen",
				"id": 21
			},
			"Aspect of Berserk Ripping": {
				"power": "Whenever you deal direct damage while Berserking, inflict 22% of the base damage dealt as additional Bleeding damage over 5 segundos.",
				"region": "Dry Steppes",
				"id": 22
			},
			"Brawler's Aspect": {
				"power": "Enemies damaged by Kick or Charge will explode if they are killed within the next 2 segundos, dealing # damage to surrounding enemies.",
				"region": "Hawezar",
				"id": 23
			},
			"Death Wish Aspect": {
				"power": "Gain # Thorns while Berserking.",
				"region": "Scosglen",
				"id": 24
			},
			"Aspect of the Dire Whirlwind": {
				"power": "Whirlwind's Critical Strike Chance is increased by 5% for each second it is channeled, up to 20%.",
				"region": "Scosglen",
				"id": 25
			},
			"Aspect of Quickening Pulse": {
				"power": "Lucky Hit: Up to a 20% chance to reduce the Cooldowns of your non-Ultimate Skills by 1.5 segundos when you inflict Bleeding on Elites.",
				"region": "Kehjistan",
				"id": 26
			},
			"Veteran Brawler's Aspect": {
				"power": "Each time a Core Skill deals direct damage to an enemy, your next Charge or Leap deals x15% increased damage, up to 225%.",
				"region": "Kehjistan",
				"id": 27
			},
			"Windstriker's Aspect": {
				"power": "After swapping weapons 6 times, gain 20% increased Attack Speed for 4 segundos.",
				"region": "Hawezar",
				"id": 28
			}
		},
		"Resource": {
			"Aspect of Echoing Fury": {
				"power": "Your Shout Skills generate 2.0 Fury per second while active.",
				"region": "Kehjistan",
				"id": 29
			},
			"Aspect of the Relentless Armsmaster": {
				"power": "Gain x20% increased Fury Generation while all damage bonuses from Walking Arsenal are active.",
				"region": "Scosglen",
				"id": 30
			},
			"Slaking Aspect": {
				"dungeon": "Maulwood",
				"power": "Lucky Hit: You have up to a 30% chance to gain 20 Fury when Rend deals direct damage to at least one Bleeding enemy.",
				"region": "Fractured Peaks",
				"id": 31
			},
			"Aspect of Unrelenting Fury": {
				"power": "Killing an enemy with a Core Skill refunds 10.0% of its base Fury cost. Can only happen once per Skill cast.",
				"region": "Fractured Peaks",
				"id": 32
			}
		},
		"Utility": {
			"Aspect of Anemia": {
				"dungeon": "Kor Dragan Barracks",
				"power": "Lucky Hit: Direct damage against Bleeding enemies has up to a 31% chance to Stun them for 2 segundos.",
				"region": "Fractured Peaks",
				"id": 33
			},
			"Relentless Berserker's Aspect": {
				"power": "Lucky Hit: Damaging an enemy with a Core Skill has up to a 22% chance to extend the duration of Berserking by 1 second. Double this duration if it was a Critical Strike.",
				"region": "Kehjistan",
				"id": 34
			}
		},
		"Mobility": {
			"Aspect of Perpetual Stomping": {
				"power": "Damaging an enemy with Kick or Ground Stomp resets Leap's Cooldown.",
				"region": "Dry Steppes",
				"id": 35
			}
		}
	},
	"Druid": {
		"Defensiva": {
			"Aspect of Cyclonic Force": {
				"power": "Cyclone Armor also provides Physical Damage Reduction. In addition, Cyclone Armor will also be applied to all Nearby Allies.",
				"region": "Kehjistan",
				"id": 36
			},
			"Aspect of Mending Stone": {
				"power": "The duration of Earthen Bulwark is increased by 6 segundos. In addition, killing an enemy with Earth Skills replenishes # of your active Earthen Bulwark's barrier.",
				"region": "Dry Steppes",
				"id": 37
			},
			"Skinwalker's Aspect": {
				"dungeon": "Fading Echo",
				"power": "When you use a Shapeshifting Skill that changes your form, gain # Life. If you are at full Life, gain the same amount as Fortify.",
				"region": "Kehjistan",
				"id": 38
			},
			"Stalking Beast Aspect": {
				"dungeon": "Anica's Claim",
				"power": "Gain Stealth for 2 segundos when killing enemies with Shred. Breaking Stealth with an attack grants Ambush which guarantees Critical Strikes for 1.0 segundos.",
				"region": "Fractured Peaks",
				"id": 39
			},
			"Vigorous Aspect": {
				"power": "Gain 10.0% Damage Reduction while Shapeshifted into a Werewolf.",
				"region": "Hawezar",
				"id": 40
			}
		},
		"Offensive": {
			"Crashstone Aspect": {
				"power": "Earth Skills deal x40% more Critical Strike damage to Crowd Controlled enemies.",
				"region": "Scosglen",
				"id": 41
			},
			"Nighthowler's Aspect": {
				"dungeon": "Forbidden City",
				"power": "Blood Howl increases Critical Strike Chance by 5.0%. In addition, Blood Howl also affects Nearby Pets and Players for 3 segundos.",
				"region": "Fractured Peaks",
				"id": 42
			},
			"Overcharged Aspect": {
				"power": "Lucky Hit: Up to a 10% chance when dealing Lightning damage to overload the target for 3 segundos, causing any direct damage you deal to them to pulse # additional damage to surrounding enemies.",
				"region": "Scosglen",
				"id": 43
			},
			"Aspect of the Rampaging Werebeast": {
				"power": "The duration of Grizzly Rage is increased by 1 segundos. In addition, Critical Strikes while Grizzly Rage is active increase your Critical Strike Damage by 10% for the duration.",
				"region": "Hawezar",
				"id": 44
			},
			"Aspect of Retaliation": {
				"power": "Your Core Skills deal up to x20% increased damage based on your percent Fortified Health.",
				"region": "Dry Steppes",
				"id": 45
			},
			"Shepherd's Aspect": {
				"power": "Core Skills deal an additional 6.0% damage for each active Pet.",
				"region": "Dry Steppes",
				"id": 46
			},
			"Aspect of the Tempest": {
				"power": "Hurricane damage is increased by x7.0% each second while active.",
				"region": "Hawezar",
				"id": 47
			},
			"Aspect of the Ursine Horror": {
				"dungeon": "Belfry Zakara",
				"power": "Pulverize is now also an Earth Skill. After casting Pulverize, tectonic spikes continue to deal # damage over 2 segundos.",
				"region": "Hawezar",
				"id": 48
			}
		},
		"Resource": {
			"Aspect of the Changeling's Debt": {
				"power": "Werebear Skills restore 1.0 Espirito when you hit enemies afflicted by your Poisons. When Espirito is restored, your Poison effects are removed from the enemy.",
				"region": "Kehjistan",
				"id": 49
			},
			"Mangled Aspect": {
				"dungeon": "Immortal Emanation",
				"power": "Gain 1 Espirito when you are struck as a Werebear.",
				"region": "Fractured Peaks",
				"id": 50
			},
			"Storm Beast's Aspect": {
				"power": "Lucky Hit: Storm Skills have up to a 15% chance to grant 10 Espirito.\n\nYour base Storm Skills are now also Werewolf Skills.",
				"region": "Dry Steppes",
				"id": 51
			},
			"Aspect of the Unsatiated": {
				"dungeon": "Tormented Ruins",
				"power": "After killing an enemy with Shred, your next Werewolf Skill generates x20% more Espirito and deals x20% increased damage.",
				"region": "Fractured Peaks",
				"id": 52
			}
		},
		"Utility": {
			"Ballistic Aspect": {
				"power": "When you have Fortified Life your Earth Skills gain +3.",
				"region": "Scosglen",
				"id": 53
			},
			"Aspect of Quicksand": {
				"power": "Damage from Earth Skills Slow enemies hit by 25% for 5 segundos.",
				"region": "Scosglen",
				"id": 54
			},
			"Stormshifter's Aspect": {
				"power": "While Hurricane is active, gain +3 to your Shapeshifting Skills.",
				"region": "Kehjistan",
				"id": 55
			}
		},
		"Mobility": {}
	},
	"Necromancer": {
		"Defensiva": {
			"Aspect of Grasping Veins": {
				"power": "Enemies who are Stunned by Corpse Tendrils are also made Vulnerable for its duration. If they die while Stunned, they have a 15% chance to spawn a Blood Orb.",
				"region": "Kehjistan",
				"id": 56
			}
		},
		"Offensive": {
			"Blighted Aspect": {
				"power": "The Shadowblight Passive deals x15% increased damage against Slowed or Chilled enemies, and x30% increased damage against Stunned enemies instead.",
				"region": "Hawezar",
				"id": 57
			},
			"Blood-bathed Aspect": {
				"dungeon": "Hoarfrost Demise",
				"power": "Blood Surge's nova echoes again after a short delay, dealing x60% less damage.",
				"region": "Fractured Peaks",
				"id": 58
			},
			"Blood Seeker's Aspect": {
				"power": "Blood Lance deals x15% increased damage to its primary target per lanced target.",
				"region": "Fractured Peaks",
				"id": 59
			},
			"Aspect of Bursting Bones": {
				"power": "When a segment of Bone Prison is destroyed or expired, it deals # damage in an area around itself.",
				"region": "Dry Steppes",
				"id": 60
			},
			"Aspect of the Damned": {
				"power": "You deal x30% increased Shadow Damage to enemies afflicted by both Decrepify and Iron Maiden.",
				"region": "Kehjistan",
				"id": 61
			},
			"Aspect of Empowering Reaper": {
				"power": "Each target hit along Sever's path increases the scythe's damage by x6%, up to x30%.",
				"region": "Scosglen",
				"id": 62
			},
			"Aspect of Possessed Blood": {
				"power": "When you pick up 5 Blood Orbs, a free Bone Espirito is spawned, dealing bonus damage based on your current Life percent.",
				"region": "Dry Steppes",
				"id": 63
			},
			"Aspect of Reanimation": {
				"power": "Your Skeletons gain increased damage while alive, up to x20% after 10 segundos.",
				"region": "Scosglen",
				"id": 64
			},
			"Sacrificial Aspect": {
				"power": "Your Sacrifice bonuses are increased by 15%.",
				"region": "Hawezar",
				"id": 65
			},
			"Aspect of Swelling Curse": {
				"power": "Bone Espirito deals increased damage based on distance traveled, up to x15%.",
				"region": "Scosglen",
				"id": 66
			},
			"Unyielding Commander's Aspect": {
				"power": "While Army of the Dead is active, your Minions gain 70% Attack Speed and take 90% reduced damage.",
				"region": "Hawezar",
				"id": 67
			}
		},
		"Resource": {
			"Fastblood Aspect": {
				"power": "Blood Orbs reduce your Ultimate Cooldown by 0.5 segundos.",
				"region": "Hawezar",
				"id": 68
			},
			"Flesh-Rending Aspect": {
				"power": "After Decompose spawns a Corpse, gain 10 Essence.",
				"region": "Fractured Peaks",
				"id": 69
			},
			"Hulking Aspect": {
				"power": "Each time your Golem damages an enemy, its active Cooldown is reduced by 1 segundos.",
				"region": "Kehjistan",
				"id": 70
			},
			"Aspect of Potent Blood": {
				"power": "While at full Life, Blood Orbs grant 10 Essence.",
				"region": "Dry Steppes",
				"id": 71
			},
			"Requiem Aspect": {
				"power": "You gain 3.0 maximum Essence per active Minion.",
				"region": "Scosglen",
				"id": 72
			}
		},
		"Utility": {
			"Aspect of Torment": {
				"dungeon": "Black Asylum",
				"power": "Critical Strikes with Bone Skills increase your Essence Regeneration by x20% for 4 segundos.",
				"region": "Fractured Peaks",
				"id": 73
			},
			"Torturous Aspect": {
				"power": "Enemies afflicted by your Iron Maiden have a 15% chance to be Stunned for 1 second when they deal direct damage.",
				"region": "Kehjistan",
				"id": 74
			},
			"Aspect of the Void": {
				"dungeon": "Rimescar Cavern",
				"power": "Blight's defiled area, when spawned, Pulls in enemies around the affected area.",
				"region": "Fractured Peaks",
				"id": 75
			}
		},
		"Mobility": {}
	},
	"Rogue": {
		"Defensiva": {
			"Cheat's Aspect": {
				"power": "You take 15.0% less damage from Crowd Controlled enemies. Whenever a Crowd Controlled enemy deals direct damage to you, gain +15% Movement Speed for 2 segundos.",
				"region": "Scosglen",
				"id": 76
			},
			"Enshrouding Aspect": {
				"power": "Gain a Dark Shroud shadow every 3 segundos when standing still. Each Dark Shroud shadow grants 2.0% increased Damage Reduction.",
				"region": "Hawezar",
				"id": 77
			},
			"Aspect of Siphoned Protection": {
				"power": "Lucky Hit: Damaging a Vulnerable enemy with a Core Skill has up to a 20% chance to grant a Barrier for 5 segundos that absorbs # damage, up to a maximum of #.",
				"region": "Hawezar",
				"id": 78
			},
			"Aspect of Uncanny Resilience": {
				"power": "Whenever you trigger a Lucky Hit, gain x5% increased Damage Reduction for 5 segundos, up to a maximum of x15%.",
				"region": "Scosglen",
				"id": 79
			}
		},
		"Offensive": {
			"Aspect of Arrow Storms": {
				"power": "Lucky Hit: Your Ranged Skills have up to a 10% chance to create an arrow storm at the target's present location, dealing # Physical damage over 3 segundos. You can have up to 5 active arrow storms.",
				"region": "Scosglen",
				"id": 80
			},
			"Blast-Trapper's Aspect": {
				"power": "Lucky Hit: Dealing direct damage to enemies affected by your Trap Skills has up to a 30% chance to make them Vulnerable for 3 segundos.",
				"region": "Fractured Peaks",
				"id": 81
			},
			"Aspect of Branching Volleys": {
				"power": "Barrage's arrows have a 15% chance to split into 2 arrows whenever they ricochet.",
				"region": "Hawezar",
				"id": 82
			},
			"Aspect of Corruption": {
				"power": "Your Imbuements Skill effects have x20% increased potency against Vulnerable enemies.",
				"region": "Kehjistan",
				"id": 83
			},
			"Aspect of Encircling Blades": {
				"dungeon": "Hallowed Ossuary",
				"power": "Flurry damages enemies in a circle around you and deals x8% increased damage.",
				"region": "Fractured Peaks",
				"id": 84
			},
			"Opportunist's Aspect": {
				"power": "When you break Concealment, you drop a cluster of Stun Grenades around your location that explode, dealing # total Physical damage and Stunning enemies for 0.25 segundos.",
				"region": "Kehjistan",
				"id": 85
			},
			"Shadowslicer Aspect": {
				"power": "When you cast Dash, a Shadow Clone is spawned at your location that also casts Dash, dealing 25% of the base damage.",
				"region": "Scosglen",
				"id": 86
			},
			"Aspect of Sleeting Imbuements": {
				"power": "Your Rain of Arrows is always affected by all Imbuements Skills at once.",
				"region": "Hawezar",
				"id": 87
			},
			"Trickster's Aspect": {
				"power": "Caltrops also throw a cluster of Stun Grenades that explode and deal # total Physical damage and Stunning enemies for 0.25 segundos.",
				"region": "Dry Steppes",
				"id": 88
			},
			"Aspect of Unstable Imbuements": {
				"power": "Casting a Skill that is Imbued creates an explosion around you, dealing # damage of the same type.",
				"region": "Dry Steppes",
				"id": 89
			},
			"Vengeful Aspect": {
				"power": "Lucky Hit: Making an enemy Vulnerable has up to a 30% chance to grant +3% increased Critical Strike Chance for 3 segundos, up to +9%.",
				"region": "Kehjistan",
				"id": 90
			},
			"Aspect of Volatile Blades": {
				"power": "Twisting Blades cause an explosion when they return to you, dealing # damage and # additional damage based on the distance the blades travel, up to 5 meters and # total damage.",
				"region": "Scosglen",
				"id": 91
			},
			"Aspect of Volatile Shadows": {
				"power": "When a Dark Shroud shadow would be removed it explodes, dealing # Shadow damage around you.",
				"region": "Dry Steppes",
				"id": 92
			}
		},
		"Resource": {
			"Energizing Aspect": {
				"dungeon": "Sanguine Chapel",
				"power": "Damaging an Injured enemy with a Basico Skill generates 5 Energy.",
				"region": "Fractured Peaks",
				"id": 93
			},
			"Ravenous Aspect": {
				"power": "Killing a Vulnerable enemy grants you x50% increased Energy Regeneration for 4 segundos.",
				"region": "Dry Steppes",
				"id": 94
			}
		},
		"Utility": {
			"Aspect of Explosive Verve": {
				"dungeon": "Derelict Lodge",
				"power": "Your Grenades Skills count as Trap Skills. Whenever you arm a Trap or drop Grenades, you gain +10% increased Movement Speed for 3 segundos.",
				"region": "Fractured Peaks",
				"id": 95
			}
		},
		"Mobility": {}
	},
	"Sorcerer": {
		"Defensiva": {
			"Snowguard's Aspect": {
				"power": "While within your own Blizzard, you take 10% less damage.",
				"region": "Hawezar",
				"id": 96
			},
			"Snowveiled Aspect": {
				"power": "Casting Ice Armor makes you Unstoppable for 2.0 segundos.",
				"region": "Scosglen",
				"id": 97
			},
			"Aspect of the Unwavering": {
				"power": "Taking direct damage has a 5% chance to reset the Cooldown of one of your Defensiva Skills.",
				"region": "Kehjistan",
				"id": 98
			}
		},
		"Offensive": {
			"Aspect of Biting Cold": {
				"power": "When you Freeze an enemy there is a 25% chance they become Vulnerable for 3 segundos.",
				"region": "Dry Steppes",
				"id": 99
			},
			"Aspect of Conflagration": {
				"dungeon": "Light's Watch",
				"power": "While Channeling Incinerate, your Burning damage is increased by x20%.",
				"region": "Fractured Peaks",
				"id": 100
			},
			"Aspect of Control": {
				"power": "You deal 30% more damage to Immobilized, Stunned, or Frozen enemies.",
				"region": "Kehjistan",
				"id": 101
			},
			"Elementalist's Aspect": {
				"power": "Core or Mastery Skills cast at or above 100 Mana gain a 20.0% increased Critical Strike Chance.",
				"region": "Dry Steppes",
				"id": 102
			},
			"Aspect of Overwhelming Bolts": {
				"dungeon": "Wretched Delve",
				"power": "Charged Bolts gains 2 extra projectiles, but its Mana cost is increased by 5.0%.",
				"region": "Scosglen",
				"id": 103
			},
			"Aspect of Piercing Cold": {
				"dungeon": "Dead Man's Dredge",
				"power": "Ice Shards pierce 4 times, dealing 20% less damage per subsequent enemy hit.",
				"region": "Fractured Peaks",
				"id": 104
			},
			"Rolling Thunder Aspect": {
				"power": "Charged Bolts pierce, but deal x30% less damage.",
				"region": "Scosglen",
				"id": 105
			},
			"Aspect of Splintering Energy": {
				"power": "Lightning Spear has a 11% chance to spawn an additional Lightning Spear when you cast it.",
				"region": "Kehjistan",
				"id": 106
			},
			"Storm Swell Aspect": {
				"power": "You deal x11% increased damage to Vulnerable enemies while you have a Barrier.",
				"region": "Dry Steppes",
				"id": 107
			},
			"Aspect of Three Curses": {
				"power": "Meteor deals x35% increased Critical Strike Damage against Healthy targets.",
				"region": "Hawezar",
				"id": 108
			}
		},
		"Resource": {
			"Aspect of Efficiency": {
				"power": "Casting a Basico Skill reduces the Mana cost of your next Core Skill by 10%.",
				"region": "Scosglen",
				"id": 109
			},
			"Incendiary Aspect": {
				"power": "Killing a Burning enemy grants x5% Mana Cost reduction for 4 segundos, up to x15%.",
				"region": "Kehjistan",
				"id": 110
			},
			"Prodigy's Aspect": {
				"dungeon": "Witchwater",
				"power": "Casting an Ultimate Skill restores 80 Mana.",
				"region": "Hawezar",
				"id": 111
			},
			"Recharging Aspect": {
				"dungeon": "Zenith",
				"power": "Each time Chain Lightning bounces off you, gain 4 Mana.",
				"region": "Fractured Peaks",
				"id": 112
			}
		},
		"Utility": {
			"Aspect of Seared Flesh": {
				"power": "Every 5 times you deal Direct Fire Damage to an enemy, they are Immobilized for 2 segundos.",
				"region": "Hawezar",
				"id": 113
			}
		},
		"Mobility": {
			"Aspect of the Bounding Conduit": {
				"power": "Gain 20% Movement Speed for 3 segundos after Teleporting.",
				"region": "Dry Steppes",
				"id": 114
			},
			"Charged Aspect": {
				"power": "Collecting Crackling Energy increases your Movement Speed by 10% for 4 segundos.",
				"region": "Scosglen",
				"id": 115
			},
			"Flamewalker's Aspect": {
				"dungeon": "Cultist Refuge",
				"power": "Coming in contact with your Firewall grants you +15% Movement Speed for 4 segundos.",
				"region": "Fractured Peaks",
				"id": 116
			}
		}
	}
}

export { codexData };