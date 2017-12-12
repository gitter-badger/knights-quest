// DO NOT EDIT OR MODIFY THIS SOURCE CODE. got heem
// � Copyright 1999.  Pok-Ching Lee.  All Rights Reserved.


// god mode when set to 1
mebeogd = 0;

// increases exp gains when set to 1
goodexp = 0;

// player object
let player = {
	name: '',
	gold: 0,
	level: 0,
	gear: { weapon: 0, shield: 0, armor: 0 },
	hp: { current: 0, max: 0 },
	mp: { current: 0, max: 0 },
	exp: { current: 0, next: 0 },
	stats: {
		strength: 0,
		endurance: 0,
		agility: 0,
		magic: 0,
		evade: 0
	},
	class: {
		fighter: 0,
		thief: 0,
		mage: 0,
		cleric: 0,
		baseStats: {
			mp: 0,
			hp: 0,
			strength: 0,
			endurance: 0,
			agility: 0,
			magic: 0,
		},
		modifier: {
			hp: 0,
			mp: 0,
			evade: 0
		}
	},
	quest: {
		boss: 0
	},
	items: {
		heal1: 0,
		heal2: 0,
		heal3: 0,
		heal4: 0,
		heal5: 0,
		heal6: 0,
	}
};

function opTest() {
	player.hp.max = 10000;
	player.mp.max = 10000;
}

function setnum(thenum, digits, place) {
	var tempnum = thenum;
	var tempnum = tempnum + "";
	while (tempnum.length < digits) {
		var tempnum = "b" + tempnum;
	}
	var loop = 0;
	while (loop < digits) {
		eval("document." + place + loop + ".src='pic/number/" + tempnum.charAt(loop) + ".gif';");
		loop++
	}
}

function setSave() {
	if (buttontype == 1) { setSave2() } else { alert("You can only save when you are in town") };
}

function setSave2() {
	var theconfirm = confirm("Your previous save game will be deleted and be replace by this game.  Are you sure you want to save?")
	if (theconfirm) {
		setSave3();
		alert("Your game has been saved.  Do not delelte your cookie files.  If you delete your cookies, your save game will be lost.");
	};
}

function setSave3() {
	var expdate = new Date("December 25, 2099");
	var expdate = expdate.toGMTString();
	console.log(player);
	document.cookie = player.quest.boss + "," + player.level + "," + player.class.modifier.mp + "," + player.class.modifier.hp + "," + player.exp.next + "," + player.gear.weapon + "," + player.gear.armor + "," + player.gear.shield + "," + player.gold + "," + player.exp.current + "," + player.stats.strength + "," + player.stats.endurance + "," + player.stats.agility + "," + player.stats.magic + "," + player.hp.max + "," + player.mp.max + "," + player.stats.evade + "," + player.class.baseStats.strength + "," + player.class.baseStats.endurance + "," + player.class.baseStats.agility + "," + player.class.baseStats.magic + "," + player.class.baseStats.hp + "," + player.class.baseStats.mp + "," + player.hp.current + "," + player.mp.current + "," + player.items.heal1 + "," + player.items.heal2 + "," + player.items.heal3 + "," + player.items.heal4 + "," + player.items.heal5 + "," + player.items.heal6 + "," + player.name + "," + player.class.fighter + "," + player.class.mage + "," + player.class.modifier.evade + "," + player.class.cleric + ";expires=" + expdate;
}

function setLoad() {
	var theconfirm = confirm("Loading the game will delete the character you are currently using.  Are you sure you want to load the game?");
	if (theconfirm) {
		if (document.cookie == "") {
			alert("WARNING:\n-No save game found");
		}
		else {
			setLoad2();
			alert("Save game has been loaded.");
		}
	};
}

function setLoad2() {
	var thecookie = document.cookie;
	var thecookie = thecookie.split(",");
	townbutton();

	player.quest.boss = thecookie[0];
	eval("document.qu.review.value = msg" + player.quest.boss + ";");

	player.level = thecookie[1];
	player.class.modifier.mp = thecookie[2];
	player.class.modifier.hp = thecookie[3];
	player.exp.next = thecookie[4];
	player.gear.weapon = thecookie[5];
	player.gear.armor = thecookie[6];
	player.gear.shield = thecookie[7];
	player.gold = thecookie[8];
	player.exp.current = thecookie[9];
	player.stats.strength = thecookie[10];
	player.stats.endurance = thecookie[11];
	player.stats.agility = thecookie[12];
	player.stats.magic = thecookie[13];
	player.hp.max = thecookie[14];
	player.mp.max = thecookie[15];
	player.stats.evade = thecookie[16];
	player.class.baseStats.strength = thecookie[17];
	player.class.baseStats.endurance = thecookie[18];
	player.class.baseStats.agility = thecookie[19];
	player.class.baseStats.magic = thecookie[20];
	player.class.baseStats.hp = thecookie[21];
	player.class.baseStats.mp = thecookie[22];
	player.hp.current = thecookie[23];
	player.mp.current = thecookie[24];
	player.items.heal1 = thecookie[25];
	player.items.heal2 = thecookie[26];
	player.items.heal3 = thecookie[27];
	player.items.heal4 = thecookie[28];
	player.items.heal5 = thecookie[29];
	player.items.heal6 = thecookie[30];
	player.name = thecookie[31];
	player.class.fighter = thecookie[32];
	player.class.mage = thecookie[33];
	player.class.modifier.evade = thecookie[34];
	player.class.cleric = thecookie[35];
	showstat();
	showgear();
	showitem();
	showname();
	created = 1;
	document.monster.src = "pic/inside.gif";
}


function magicselect() {
	numero = window.document.spells.type.options[document.spells.type.selectedIndex].value;
	spellselected = numero;
}

function stanceselect() {
	numero2 = window.document.spells.type2.options[document.spells.type2.selectedIndex].value;
	if (numero2 == 1) { stance = 1.10; att = 1.10; };
	if (numero2 == 2) { stance = 1.00; att = 1.00; };
	if (numero2 == 3) { stance = 0.90; att = 0.90; };
}

msg1 = "You have just finish your schooling in the cadet academy and you are called upon for you first quest.  A female mercenary has been raiding and killing the town's people lately.  Your quest is to kill the female mercenary.";

msg2 = "After you defeated the female mercenary, you headed toward the town of Malik.  The king of Malik sends you on your second quest.  A dragon is living in a cave near Malik and attacks the town every couple of days.  You quest is to slay the dragon and bring peace to Malik.";

msg3 = "You have slay the dragon and now you moved on to Xantos.  Here, you are greeted by the king's servants.  The servants takes you to the king and are given another quest.  A warlock named Magus has been conjuring monsters to attack the town.  Your quest is to defeat this warlock.";

msg4 = "After finishing your quest, you have became well known in the lands.  You are summoned by the king of Argos for a special quest.  Your quest is to retrieve the golden fleece which is guarded by the Minotaur.";

msg5 = "After returning with the golden fleece, the king promptly gives you your final quest.  A necromancer has been behind all of the past attacks.  You quest is to destroy him and bring peace to the lands."

function loadit() {
	// TODO: find out what needs to be put in on the initial load
	created = 0;

	townbutton();
	player.items.heal1 = 5;
	player.items.heal2 = 1;
	player.items.heal3 = 0;
	player.items.heal4 = 0;
	player.items.heal5 = 0;
	player.items.heal6 = 0;
	magicselect();
	stanceselect();
	document.qu.review.value = msg1;

	raceHuman();
	classFighter();
	selectItem();
}

function outside2() {
	if (player.quest.boss == 1) { fboss1() } else {
		if (player.quest.boss == 2) { fboss2() } else {
			if (player.quest.boss == 3) { fboss3() } else {
				if (player.quest.boss == 4) { fboss4() } else {
					if (player.quest.boss == 5) { fboss5() }
				}
			}
		}
	};
	fightbutton();
	def = 0;
	magdef = 0;
	sleep = 0;
	stop = 0;
	mhp = ehp;
	addstr = 0;
}

function classFighter() {
	tsbounus = 2;
	tebounus = 3;
	tabounus = 0;
	tmbounus = 0;

	tlbounus = 5;
	tmpbounus = 0;
}

function classThief() {
	tsbounus = 1;
	tebounus = 0;
	tabounus = 4;
	tmbounus = 1;
	tlbounus = 2;
	tmpbounus = 0;
}

function classMage() {
	tsbounus = 0;
	tebounus = 0;
	tabounus = 1;
	tmbounus = 4;
	tlbounus = 0;
	tmpbounus = 4;
}

function classCleric() {
	tsbounus = 2;
	tebounus = 0;
	tabounus = 0;
	tmbounus = 2;
	tlbounus = 2;
	tmpbounus = 2;
}

function calgear() {
	if (player.gear.weapon == 1) { wp1() };
	if (player.gear.weapon == 2) { wp2() };
	if (player.gear.weapon == 3) { wp3() };
	if (player.gear.weapon == 4) { wp4() };
	if (player.gear.weapon == 5) { wp5() };
	if (player.gear.weapon == 6) { wp6() };
	if (player.gear.weapon == 7) { wp7() };
	if (player.gear.weapon == 8) { wp8() };
	if (player.gear.weapon == 9) { wp9() };
	if (player.gear.weapon == 10) { wp10() };

	if (player.gear.armor == 2) { ar1() };
	if (player.gear.armor == 4) { ar2() };
	if (player.gear.armor == 6) { ar3() };
	if (player.gear.armor == 8) { ar4() };
	if (player.gear.armor == 10) { ar5() };
	if (player.gear.armor == 12) { ar6() };
	if (player.gear.armor == 15) { ar7() };
	if (player.gear.armor == 20) { ar8() };
	if (player.gear.armor == 25) { ar9() };
	if (player.gear.armor == 35) { ar10() };
	if (player.gear.armor == 100) { ar11() };
	if (player.gear.armor == 512) { ar12() };

	if (player.gear.shield == 1) { sd1() };
	if (player.gear.shield == 2) { sd2() };
	if (player.gear.shield == 3) { sd3() };
	if (player.gear.shield == 4) { sd4() };
	if (player.gear.shield == 5) { sd5() };
	if (player.gear.shield == 6) { sd6() };
	if (player.gear.shield == 7) { sd7() };
	if (player.gear.shield == 8) { sd8() };
	if (player.gear.shield == 10) { sd9() };
	if (player.gear.shield == 12) { sd10() };
	if (player.gear.shield == 14) { sd11() };
	if (player.gear.shield == 16) { sd12() };
	if (player.gear.shield == 18) { sd13() };
	if (player.gear.shield == 20) { sd14() };
	if (player.gear.shield == 23) { sd15() };
	if (player.gear.shield == 26) { sd16() };
	if (player.gear.shield == 29) { sd17() };
	if (player.gear.shield == 32) { sd18() };
	if (player.gear.shield == 35) { sd19() };
	if (player.gear.shield == 100) { sd20() };
	if (player.gear.shield == 512) { sd21() };

}

function showgear() {
	if (player.gear.weapon == 1 || player.gear.weapon == 2) { document.weaponpic.src = "weapon/saber.gif" };
	if (player.gear.weapon == 3 || player.gear.weapon == 4) { document.weaponpic.src = "weapon/mace.gif" };
	if (player.gear.weapon == 5 || player.gear.weapon == 6) { document.weaponpic.src = "weapon/axe.gif" };
	if (player.gear.weapon == 7 || player.gear.weapon == 8) { document.weaponpic.src = "weapon/warhammer.gif" };
	if (player.gear.weapon == 9) { document.weaponpic.src = "weapon/morningstar.gif" };
	if (player.gear.weapon == 10) { document.weaponpic.src = "weapon/sword.gif" };
	if (player.gear.shield == 1) { document.shieldpic.src = "weapon/shields/sh01.gif" };
	if (player.gear.shield == 2) { document.shieldpic.src = "weapon/shields/sh02.gif" };
	if (player.gear.shield == 3) { document.shieldpic.src = "weapon/shields/sh03.gif" };
	if (player.gear.shield == 4) { document.shieldpic.src = "weapon/shields/sh04.gif" };
	if (player.gear.shield == 5) { document.shieldpic.src = "weapon/shields/sh05.gif" };
	if (player.gear.shield == 6) { document.shieldpic.src = "weapon/shields/sh06.gif" };
	if (player.gear.shield == 7) { document.shieldpic.src = "weapon/shields/sh07.gif" };
	if (player.gear.shield == 8) { document.shieldpic.src = "weapon/shields/sh08.gif" };
	if (player.gear.shield == 10) { document.shieldpic.src = "weapon/shields/sh09.gif" };
	if (player.gear.shield == 12) { document.shieldpic.src = "weapon/shields/sh10.gif" };
	if (player.gear.shield == 14) { document.shieldpic.src = "weapon/shields/sh11.gif" };
	if (player.gear.shield == 16) { document.shieldpic.src = "weapon/shields/sh12.gif" };
	if (player.gear.shield == 18) { document.shieldpic.src = "weapon/shields/sh13.gif" };
	if (player.gear.shield == 20) { document.shieldpic.src = "weapon/shields/sh14.gif" };
	if (player.gear.shield == 23) { document.shieldpic.src = "weapon/shields/sh15.gif" };
	if (player.gear.shield == 26) { document.shieldpic.src = "weapon/shields/sh16.gif" };
	if (player.gear.shield == 29) { document.shieldpic.src = "weapon/shields/sh17.gif" };
	if (player.gear.shield == 32) { document.shieldpic.src = "weapon/shields/sh18.gif" };
	if (player.gear.shield == 35) { document.shieldpic.src = "weapon/shields/sh19.gif" };
	if (player.gear.shield == 100) { document.shieldpic.src = "weapon/shields/sh19.gif" };
	if (player.gear.shield == 512) { document.shieldpic.src = "weapon/shields/sh19.gif" };

	calgear();
}

function showitem() {
	document.items.heal1.value = player.items.heal1;
	document.items.heal2.value = player.items.heal2;
	document.items.heal3.value = player.items.heal3;
	document.items.heal4.value = player.items.heal4;
	document.items.heal5.value = player.items.heal5;
	document.items.heal6.value = player.items.heal6;
}

function shop1() {
	if (buywindow.document.buystuff.a.checked) { ba() };
	if (buywindow.document.buystuff.b.checked) { bb() };
	if (buywindow.document.buystuff.b1.checked) { healingbrew() };
	if (buywindow.document.buystuff.b2.checked) { magicether() };
	if (buywindow.document.buystuff.b3.checked) { magicpotion() };
	if (buywindow.document.buystuff.c.checked) { bc() };
	if (buywindow.document.buystuff.d.checked) { bd() };
	if (buywindow.document.buystuff.e.checked) { be() };
	if (buywindow.document.buystuff.f.checked) { bf() };
	if (buywindow.document.buystuff.g.checked) { bg() };
	if (buywindow.document.buystuff.h.checked) { bh() };
	if (buywindow.document.buystuff.i.checked) { bi() };
	if (buywindow.document.buystuff.j.checked) { bj() };
	if (buywindow.document.buystuff.k.checked) { bk() };
	if (buywindow.document.buystuff.l.checked) { bl() };
	if (buywindow.document.buystuff.m.checked) { bm() };
	if (buywindow.document.buystuff.n.checked) { bn() };
	if (buywindow.document.buystuff.o.checked) { bo() };
	if (buywindow.document.buystuff.p.checked) { bp() };
	if (buywindow.document.buystuff.q.checked) { bq() };
	if (buywindow.document.buystuff.r.checked) { br() };
	if (buywindow.document.buystuff.s.checked) { bs() };
	if (buywindow.document.buystuff.t.checked) { bt() };
	if (buywindow.document.buystuff.u.checked) { bu() };
	if (buywindow.document.buystuff.v.checked) { bv() };
	if (buywindow.document.buystuff.w.checked) { bw() };
	if (buywindow.document.buystuff.x.checked) { bx() };
	if (buywindow.document.buystuff.y.checked) { by() };

	if (buywindow.document.buystuff.aa.checked) { ba1() };
	if (buywindow.document.buystuff.player.class.baseStats.agility.checked) { bb2() };
	if (buywindow.document.buystuff.ac.checked) { bc3() };
	if (buywindow.document.buystuff.ad.checked) { bd4() };
	if (buywindow.document.buystuff.ae.checked) { be5() };
	if (buywindow.document.buystuff.af.checked) { bf6() };
	if (buywindow.document.buystuff.agility.checked) { bg7() };
	if (buywindow.document.buystuff.ah.checked) { bh8() };
	if (buywindow.document.buystuff.ai.checked) { bi9() };
	if (buywindow.document.buystuff.aj.checked) { bj10() };
	if (buywindow.document.buystuff.ak.checked) { bk11() };
	if (buywindow.document.buystuff.al.checked) { bl12() };
	if (buywindow.document.buystuff.am.checked) { bm13() };
	if (buywindow.document.buystuff.an.checked) { bn14() };
	if (buywindow.document.buystuff.ao.checked) { bo15() };
	if (buywindow.document.buystuff.ap.checked) { bp16() };
	if (buywindow.document.buystuff.aq.checked) { bq17() };
	if (buywindow.document.buystuff.ar.checked) { br18() };
	if (buywindow.document.buystuff.as.checked) { bs19() };
	if (buywindow.document.buystuff.at.checked) { bt20() };
	if (buywindow.document.buystuff.au.checked) { bu21() };
	buywindow.focus();
}

function shop2() {
	buywindow = window.open("buy.html", "", "width=325,height=550,scrollbars,resizable,top,left")
}

function shop3() {
	alert("You left the store and arrived at the town.");
	townbutton();
}

function inn() {
	var sureinn = confirm("Would you like to rest in the inn for $50?");
	if (sureinn) {
		player.gold = (player.gold * 1) - (50 * 1);
		player.hp.current = player.hp.max;
		player.mp.current = player.mp.max;
		showstat();
	}
}

function town1() {
	if (created == 1) {
		buywindow = window.open("buy.html", "", "width=325,height=550,scrollbars,resizable,top,left");
		shopbutton();
	}
	else {
		alert("Create a character first.");
	}
}

function town2() {
	if (created == 1) {
		if (player.gold <= 49) {
			alert("The inn cost $50.  Come back when you have the gold.");
		}
		else {
			inn();
		}
	}
	else {
		alert("Create a character first.");
	}
}

function outside1() {
	if (player.quest.boss == 1) { mon1() } else {
		if (player.quest.boss == 2) { mon2() } else {
			if (player.quest.boss == 3) { mon3() } else {
				if (player.quest.boss == 4) { mon4() } else {
					if (player.quest.boss == 5) { mon5() }
				}
			}
		}
	};
	fightbutton();
	def = 0;
	magdef = 0;
	sleep = 0;
	stop = 0;
	mhp = ehp;
	addstr = 0;
}

function outside3() {
	alert("You arrived at the town.");
	townbutton();
}

function town3() {
	if (created == 1) {
		alert("You left the town and went outside.");
		outsidebutton();
	}
	else {
		alert("Create a character first.");
	}
}

function button1() {
	if (buttontype == 1) { town1(); } else {
		if (buttontype == 2) { outside1(); } else {
			if (buttontype == 3) { fight1(); } else {
				if (buttontype == 4) { shop1(); } else {
				}
			}
		}
	}
}

function button2() {
	if (buttontype == 1) { town2(); } else {
		if (buttontype == 2) { outside2(); } else {
			if (buttontype == 3) { fight2(); } else {
				if (buttontype == 4) { shop2(); } else {
				}
			}
		}
	}
}

function button3() {
	if (buttontype == 1) { town3(); } else {
		if (buttontype == 2) { outside3(); } else {
			if (buttontype == 3) { fight3(); } else {
				if (buttontype == 4) { shop3(); } else {
				}
			}
		}
	}
}

function townbutton() {
	document.forma.one.value = "  Shop  ";
	document.forma.two.value = "  Inn  ";
	document.forma.three.value = "  Leave  ";
	buttontype = 1;
	document.monster.src = "pic/inside.gif";
}

function outsidebutton() {
	document.forma.one.value = "Random Fight";
	document.forma.two.value = " Quest ";
	document.forma.three.value = " Town ";
	buttontype = 2;
	document.monster.src = "pic/outside.gif";
}

function fightbutton() {
	document.forma.one.value = " Attack ";
	document.forma.two.value = " Use Item ";
	document.forma.three.value = " Cast Spell ";
	buttontype = 3;
}

function shopbutton() {
	document.forma.one.value = "  Buy  ";
	document.forma.two.value = " Select ";
	document.forma.three.value = " Town ";
	buttontype = 4;
	document.monster.src = "pic/inside.gif";
}

function selectItem() {
	// get selected item
	let items = document.getElementsByName("radioSelectedItem");
	let selectedItem;
	for (let i = 0; i < items.length; i++) {
		if (items[i].checked) {
			selectedItem = items[i].value;
		}
	}
}


function showstatb() {
	document.formb.s.value = strength;
	document.formb.e.value = endurance;
	document.formb.a.value = agility;
	document.formb.m.value = magic
	document.formb.left.value = pointsLeft;
}


// increase strength
function ys() {
	pointsLeft = (pointsLeft * 1) - (1 * 1);
	strength = (strength * 1) + (1 * 1);
	showstatb();
}

// decrease strength
function ns() {
	if (strength >= 9) {
		strength = (strength * 1) - (1 * 1);
		pointsLeft = (pointsLeft * 1) + (1 * 1);
		showstatb();
	}
	else {
		alert("You can't go any lower than 8.");
	}
}

// increase endurance
function ye() {
	pointsLeft = (pointsLeft * 1) - (1 * 1);
	endurance = (endurance * 1) + (1 * 1);
	showstatb();
}

// decrease strength
function ne() {
	if (endurance >= 9) {
		endurance = (endurance * 1) - (1 * 1);
		pointsLeft = (pointsLeft * 1) + (1 * 1);
		showstatb();
	}
	else {
		alert("You can't go any lower than 8.");
	}
}

// increase agility
function ya() {
	pointsLeft = (pointsLeft * 1) - (1 * 1);
	agility = (agility * 1) + (1 * 1);
	showstatb();
}

// decrease agility
function na() {
	if (agility >= 9) {
		agility = (agility * 1) - (1 * 1);
		pointsLeft = (pointsLeft * 1) + (1 * 1);
		showstatb();
	}
	else {
		alert("You can't go any lower than 8.");
	}
}

// increase magic
function ym() {
	pointsLeft = (pointsLeft * 1) - (1 * 1);
	magic = (magic * 1) + (1 * 1);
	showstatb();
}

// decrease magic
function nm() {
	if (magic >= 9) {
		magic = (magic * 1) - (1 * 1);
		pointsLeft = (pointsLeft * 1) + (1 * 1);
		showstatb();
	}
	else {
		alert("You can't go any lower than 8.");
	}
}


function raceHuman() {
	strength = 12;
	endurance = 12;
	agility = 12;
	magic = 12;
	evade = 0;
	hp = 1;
	mp = 1;
	
	pointsLeft = 15;
	showstatb();
}

function raceElf() {
	strength = 8;
	endurance = 8;
	agility = 14;
	magic = 14;
	evade = 5;
	hp = 0;
	mp = 5;

	pointsLeft = 12;
	showstatb();
}

function raceDwarf() {
	strength = 14;
	endurance = 14;
	agility = 8;
	magic = 8;
	evade = 0;
	hp = 7;
	mp = 0;

	pointsLeft = 12;
	showstatb();
}

function raceHalfling() {
	strength = 10;
	endurance = 10;
	agility = 16;
	magic = 10;
	evade = 15;
	hp = 2;
	mp = 2;
	
	pointsLeft = 12;
	showstatb();
}

function getSelectedRaceName() {
	// get race
	let races = document.getElementsByName("radioRace");
	let selectedRace;
	for (let i = 0; i < races.length; i++) {
		if (races[i].checked) {
			selectedRace = races[i].value;
		}
	}
	return selectedRace;
}

function selectRace() {

	let selectedRace = getSelectedRaceName();
	// select race
	switch (selectedRace) {
		case 'human':
			raceHuman()
			break;
		case 'elf':
			raceElf();
			break;
		case 'dwarf':
			raceDwarf();
			break;
		case 'halfling':
			raceHalfling();
			break;
		default:
			alert('oh no broken')
	}
}

function getSelectedClassName() {
	// get class
	let classes = document.getElementsByName("radioClass");
	let selectedClass;
	for (let i = 0; i < classes.length; i++) {
		if (classes[i].checked) {
			selectedClass = classes[i].value;
		}
	}
	return selectedClass
}

function selectClass() {
	let selectedClass = getSelectedClassName();

	// select class
	switch (selectedClass) {
		case 'fighter':
			classFighter()
			break;
		case 'thief':
			classThief();
			break;
		case 'mage':
			classMage();
			break;
		case 'cleric':
			classCleric();
			break;
		default:
			alert('oh no broken')
	}
}



function showname() {
	document.stats.gamename.value = player.name;
}

function create2() {
	let selectedRace = getSelectedRaceName();
	let selectedClass = getSelectedClassName();

	if (selectedRace === 'human') { player.exp.next = 75; } else { player.exp.next = 85; };

	if (selectedClass === 'fighter') { player.class.fighter = 1.5 } else { player.class.fighter = 1 };
	if (selectedClass === 'thief') { player.class.modifier.evade = (player.class.modifier.evade * 1) + (15 * 1) } else { player.class.modifier.evade = (evade * 1); };
	if (selectedClass === 'mage') { player.class.mage = 1 } else { player.class.mage = 0 };
	if (selectedClass === 'cleric') { player.class.cleric = 1.85 } else { player.class.cleric = 1 };

	player.quest.boss = 1;
	player.level = 1;
	player.class.modifier.mp = mp;
	player.class.modifier.hp = hp;

	player.gear.weapon = 1;
	player.gear.armor = 2;
	player.gear.shield = 1;
	showgear();
	player.gold = 1500;
	player.exp.current = 0;
	player.stats.strength = strength;
	player.stats.endurance = endurance;
	player.stats.agility = agility;
	player.stats.magic = magic;
	player.hp.max = Math.round((30 * 1) + (player.stats.endurance * 2.5));
	player.mp.max = Math.round((15 * 1) + (player.stats.magic * 1.2));



	player.stats.evade = Math.round((player.class.modifier.evade * 1) + (player.stats.agility * .5));


	player.class.baseStats.strength = tsbounus;
	player.class.baseStats.endurance = tebounus;
	player.class.baseStats.agility = tabounus;
	player.class.baseStats.magic = tmbounus;
	player.class.baseStats.hp = tlbounus;
	player.class.baseStats.mp = tmpbounus;

	player.hp.current = player.hp.max;
	player.mp.current = player.mp.max;
	showstat();
	showitem();
	player.name = document.formb.yname.value;
	showname();
	created = 1;
}

function showstat() {
	setnum(player.stats.strength, 3, "strength");
	setnum(player.stats.endurance, 3, "endurance");
	setnum(player.stats.agility, 3, "agility");
	setnum(player.stats.magic, 3, "magic");
	setnum(player.stats.evade, 2, "evade");

	setnum(player.hp.max, 5, "mhp");
	setnum(player.hp.current, 5, "chp");
	setnum(player.mp.max, 5, "mmp");
	setnum(player.mp.current, 5, "cmp");
	setnum(player.level, 3, "level");

	setnum(player.gold, 10, "gold");
	setnum(player.exp.current, 10, "exp");
	setnum(player.exp.next, 10, "nlev");
}

function create() {
	if (created == 0) {
		create2();
	}
	else {
		confirmit();
	};
	alert("Character created.  Scroll down to play the game.");
}

function confirmit() {
	var sure = confirm("You already have a character created.  Creating a new character will delete your previous charater and start a new game.  Are you sure you want to do this?");
	if (sure) {
		create2();
	}
}




function ba() {
	if (player.gold <= 49) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a heal cherry.")
		player.gold = (player.gold * 1) - (50 * 1);
		player.items.heal1 = (player.items.heal1 * 1) + (1 * 1);
		showstat();
		showitem();
	}
}

function bb() {
	if (player.gold <= 199) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a heal potion.")
		player.gold = (player.gold * 1) - (200 * 1);
		player.items.heal2 = (player.items.heal2 * 1) + (1 * 1);
		showstat();
		showitem();
	}
}

function healingbrew() {
	if (player.gold <= 499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a healing brew.")
		player.gold = (player.gold * 1) - (500 * 1);
		player.items.heal4 = (player.items.heal4 * 1) + (1 * 1);
		showstat();
		showitem();
	}
}

function magicether() {
	if (player.gold <= 299) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a magic ether.")
		player.gold = (player.gold * 1) - (300 * 1);
		player.items.heal5 = (player.items.heal5 * 1) + (1 * 1);
		showstat();
		showitem();
	}
}

function magicpotion() {
	if (player.gold <= 799) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a magic potion")
		player.gold = (player.gold * 1) - (800 * 1);
		player.items.heal6 = (player.items.heal6 * 1) + (1 * 1);
		showstat();
		showitem();
	}
}

function bc() {
	if (player.gold <= 1999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased an Elixer.")
		player.gold = (player.gold * 1) - (2000 * 1);
		player.items.heal3 = (player.items.heal3 * 1) + (1 * 1);
		showstat();
		showitem();
	}
}

function bd() {
	if (player.gold <= 49) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a short saber.");
		player.gold = (player.gold * 1) - (50 * 1);
		player.gear.weapon = 1;
		showgear();
		showstat();
	}
}

function be() {
	if (player.gold <= 99) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a long saber.");
		player.gold = (player.gold * 1) - (100 * 1);
		player.gear.weapon = 2;
		showgear();
		showstat();
	}
}

function bf() {
	if (player.gold <= 299) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a bronze mace.");
		player.gold = (player.gold * 1) - (300 * 1);
		player.gear.weapon = 3;
		showgear();
		showstat();
	}
}

function bg() {
	if (h <= 499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a iron mace.");
		player.gold = (player.gold * 1) - (500 * 1);
		player.gear.weapon = 4;
		showgear();
		showstat();
	}
}

function bh() {
	if (player.gold <= 999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a broad axe.");
		player.gold = (player.gold * 1) - (1000 * 1);
		player.gear.weapon = 5;
		showgear();
		showstat();
	}
}

function bi() {
	if (player.gold <= 1499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a battle axe.");
		player.gold = (player.gold * 1) - (1500 * 1);
		player.gear.weapon = 6;
		showgear();
		showstat();
	}
}

function bj() {
	if (player.gold <= 1999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a bronze warhammer.");
		player.gold = (player.gold * 1) - (2000 * 1);
		player.gear.weapon = 7;
		showgear();
		showstat();
	}
}

function bk() {
	if (player.gold <= 2499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a iron warhammer.");
		player.gold = (player.gold * 1) - (2500 * 1);
		player.gear.weapon = 8;
		showgear();
		showstat();
	}
}

function bl() {
	if (player.gold <= 4999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a morning star.");
		player.gold = (player.gold * 1) - (5000 * 1);
		player.gear.weapon = 9;
		showgear();
		showstat();
	}
}

function bm() {
	if (player.gold <= 7999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased the Knight's Blade.");
		player.gold = (player.gold * 1) - (8000 * 1);
		player.gear.weapon = 10;
		showgear();
		showstat();
	}
}

function bn() {
	if (player.gold <= 49) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased clothes.");
		player.gold = (player.gold * 1) - (50 * 1);
		player.gear.armor = 2;
		showgear();
		showstat();
	}
}

function bo() {
	if (player.gold <= 199) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased leather armor.");
		player.gold = (player.gold * 1) - (200 * 1);
		player.gear.armor = 4;
		showgear();
		showstat();
	}
}

function bp() {
	if (player.gold <= 499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased studded leather.");
		player.gold = (player.gold * 1) - (500 * 1);
		player.gear.armor = 6;
		showgear();
		showstat();
	}
}

function bq() {
	if (player.gold <= 999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze chain mail.");
		player.gold = (player.gold * 1) - (1000 * 1);
		player.gear.armor = 8;
		showgear();
		showstat();
	}
}

function br() {
	if (player.gold <= 1499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron chain mail.");
		player.gold = (player.gold * 1) - (1500 * 1);
		player.gear.armor = 10;
		showgear();
		showstat();
	}
}

function bs() {
	if (player.gold <= 1999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze half plate.");
		player.gold = (player.gold * 1) - (2000 * 1);
		player.gear.armor = 12;
		showgear();
		showstat();
	}
}

function bt() {
	if (player.gold <= 2999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron half plate.");
		player.gold = (player.gold * 1) - (3000 * 1);
		player.gear.armor = 15;
		showgear();
		showstat();
	}
}

function bu() {
	if (player.gold <= 3999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze full plate.");
		player.gold = (player.gold * 1) - (4000 * 1);
		player.gear.armor = 20;
		showgear();
		showstat();
	}
}

function bv() {
	if (player.gold <= 5999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron full plate.");
		player.gold = (player.gold * 1) - (6000 * 1);
		player.gear.armor = 25;
		showgear();
		showstat();
	}
}

function bw() {
	if (player.gold <= 9999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased knight's armor.");
		player.gold = (player.gold * 1) - (10000 * 1);
		player.gear.armor = 35;
		showgear();
		showstat();
	}
}

function bx() {
	if (player.gold <= 99999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased some Godly armor.");
		player.gold = (player.gold * 1) - (100000 * 1);
		player.gear.armor = 100;
		showgear();
		showstat();
	}
}

function by() {
	if (player.gold <= 999999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased OGd's armor.");
		player.gold = (player.gold * 1) - (1000000 * 1);
		player.gear.armor = 512;
		showgear();
		showstat();
	}
}

function ba1() {
	if (player.gold <= 49) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased wood round shield.");
		player.gold = (player.gold * 1) - (50 * 1);
		player.gear.shield = 1;
		showgear();
		showstat();
	}
}

function bb2() {
	if (player.gold <= 99) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased oak round shield.");
		player.gold = (player.gold * 1) - (100 * 1);
		player.gear.shield = 2;
		showgear();
		showstat();
	}
}

function bc3() {
	if (player.gold <= 199) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron round shield.");
		player.gold = (player.gold * 1) - (200 * 1);
		player.gear.shield = 3;
		showgear();
		showstat();
	}
}

function bd4() {
	if (player.gold <= 399) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased gold round shield.");
		player.gold = (player.gold * 1) - (400 * 1);
		player.gear.shield = 4;
		showgear();
		showstat();
	}
}

function be5() {
	if (player.gold <= 799) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze small shield.");
		player.gold = (player.gold * 1) - (800 * 1);
		player.gear.shield = 5;
		showgear();
		showstat();
	}
}

function bf6() {
	if (player.gold <= 1199) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron small shield.");
		player.gold = (player.gold * 1) - (1200 * 1);
		player.gear.shield = 6;
		showgear();
		showstat();
	}
}

function bg7() {
	if (player.gold <= 1499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze medium shield.");
		player.gold = (player.gold * 1) - (1500 * 1);
		player.gear.shield = 7;
		showgear();
		showstat();
	}
}

function bh8() {
	if (player.gold <= 1999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron medium shield.");
		player.gold = (player.gold * 1) - (2000 * 1);
		player.gear.shield = 8;
		showgear();
		showstat();
	}
}

function bi9() {
	if (player.gold <= 2499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze large shield.");
		player.gold = (player.gold * 1) - (2500 * 1);
		player.gear.shield = 10;
		showgear();
		showstat();
	}
}

function bj10() {
	if (player.gold <= 2999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron large shield.");
		player.gold = (player.gold * 1) - (3000 * 1);
		player.gear.shield = 12;
		showgear();
		showstat();
	}
}

function bk11() {
	if (player.gold <= 3499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased wood tower shield.");
		player.gold = (player.gold * 1) - (3500 * 1);
		player.gear.shield = 14;
		showgear();
		showstat();
	}
}

function bl12() {
	if (player.gold <= 3999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze tower shield.");
		player.gold = (player.gold * 1) - (4000 * 1);
		player.gear.shield = 16;
		showgear();
		showstat();
	}
}

function bm13() {
	if (player.gold <= 4499) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased iron tower shield.");
		player.gold = (player.gold * 1) - (4500 * 1);
		player.gear.shield = 18;
		showgear();
		showstat();
	}
}

function bn14() {
	if (player.gold <= 4999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased silver tower shield.");
		player.gold = (player.gold * 1) - (5000 * 1);
		player.gear.shield = 20;
		showgear();
		showstat();
	}
}


function bo15() {
	if (player.gold <= 5999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased gold tower shield.");
		player.gold = (player.gold * 1) - (6000 * 1);
		player.gear.shield = 23;
		showgear();
		showstat();
	}
}

function bp16() {
	if (player.gold <= 6999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased bronze warrior's shield.");
		player.gold = (player.gold * 1) - (7000 * 1);
		player.gear.shield = 26;
		showgear();
		showstat();
	}
}

function bq17() {
	if (player.gold <= 7999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased gold warrior's shield.");
		player.gold = (player.gold * 1) - (8000 * 1);
		player.gear.shield = 29;
		showgear();
		showstat();
	}
}

function br18() {
	if (player.gold <= 9999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased medium knight's shield.");
		player.gold = (player.gold * 1) - (10000 * 1);
		player.gear.shield = 32;
		showgear();
		showstat();
	}
}

function bs19() {
	if (player.gold <= 14999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased large knight's shield.");
		player.gold = (player.gold * 1) - (15000 * 1);
		player.gear.shield = 35;
		showgear();
		showstat();
	}
}

function bt20() {
	if (player.gold <= 149999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased a Godly shield.");
		player.gold = (player.gold * 1) - (150000 * 1);
		player.gear.shield = 100;
		showgear();
		showstat();
	}
}

function bu21() {
	if (player.gold <= 1999999) {
		alert("You do not have enough money.");
	}
	else {
		alert("You have purchased OGd's shield.");
		player.gold = (player.gold * 1) - (1500000 * 1);
		player.gear.shield = 512;
		showgear();
		showstat();
	}
}



function wp1() {
	document.gear.wname.value = "Short Saber";
	document.gear.wstat.value = "1-4";
}


function wp2() {
	document.gear.wname.value = "Long Saber";
	document.gear.wstat.value = "1-6";
}


function wp3() {
	document.gear.wname.value = "Bronze Mace";
	document.gear.wstat.value = "2-4";
}

function wp4() {
	document.gear.wname.value = "Iron Mace";
	document.gear.wstat.value = "2-6";
}

function wp5() {
	document.gear.wname.value = "Broad Axe";
	document.gear.wstat.value = "3-5";
}

function wp6() {
	document.gear.wname.value = "Battle Axe";
	document.gear.wstat.value = "3-8";
}

function wp7() {
	document.gear.wname.value = "Bronze Warhammer";
	document.gear.wstat.value = "2-15";
}

function wp8() {
	document.gear.wname.value = "Iron Warhammer";
	document.gear.wstat.value = "2-20";
}

function wp9() {
	document.gear.wname.value = "Morning Star";
	document.gear.wstat.value = "3-30";
}

function wp10() {
	document.gear.wname.value = "Knight's Blade";
	document.gear.wstat.value = "5-50";
}

function wp11() {
	document.gear.wname.value = "OGd's Blade";
	document.gear.wstat.value = "10-100";
}

function ar1() {
	document.gear.aname.value = "Clothes";
	document.gear.astat.value = "+2"
}

function ar2() {
	document.gear.aname.value = "Leather Armor";
	document.gear.astat.value = "+4"
}

function ar3() {
	document.gear.aname.value = "Studded Leather";
	document.gear.astat.value = "+6"
}

function ar4() {
	document.gear.aname.value = "Bronze Chain Mail";
	document.gear.astat.value = "+8"
}

function ar5() {
	document.gear.aname.value = "Iron Chain Mail";
	document.gear.astat.value = "+10"
}

function ar6() {
	document.gear.aname.value = "Bronze Half Plate";
	document.gear.astat.value = "+12"
}

function ar7() {
	document.gear.aname.value = "Iron Half Plate";
	document.gear.astat.value = "+15"
}

function ar8() {
	document.gear.aname.value = "Bronze Plate Mail";
	document.gear.astat.value = "+20"
}

function ar9() {
	document.gear.aname.value = "Iron Plate Mail";
	document.gear.astat.value = "+25"
}

function ar10() {
	document.gear.aname.value = "Knight's Armor";
	document.gear.astat.value = "+35"
}

function ar11() {
	document.gear.aname.value = "Godly Armor";
	document.gear.astat.value = "+100"
}

function ar12() {
	document.gear.aname.value = "OGd's Armor";
	document.gear.astat.value = "+512"
}

function sd1() {
	document.gear.sname.value = "Wood Round Shield";
	document.gear.sstat.value = "+1"
}

function sd2() {
	document.gear.sname.value = "Oak Round Shield";
	document.gear.sstat.value = "+2"
}

function sd3() {
	document.gear.sname.value = "Iron Round Shield";
	document.gear.sstat.value = "+3"
}

function sd4() {
	document.gear.sname.value = "Gold Round Shield";
	document.gear.sstat.value = "+4"
}

function sd5() {
	document.gear.sname.value = "Bronze Small Shield";
	document.gear.sstat.value = "+5"
}

function sd6() {
	document.gear.sname.value = "Iron Small Shield";
	document.gear.sstat.value = "+6"
}

function sd7() {
	document.gear.sname.value = "Bronze Medium Shield";
	document.gear.sstat.value = "+7"
}

function sd8() {
	document.gear.sname.value = "Iron Medium Shield";
	document.gear.sstat.value = "+8"
}

function sd9() {
	document.gear.sname.value = "Bronze Large Shield";
	document.gear.sstat.value = "+10"
}

function sd10() {
	document.gear.sname.value = "Iron Large Shield";
	document.gear.sstat.value = "+12"
}

function sd11() {
	document.gear.sname.value = "Wood Tower Shield";
	document.gear.sstat.value = "+14"
}

function sd12() {
	document.gear.sname.value = "Bronze Tower Shield";
	document.gear.sstat.value = "+16"
}

function sd13() {
	document.gear.sname.value = "Iron Tower Shield";
	document.gear.sstat.value = "+18"
}

function sd14() {
	document.gear.sname.value = "Silver Tower Shield";
	document.gear.sstat.value = "+20"
}

function sd15() {
	document.gear.sname.value = "Gold Tower Shield";
	document.gear.sstat.value = "+23"
}

function sd16() {
	document.gear.sname.value = "Bronze Warrior's Shield";
	document.gear.sstat.value = "+26"
}

function sd17() {
	document.gear.sname.value = "Gold Warrior's Shield";
	document.gear.sstat.value = "+29"
}

function sd18() {
	document.gear.sname.value = "Medium Knight's Shield";
	document.gear.sstat.value = "+32"
}

function sd19() {
	document.gear.sname.value = "Large Knight's Shield";
	document.gear.sstat.value = "+35"
}

function sd20() {
	document.gear.sname.value = "Godly Shield";
	document.gear.sstat.value = "+100"
}

function sd21() {
	document.gear.sname.value = "OGd's Shield";
	document.gear.sstat.value = "+512"
}





//Monsters and battle system

function ysurvive() {
	if ((player.hp.current <= 0) && (mebeogd != 1)) {
		window.location = "dead.html";
	}
}

function levelup() {
	player.exp.next = Math.round(player.exp.next * 1.8);
	player.level = (player.level * 1) + (1 * 1);
	var up1 = Math.round(Math.random() * 5) + (player.class.baseStats.strength * 1);
	var up2 = Math.round(Math.random() * 5) + (player.class.baseStats.agility * 1);
	var up3 = Math.round(Math.random() * 5) + (player.class.baseStats.endurance * 1);
	var up4 = Math.round(Math.random() * 5) + (player.class.baseStats.magic * 1);
	var up5 = Math.round(Math.random() * player.stats.magic * 1) + (player.class.modifier.mp * 1) + (player.class.baseStats.mp * 1);
	var up6 = Math.round((Math.random() * 1.25) + (player.stats.endurance * 1.2) + (player.stats.strength * .25)) + (player.class.modifier.hp * 1) + (player.class.baseStats.hp * 1);
	var up7 = Math.round((player.class.modifier.evade * 1) + (player.stats.agility * .5));

	player.stats.strength = (player.stats.strength * 1) + (up1 * 1);
	player.stats.agility = (player.stats.agility * 1) + (up2 * 1);
	player.stats.endurance = (player.stats.endurance * 1) + (up3 * 1);
	player.stats.magic = (player.stats.magic * 1) + (up4 * 1);
	player.hp.max = (player.hp.max * 1) + (up6 * 1);
	player.mp.max = (player.mp.max * 1) + (up5 * 1);
	player.stats.evade = (player.stats.evade * 1) + (up7 * 1);
	if (player.stats.evade > 95) { player.stats.evade = 95 };

	alert("You have gained a level.");
	alert("Your strength increased by " + up1 + " to " + player.stats.strength + ".");
	alert("Your endurance increased by " + up3 + " to " + player.stats.agility + ".");
	alert("Your agility increased by " + up2 + " to " + player.stats.endurance + ".");
	alert("Your magic increased by " + up4 + " to " + player.stats.magic + ".");
	alert("Your max hp increased by " + up6 + " to " + player.hp.max + ".");
	alert("Your max mp increased by " + up5 + " to " + player.mp.max + ".");
	if (player.stats.evade == 95) { alert("Your evasion is capped at 95%") };
	if (player.stats.evade != 95) { alert("Your evasion has increased by " + up7 + "% to " + player.stats.evade + "%.") };
	showstat();
}

function callevel() {
	if (player.exp.current >= player.exp.next) {
		levelup();
	}
}

function vboss1() {
	alert("You have defeated the female mercenary.  The town's people should be safe now.");
	player.quest.boss = 2;
	document.qu.review.value = msg2;
}

function vboss2() {
	alert("You have successfully slay the dragon and Malik is now in peace.");
	player.quest.boss = 3;
	document.qu.review.value = msg3;
}

function vboss3() {
	alert("You have defeated the warlock and brought peace to the lands.")
	player.quest.boss = 4;
	document.qu.review.value = msg4;
}

function vboss4() {
	alert("You have successfully retrieved the golden fleece for the king.")
	player.quest.boss = 5;
	document.qu.review.value = msg5;
}

function vboss5() {
	alert("You have defeated the necromancer, but as you turn toward the exit, the necromancer comes back to life")
	player.quest.boss = 6;
	fightbutton();
	fboss6();
}

function vboss6() {
	alert("You have defeated the reaper, but it comes back to life again.")
	player.quest.boss = 7;
	fightbutton();
	fboss7();
}

function vboss7() {
	alert("You have finally defeated the necromancer.");
	window.location = "win.html";
}

function bossvictory() {
	if (player.quest.boss == 1) { vboss1() } else {
		if (player.quest.boss == 2) { vboss2() } else {
			if (player.quest.boss == 3) { vboss3() } else {
				if (player.quest.boss == 4) { vboss4() } else {
					if (player.quest.boss == 5) { vboss5() } else {
						if (player.quest.boss == 6) { vboss6() } else {
							if (player.quest.boss == 7) { vboss7() }
						}
					}
				}
			}
		}
	};
}

function victory() {
	player.gold = (player.gold * 1) + (wingold * 1);
	alert("player.exp.current = " + player.exp.current);
	alert("winexp = " + winexp);
	alert("player.level = " + player.level);
	alert("player.exp.next = " + player.exp.next);
	if ((goodexp == 1) && (winexp < (player.exp.next / (player.level ^ 2 * 5)))) { winexp = Math.round(player.exp.next / (player.level ^ 2 * 5), 0) };
	player.exp.current = (player.exp.current * 1) + (winexp * 1);
	alert("You are victorious.  You gained " + wingold + " gold and " + winexp + " experience.")
	callevel();
	outsidebutton();
	document.monster.src = "pic/loot.gif";
	if (isboss == 1) { bossvictory() };
	showstat();
}

function survive() {
	if (attackp <= 0) { attackp = 0 };
	ehp = (ehp * 1) - (attackp * 1);
	if (ehp <= 0) {
		victory();
	}
	else {
		enemyattack();
	};
}

function uitem1() {
	if (player.items.heal1 == 0) {
		alert("You don't have any heal cherries.");
	}
	else {
		player.hp.current = (player.hp.current * 1) + (50 * 1);
		if (player.hp.current > player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		alert("You used a heal cherry and recovered 50 hp.");
		player.items.heal1 = (player.items.heal1 * 1) - (1 * 1);
		showitem();
		attackp = 0;
		survive();
	}
}

function uitem2() {
	if (player.items.heal2 == 0) {
		alert("You don't have any heal potions.");
	}
	else {
		player.hp.current = (player.hp.current * 1) + (150 * 1);
		if (player.hp.current > player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		alert("You used a heal potion and recovered 150 hp.");
		player.items.heal2 = (player.items.heal2 * 1) - (1 * 1);
		showitem();
		attackp = 0;
		survive();
	}
}

function uitem3() {
	if (player.items.heal3 == 0) {
		alert("You don't have any elixirs.");
	}
	else {
		player.hp.current = player.hp.max;
		player.mp.current = player.mp.max;
		showstat();
		alert("You used an elixir and recovered all hp and mp.");
		player.items.heal3 = (player.items.heal3 * 1) - (1 * 1);
		showitem();
		attackp = 0;
		survive();
	}
}

function uitem4() {
	if (player.items.heal4 == 0) {
		alert("You don't have any healing brews.");
	}
	else {
		player.hp.current = (player.hp.current * 1) + (300 * 1);
		if (player.hp.current > player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		alert("You used a healing brew and recovered 300 hp.");
		player.items.heal4 = (player.items.heal4 * 1) - (1 * 1);
		showitem();
		attackp = 0;
		survive();
	}
}

function uitem5() {
	if (player.items.heal5 == 0) {
		alert("You don't have any magic ethers.");
	}
	else {
		player.mp.current = (player.mp.current * 1) + (40 * 1);
		if (player.mp.current > player.mp.max) { player.mp.current = player.mp.max };
		showstat();
		alert("You used a magic ether and recovered 40 mp.");
		player.items.heal5 = (player.items.heal5 * 1) - (1 * 1);
		showitem();
		attackp = 0;
		survive();
	}
}

function uitem6() {
	if (player.items.heal6 == 0) {
		alert("You don't have any magic potions.");
	}
	else {
		player.mp.current = (player.mp.current * 1) + (150 * 1);
		if (player.mp.current > player.mp.max) { player.mp.current = player.mp.max };
		showstat();
		alert("You used a magic potion and recovered 150 mp.");
		player.items.heal6 = (player.items.heal6 * 1) - (1 * 1);
		showitem();
		attackp = 0;
		survive();
	}
}

function fight2() {
	if (document.items.rad1.checked) { uitem1() };
	if (document.items.rad2.checked) { uitem2() };
	if (document.items.rad3.checked) { uitem3() };
	if (document.items.rad4.checked) { uitem4() };
	if (document.items.rad5.checked) { uitem5() };
	if (document.items.rad6.checked) { uitem6() };


}

function fight3() {
	if (spellselected == 1) { cast1() };
	if (spellselected == 2) { cast2() };
	if (spellselected == 3) { cast3() };
	if (spellselected == 4) { cast4() };
	if (spellselected == 5) { cast5() };
	if (spellselected == 6) { cast6() };
	if (spellselected == 7) { cast7() };
	if (spellselected == 8) { cast8() };
	if (spellselected == 9) { cast9() };
	if (spellselected == 10) { cast10() };
	if (spellselected == 11) { cast11() };
	if (spellselected == 12) { cast12() };
	if (spellselected == 13) { cast13() };
	if (spellselected == 14) { cast14() };
	if (spellselected == 15) { cast15() };
	if (spellselected == 16) { cast16() };
	if (spellselected == 17) { cast17() };
	if (spellselected == 18) { cast18() };
	if (spellselected == 19) { cast19() };
}

function counter() {
	var rdm45 = Math.round(Math.random() * 99);
	if (rdm45 <= player.stats.evade) {
		alert("The enemy missed you.");
	}
	else {
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		alert("The enemy hit you for " + eattack + " points of damage.");
		showstat();
	}
	ysurvive();
}

function regularattack() {
	if (attacktype == 1) { b1() };
	if (attacktype == 2) { b2() };
	if (attacktype == 3) { b3() };
	if (attacktype == 4) { b4() };
	if (attacktype == 5) { b5() };
	if (attacktype == 6) { b6() };
	if (attacktype == 7) { b7() };
	if (attacktype == 8) { b8() };
	if (attacktype == 9) { b9() };
	if (attacktype == 10) { b10() };
	if (attacktype == 11) { b11() };
	if (attacktype == 12) { b12() };
	if (attacktype == 13) { b13() };
	if (attacktype == 14) { b14() };
	if (attacktype == 15) { b15() };
	if (attacktype == 16) { b16() };
	if (attacktype == 17) { b17() };
	if (attacktype == 18) { b18() };
	if (attacktype == 19) { b19() };
	if (attacktype == 20) { b20() };
	if (attacktype == 21) { b21() };
	if (attacktype == 22) { b22() };
	if (attacktype == 23) { b23() };
	if (attacktype == 24) { b24() };
	if (attacktype == 25) { b25() };
	if (attacktype == 26) { b26() };
	if (attacktype == 27) { b27() };
	if (attacktype == 28) { b28() };
}

function specialattack() {
	if (attacktype == 1) { regularattack() };
	if (attacktype == 2) { regularattack() };
	if (attacktype == 3) { regularattack() };
	if (attacktype == 4) { special4() };
	if (attacktype == 5) { special5() };
	if (attacktype == 6) { special6() };
	if (attacktype == 7) { regularattack() };
	if (attacktype == 8) { special8() };
	if (attacktype == 9) { special9() };
	if (attacktype == 10) { special10() };
	if (attacktype == 11) { special11() };
	if (attacktype == 12) { special12() };
	if (attacktype == 13) { special13() };
	if (attacktype == 14) { special14() };
	if (attacktype == 15) { special15() };
	if (attacktype == 16) { special16() };
	if (attacktype == 17) { special17() };
	if (attacktype == 18) { special18() };
	if (attacktype == 19) { special19() };
	if (attacktype == 20) { special20() };
	if (attacktype == 21) { special21() };
	if (attacktype == 22) { special22() };
	if (attacktype == 23) { special23() };
	if (attacktype == 24) { special24() };
	if (attacktype == 25) { special25() };
	if (attacktype == 26) { special26() };
	if (attacktype == 27) { special27() };
	if (attacktype == 28) { special28() };
}

function wakeup() {
	var wakerdm = Math.round(Math.random() * 100);
	if (wakerdm <= wakepower) {
		alert("The enemy just woke up.");
		sleep = 0;
	}
	else {
		alert("The enemy is asleep.");
	}
}

function stopup() {
	var stoprdm = Math.round(Math.random() * 100);
	if (stoprdm <= stoppower) {
		alert("The enemy recovered from being paralyze.");
		stop = 0;
	}
	else {
		alert("The enemy paralyze.");
	}
}

function enemyattack() {
	if (sleep == 1) {
		wakeup();
	}
	else {
		enemyattack2();
	}
}

function enemyattack2() {
	if (stop == 1) {
		stopup();
	}
	else {
		fightback();
	}
}

function fightback() {
	var rdm0 = Math.round(Math.random() * 99);
	if (rdm0 >= 20) {
		regularattack();
	}
	else {
		specialattack();
	}
}

function fight1() {
	if (player.gear.weapon == 1) { attackb = Math.round(Math.random() * 4 + 1) };
	if (player.gear.weapon == 2) { attackb = Math.round(Math.random() * 6 + 1) };
	if (player.gear.weapon == 3) { attackb = Math.round(Math.random() * 4 + 2) };
	if (player.gear.weapon == 4) { attackb = Math.round(Math.random() * 6 + 2) };
	if (player.gear.weapon == 5) { attackb = Math.round(Math.random() * 5 + 3) };
	if (player.gear.weapon == 6) { attackb = Math.round(Math.random() * 8 + 3) };
	if (player.gear.weapon == 7) { attackb = Math.round(Math.random() * 15 + 2) };
	if (player.gear.weapon == 8) { attackb = Math.round(Math.random() * 20 + 2) };
	if (player.gear.weapon == 9) { attackb = Math.round(Math.random() * 30 + 2) };
	if (player.gear.weapon == 10) { attackb = Math.round(Math.random() * 50 + 5) };
	if (player.gear.weapon == 11) { attackb = Math.roung(Math.random() * 100 + 1) };

	var rdm4 = Math.round(Math.random() * 99);
	var renemyevade = Math.round(enemyevade * 1) - (player.stats.agility * .5);
	if (rdm4 <= renemyevade) {
		attackp = 0;
		alert("You missed the enemy.");
	}
	else {
		attackp = Math.round(((player.stats.strength * .5) + (player.stats.strength * Math.random() * 1) + (addstr * 1) + (attackb * 1) - (earmor * 1)) * (att * 1));
		if (attackp <= 0) { attackp = 0 };
		alert("You hit the enemy for " + attackp + " hit points.");
	};
	survive();
}

function mon1() {
	var rdm1 = Math.round(Math.random() * 99);
	if (rdm1 <= 20) { a1() };
	if (rdm1 <= 40 && rdm1 >= 21) { a2() };
	if (rdm1 <= 70 && rdm1 >= 41) { a3() };
	if (rdm1 >= 71) { a4() };
}

function mon2() {
	var rdma = Math.round(Math.random() * 99);
	if (rdma <= 20) { a4() };
	if (rdma <= 40 && rdma >= 21) { a6() };
	if (rdma <= 70 && rdma >= 41) { a7() };
	if (rdma >= 71) { a8() };
}

function mon3() {
	var rdmb = Math.round(Math.random() * 99);
	if (rdmb <= 10) { a8() };
	if (rdmb <= 30 && rdmb >= 11) { a10() };
	if (rdmb <= 50 && rdmb >= 31) { a11() };
	if (rdmb <= 70 && rdmb >= 51) { a12() };
	if (rdmb >= 71) { a13() };
}

function mon4() {
	var rdmc = Math.round(Math.random() * 99);
	if (rdmc <= 10) { a13() };
	if (rdmc <= 30 && rdmc >= 11) { a15() };
	if (rdmc <= 50 && rdmc >= 31) { a16() };
	if (rdmc <= 70 && rdmc >= 51) { a17() };
	if (rdmc >= 71) { a18() };
}

function mon5() {
	var rdml = Math.round(Math.random() * 99);
	if (rdml <= 20) { a20() };
	if (rdml <= 30 && rdml >= 21) { a21() };
	if (rdml <= 50 && rdml >= 31) { a22() };
	if (rdml <= 60 && rdml >= 51) { a23() };
	if (rdml <= 80 && rdml >= 61) { a24() };
	if (rdml >= 81) { a25() };
}

function cast1() {
	if (player.mp.current >= 10) {
		player.mp.current = (player.mp.current * 1) - (10 * 1);
		var add = Math.round((player.stats.magic * .8) + (player.stats.magic * Math.random() * .5 * player.class.cleric));
		player.hp.current = (player.hp.current * 1) + (add * 1);
		alert("You cast heal and recovered " + add + " hp.");
		if (player.hp.current > player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		attackp = 0;
		survive();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast2() {
	if (player.mp.current >= 8) {
		player.mp.current = (player.mp.current * 1) - (8 * 1);
		attackp = Math.round((Math.random() * 10) + (player.stats.magic * .8) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast fire and inflicted " + attackp + " points of damage.");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast3() {
	if (player.mp.current >= 10) {
		player.mp.current = (player.mp.current * 1) - (10 * 1);
		attackp = Math.round((Math.random() * 10) + (player.stats.magic * .9) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast ice and inflicted " + attackp + " points of damage.");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast4() {
	if (player.mp.current >= 12) {
		player.mp.current = (player.mp.current * 1) - (12 * 1);
		attackp = Math.round((Math.random() * 10) + (player.stats.magic * 1) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast lightning and inflicted " + attackp + " points of damage.");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast5() {
	if (player.mp.current >= 20) {
		player.mp.current = (player.mp.current * 1) - (20 * 1);
		attackp = Math.round((Math.random() * 12) + (player.stats.magic * .65) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("You cast drain and took " + attackp + " hp from the enemy.");
		player.hp.current = (player.hp.current * 1) + (attackp * 1);
		if (player.hp.current >= player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast6() {
	if (player.mp.current >= 30) {
		player.mp.current = (player.mp.current * 1) - (30 * 1);
		attackp = Math.round((Math.random() * 30) + (player.stats.magic * 1.85) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast fire storm and inflicted " + attackp + " points of damage.");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast7() {
	if (player.mp.current >= 35) {
		player.mp.current = (player.mp.current * 1) - (35 * 1);
		attackp = Math.round((Math.random() * 30) + (player.stats.magic * 2) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast blizzard and inflicted " + attackp + " points of damage.");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast8() {
	if (player.mp.current >= 40) {
		player.mp.current = (player.mp.current * 1) - (40 * 1);
		attackp = Math.round((Math.random() * 30) + (player.stats.magic * 2.15) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast shock and inflicted " + attackp + " points of damage.");
		survive();
		showstat();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast9() {
	if (player.mp.current >= 25) {
		player.mp.current = (player.mp.current * 1) - (25 * 1);
		var add = Math.round((player.stats.magic * 1.6) + (player.stats.magic * Math.random() * .8 * player.class.cleric));
		player.hp.current = (player.hp.current * 1) + (add * 1);
		alert("You cast heal2 and recovered " + add + " hp.");
		if (player.hp.current > player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		attackp = 0;
		survive();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast10() {
	if (player.class.mage == 1) {
		cast10a();
	}
	else {
		alert("Only a player.class.mage may cast this spell.");
	}
	showstat();
}

function cast10a() {
	if (player.mp.current >= 80) {
		player.mp.current = (player.mp.current * 1) - (80 * 1);
		attackp = Math.round((Math.random() * 50) + (player.stats.magic * 3.5) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("Your cast meteor and inflicted " + attackp + " points of damage.");
		survive();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast11() {
	if (player.class.mage == 1) {
		cast11z();
	}
	else {
		alert("Only a player.class.mage can cast this spell.");
	}
	showstat();
}

function cast11z() {
	if (player.mp.current >= 80) {
		player.mp.current = (player.mp.current * 1) - (80 * 1);
		showstat();
		cast11a();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast11a() {
	if (isboss == 0) {
		caldeath();
		survive();
	}
	else {
		alert("Failed.")
		attackp = 0;
		survive();
	}
}

function caldeath() {
	var rdmd = Math.round(Math.random() * 99);
	var successnumber = Math.round(player.stats.magic / .33);
	if (rdmd <= successnumber) {
		attackp = ehp;
		alert("Success!");
	}
	else {
		alert("Failed.");
		attackp = 0;
	}
}


function cast12() {
	if (player.mp.current >= 35) {
		cast12a();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast12a() {
	if (def != 0) {
		alert("Spell is already in effect.");
	}
	else {
		player.mp.current = ((player.mp.current * 1) - (35 * 1));
		def = Math.round((Math.random() * player.stats.magic) + (player.stats.magic * .10));
		alert("You cast protect and your defence increased by " + def + ".");
		showstat();
		attackp = 0;
		survive();
	}
}

function cast13() {
	if (player.mp.current >= 35) {
		cast13a();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast13a() {
	if (magdef != 0) {
		alert("Spell is already in effect.");
	}
	else {
		player.mp.current = ((player.mp.current * 1) - (35 * 1));
		magdef = Math.round((Math.random() * player.stats.magic) + (player.stats.magic * .10));
		alert("You cast barrier and your magic defence increased by " + magdef + ".");
		showstat();
		attackp = 0;
		survive();
	}
}

function cast14() {
	if (player.mp.current >= 50) {
		player.mp.current = (player.mp.current * 1) - (50 * 1);
		player.hp.current = player.hp.max;
		alert("You cast heal3 and recovered all hp.");
		if (player.hp.current > player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		attackp = 0;
		survive();
	}
	else {
		alert("You don't have enough mp.");
	}
}


//Sleep
function cast15() {
	if (player.mp.current >= 15) {
		player.mp.current = (player.mp.current * 1) - (15 * 1);
		showstat();
		cast15a();
		attackp = 0;
		survive();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast15a() {
	var sleeprdm = Math.round(Math.random() * 100);
	var mpower = Math.round((20 * 1) + (Math.random() * player.stats.magic));
	if (sleeprdm <= mpower) {
		sleep = 1;
		alert("You have put the enemy to sleep.");
	}
	else {
		alert("You cast sleep and failed.");
	}

}


//Paralyze
function cast16() {
	if (player.mp.current >= 30) {
		player.mp.current = (player.mp.current * 1) - (30 * 1);
		showstat();
		cast16a();
		attackp = 0;
		survive();
	}
	else {
		alert("You don't have enough mp.");
	}
}

function cast16a() {
	var stoprdm = Math.round(Math.random() * 100);
	var mpower = Math.round((25 * 1) + (Math.random() * player.stats.magic * 1.3));
	if (stoprdm <= mpower) {
		stop = 1;
		alert("You have paralyzed the enemy.");
	}
	else {
		alert("You cast paralyze and failed.");
	}

}

//Drain 2
function cast17() {
	if (player.mp.current >= 50) {
		player.mp.current = (player.mp.current * 1) - (50 * 1);
		attackp = Math.round((player.stats.magic * 1.5) + (player.stats.magic * Math.random() * 1.8) - (marmor * 1));
		if (attackp <= 0) { attackp = 1 };
		alert("You cast drain2 and took " + attackp + " hp from the enemy.");
		player.hp.current = (player.hp.current * 1) + (attackp * 1);
		if (player.hp.current >= player.hp.max) { player.hp.current = player.hp.max };
		showstat();
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}

//Analyze
function cast18() {
	if (player.mp.current >= 5) {
		player.mp.current = (player.mp.current * 1) - (5 * 1);
		attackp = 0;
		alert("You have analyze the enemy.");
		alert("HP  " + ehp + " / " + mhp);
		alert("Physical Defense  " + earmor);
		alert("Magic Defense  " + marmor);
		alert("Evade  " + enemyevade + "%");
		alert("Alertness  " + wakepower + "%");
		alert("Constitution  " + stoppower + "%");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}


//Attack Up

function cast19() {
	if (addstr == 0) {
		cast19a();
	}
	else {
		alert("Spell is already in effect.");
	}
}

function cast19a() {
	if (player.mp.current >= 40) {
		player.mp.current = (player.mp.current * 1) - (40 * 1);
		addstr = Math.round((Math.random() * 10) + (player.stats.magic * .7));
		attackp = 0;
		alert("Your attack power is increased by " + addstr + ".");
		survive();
		showstat();
	}
	else {
		alert("You don't have enough mp.");
	}
}




















//Enemy and Stats


//Wild Man

function a1() {
	document.monster.src = "monster/a1.gif";
	alert("You have encountered a wild man.");
	ehp = 60;
	enemyevade = 20;
	earmor = 1;
	marmor = 0;
	wingold = 50;
	winexp = 25;
	attacktype = 1;
	isboss = 0;
	wakepower = 33;
	stoppower = 5;
}

function b1() {
	eattack = Math.round(((Math.random() * 7) + (7 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}


//Squire

function a2() {
	document.monster.src = "monster/a2.gif";
	ehp = 60;
	alert("You have encountered a squire.");
	enemyevade = 10;
	earmor = 0;
	marmor = 0;
	wingold = 60;
	winexp = 30;
	attacktype = 2;
	isboss = 0;
	wakepower = 24;
	stoppower = 6;
}

function b2() {
	eattack = Math.round(((Math.random() * 10) + (8 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}


//Amazon

function a3() {
	document.monster.src = "monster/a3.gif";
	alert("You have encountered an amazon.");
	ehp = 50;
	enemyevade = 35;
	earmor = 0;
	marmor = 1;
	wingold = 60;
	winexp = 20;
	attacktype = 3;
	isboss = 0;
	wakepower = 20;
	stoppower = 8;
}

function b3() {
	eattack = Math.round(((Math.random() * 8) + (6 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (Math.random() * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}


//Novice Knight

function a4() {
	document.monster.src = "monster/a4.gif";
	alert("You have encountered a novice knight.");
	ehp = 80;
	enemyevade = 5;
	earmor = 5;
	marmor = 1;
	wingold = 100;
	winexp = 55;
	attacktype = 4;
	isboss = 0;
	wakepower = 40;
	stoppower = 15;
}


function b4() {
	eattack = Math.round(((Math.random() * 5) + (12 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special4() {
	eattack = Math.round(((Math.random() * 20) + (20 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("Novice knight charges at you and inflicts " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Female Mercenary: (Boss1)

function fboss1() {
	alert("You have encountered a female mercenary.");
	document.monster.src = "monster/boss1.gif";
	ehp = 350;
	enemyevade = 30;
	earmor = 6;
	marmor = 3;
	wingold = 800;
	winexp = 400;
	attacktype = 5;
	isboss = 1;
	wakepower = 75;
	stoppower = 42;
}

function b5() {
	eattack = Math.round(((Math.random() * 20) + (20 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special5() {
	eattack = Math.round(((Math.random() * 20) + (40 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("Female mercenary trust her spear at you and caused " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Female Barbarian

function a6() {
	document.monster.src = "monster/a6.gif";
	alert("You have encountered a female barbarian.");
	ehp = 100;
	enemyevade = 5;
	earmor = 1;
	marmor = 0;
	wingold = 150;
	winexp = 55;
	attacktype = 6;
	isboss = 0;
	wakepower = 48;
	stoppower = 30;
}


function b6() {
	eattack = Math.round(((Math.random() * 10) + (25 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special6() {
	eattack = Math.round(((Math.random() * 20) + (40 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 0 };
	alert("The female barbarian lunges at you and inflicts " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Lizard

function a7() {
	document.monster.src = "monster/a7.gif";
	alert("You have encountered a lizard.");
	ehp = 90;
	enemyevade = 30;
	earmor = 2;
	marmor = 2;
	wingold = 140;
	winexp = 85;
	attacktype = 7;
	isboss = 0;
	wakepower = 44;
	stoppower = 22;
}


function b7() {
	eattack = Math.round(((Math.random() * 15) + (30 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}


//Lesser Dragon

function a8() {
	document.monster.src = "monster/a8.gif";
	alert("You have encountered a lesser dragon.");
	ehp = 200;
	enemyevade = 10;
	earmor = 8;
	marmor = 2;
	wingold = 350;
	winexp = 120;
	attacktype = 8;
	isboss = 0;
	wakepower = 20;
	stoppower = 12;
}


function b8() {
	eattack = Math.round(((Math.random() * 20) + (40 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special8() {
	eattack = Math.round((Math.random() * 10) + (50 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("The lesser dragon breath fire on you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}

//Red Dragon: (Boss2)

function fboss2() {
	alert("You have encountered a red dragon.");
	document.monster.src = "monster/boss2.gif";
	ehp = 800;
	enemyevade = 20;
	earmor = 9;
	marmor = 5;
	wingold = 2000;
	winexp = 1200;
	attacktype = 9;
	isboss = 1;
	wakepower = 70;
	stoppower = 55;
}

function b9() {
	eattack = Math.round(((Math.random() * 15) + (55 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special9() {
	eattack = Math.round((Math.random() * 25) + (55 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("Red dragon breath fire causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}



//Winged Warrior

function a10() {
	document.monster.src = "monster/a10.gif";
	alert("You have encountered a winged warrior.");
	ehp = 150;
	enemyevade = 50;
	earmor = 2;
	marmor = 2;
	wingold = 300;
	winexp = 240;
	attacktype = 10;
	isboss = 0;
	wakepower = 38;
	stoppower = 25;
}

function b10() {
	eattack = Math.round(((Math.random() * 18) + (54 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special10() {
	eattack = Math.round(((Math.random() * 28) + (54 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("The winged warrior dives toward you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Red Gargoyle

function a11() {
	document.monster.src = "monster/a11.gif";
	alert("You have encountered a red gargoyle.");
	ehp = 160;
	enemyevade = 35;
	earmor = 3;
	marmor = 2;
	wingold = 400;
	winexp = 280;
	attacktype = 11;
	isboss = 0;
	wakepower = 36;
	stoppower = 32;
}


function b11() {
	eattack = Math.round(((Math.random() * 35) + (65 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special11() {
	alert("The red gargoyle flees.");
	outsidebutton();
	document.monster.src = "pic/outside.gif";
}


//Werewolf

function a12() {
	document.monster.src = "monster/a12.gif";
	alert("You have encountered a werewolf.");
	ehp = 250;
	enemyevade = 20;
	earmor = 4;
	marmor = 5;
	wingold = 500;
	winexp = 320;
	attacktype = 12;
	isboss = 0;
	wakepower = 62;
	stoppower = 30;
}

function b12() {
	eattack = Math.round(((Math.random() * 25) + (84 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special12() {
	eattack = Math.round(((Math.random() * 20) + (125 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("The werewolf bites you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}



//Apprentice Mage

function a13() {
	document.monster.src = "monster/a13.gif";
	alert("You have encountered an apprentice player.class.mage.");
	ehp = 200;
	enemyevade = 20;
	earmor = 2;
	marmor = 8;
	wingold = 600;
	winexp = 420;
	attacktype = 13;
	isboss = 0;
	wakepower = 50;
	stoppower = 45;
}

function b13() {
	var morespell = Math.round(Math.random() * 99);
	if (morespell >= 40) {
		eattack = Math.round(((Math.random() * 20) + (64 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		counter();
	}
	else {
		special13();
	}
}

function special13() {
	if (ehp >= 60) {
		eattack = Math.round((Math.random() * 25) + (88 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The apprentice player.class.mage cast fire on you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
	else {
		var hself = Math.round((Math.random() * 80) + (40 * 1));
		ehp = (hself * 1) + (ehp * 1);
		if (ehp > 150) { ehp = 150 };
		alert("The apprentice player.class.mage cast heal on himself and recovered " + hself + " hit points.");
	}
}




//Warlock: (Boss3)

function fboss3() {
	alert("You have encountered a warlock.");
	document.monster.src = "monster/boss3.gif";
	ehp = 1200;
	enemyevade = 20;
	earmor = 4;
	marmor = 15;
	wingold = 3000;
	winexp = 1400;
	attacktype = 14;
	isboss = 1;
	wakepower = 78;
	stoppower = 75;
}

function b14() {
	var morespell = Math.round(Math.random() * 99);
	if (morespell >= 75) {
		eattack = Math.round(((Math.random() * 20) + (75 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		counter();
	}
	else {
		special14();
	}
}

function special14() {
	if (ehp >= 200) {
		eattack = Math.round((Math.random() * 30) + (100 * 1) - (player.stats.magic * .25) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The warlock cast fire storm on you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
	else {
		sp14x();
	}
}

function sp14x() {
	var rdmwarlock = Math.round(Math.random() * 99);
	if (rdmwarlock <= 40) {
		eattack = Math.round((Math.random() * 30) + (100 * 1) - (player.stats.magic * .25) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The warlock cast fire storm on you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	};
	if (rdmwarlock <= 80 && rdmwarlock >= 41) {
		eattack = Math.round((Math.random() * 32) + (80 * 1) - (player.stats.magic * .25) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The warlock cast drain and took " + eattack + " hit points from you.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
		ehp = (ehp * 1) + (eattack * 1);
	};
	if (rdmwarlock >= 81) {
		var hself = Math.round((Math.random() * 20) + (85 * 1));
		ehp = (hself * 1) + (ehp * 1);
		alert("Warlock cast heal on himself and recovered " + hself + " hit points.");
	};
}



//Archer

function a15() {
	document.monster.src = "monster/a15.gif";
	alert("You have encountered an archer.");
	ehp = 250;
	enemyevade = 20;
	earmor = 5;
	marmor = 6;
	wingold = 600;
	winexp = 600;
	attacktype = 15;
	isboss = 0;
	wakepower = 55;
	stoppower = 20;
}

function b15() {
	eattack = Math.round(((Math.random() * 23) + (84 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special15() {
	eattack = Math.round(((Math.random() * 55) + (88 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("The archer shoots a flaming arrow causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Blue Dragon

function a16() {
	document.monster.src = "monster/a16.gif";
	alert("You have encountered a blue dragon.");
	ehp = 350;
	enemyevade = 5;
	earmor = 15;
	marmor = 12;
	wingold = 600;
	winexp = 750;
	attacktype = 16;
	isboss = 0;
	wakepower = 58;
	stoppower = 35;
}

function b16() {
	eattack = Math.round(((Math.random() * 20) + (88 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special16() {
	eattack = Math.round((Math.random() * 50) + (88 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("The blue dragon breath ice causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}



//Long Swordmen

function a17() {
	document.monster.src = "monster/a17.gif";
	alert("You have encountered a long swordmen.");
	ehp = 300;
	enemyevade = 12;
	earmor = 10;
	marmor = 2;
	wingold = 580;
	winexp = 600;
	attacktype = 17;
	isboss = 0;
	wakepower = 50;
	stoppower = 33;
}

function b17() {
	eattack = Math.round(((Math.random() * 20) + (84 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special17() {
	eattack = Math.round(((Math.random() * 45) + (84 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("The long swordmen trust at you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}



//Pegasus

function a18() {
	document.monster.src = "monster/a18.gif";
	alert("You have encountered a pegasus.");
	ehp = 300;
	enemyevade = 65;
	earmor = 8;
	marmor = 14;
	wingold = 850;
	winexp = 730;
	attacktype = 18;
	isboss = 0;
	wakepower = 60;
	stoppower = 50;
}

function b18() {
	eattack = Math.round(((Math.random() * 20) + (80 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special18() {
	eattack = Math.round(((Math.random() * 30) + (85 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("The pegasus charges at you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Minotaur: (Boss4)

function fboss4() {
	alert("You have encountered a minotaur.");
	document.monster.src = "monster/boss4.gif";
	ehp = 2000;
	enemyevade = 5;
	earmor = 20;
	marmor = 7;
	wingold = 5000;
	winexp = 8000;
	attacktype = 19;
	isboss = 1;
	wakepower = 95;
	stoppower = 45;
}

function b19() {
	eattack = Math.round(((Math.random() * 20) + (110 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special19() {
	eattack = Math.round(((Math.random() * 50) + (160 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("Minotaur charges at you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Dark Knight

function a20() {
	document.monster.src = "monster/a20.gif";
	alert("You have encountered a dark knight.");
	ehp = 480;
	enemyevade = 40;
	earmor = 15;
	marmor = 22;
	wingold = 800;
	winexp = 2900;
	attacktype = 20;
	isboss = 0;
	wakepower = 60;
	stoppower = 55;
}

function b20() {
	eattack = Math.round(((Math.random() * 50) + (110 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1) * (1 * stance)));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special20() {
	eattack = Math.round((Math.random() * 50) + (80 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("The dark knight cast drain and took " + eattack + " hit points from you.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
	ehp = (ehp * 1) + (eattack * 1);
	if (ehp > 400) { ehp = 400 };
}



//Squad Leader

function a21() {
	document.monster.src = "monster/a21.gif";
	alert("You have encountered a squad leader.");
	ehp = 550;
	enemyevade = 20;
	earmor = 20;
	marmor = 4;
	wingold = 1000;
	winexp = 3125;
	attacktype = 21;
	isboss = 0;
	wakepower = 75;
	stoppower = 35;
}

function b21() {
	eattack = Math.round(((Math.random() * 20) + (120 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special21() {
	eattack = Math.round(((Math.random() * 40) + (140 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	alert("The squad leader charges at you causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Paladin

function a22() {
	document.monster.src = "monster/a22.gif";
	alert("You have encountered a paladin.");
	ehp = 660;
	enemyevade = 15;
	earmor = 25;
	marmor = 18;
	wingold = 1200;
	winexp = 2350;
	attacktype = 22;
	isboss = 0;
	wakepower = 78;
	stoppower = 55;
}

function b22() {
	if (ehp >= 200) {
		eattack = Math.round(((Math.random() * 40) + (90 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		counter();
	}
	else {
		special22b();
	}
}

function special22() {
	if (ehp >= 200) {
		eattack = Math.round(((Math.random() * 40) + (110 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		alert("The paladin charges at you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
	else {
		special22b();
	}
}

function special22b() {
	var rdms = Math.round(Math.random() * 99);
	if (rdms >= 50) {
		var hself = Math.round((Math.random() * 80) + (80 * 1));
		ehp = (ehp * 1) + (hself * 1);
		alert("The paladin cast heal and recovered " + hself + " hit points.");
	}
	else {
		eattack = Math.round(((Math.random() * 35) + (135 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		alert("The paladin charges at you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
}


//Heavy Calvary

function a23() {
	document.monster.src = "monster/a23.gif";
	alert("You have encountered a heavy calvary.");
	ehp = 680;
	enemyevade = 10;
	earmor = 25;
	marmor = 9;
	wingold = 1500;
	winexp = 2680;
	attacktype = 23;
	isboss = 0;
	wakepower = 88;
	stoppower = 64;
}

function b23() {
	eattack = Math.round(((Math.random() * 35) + (110 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special23() {
	if (ehp >= 200) {
		eattack = Math.round(((Math.random() * 45) + (120 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		alert("The heavy calvary charges at you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
	else {
		eattack = Math.round((Math.random() * 40) + (75 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The heavy calvary drained " + eattack + " hit points from you.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
		ehp = (ehp * 1) + (eattack * 1);
		if (ehp > 600) { ehp = 600 };
	}
}


//Red Mage

function a24() {
	document.monster.src = "monster/a24.gif";
	alert("You have encountered a red player.class.mage.");
	ehp = 480;
	enemyevade = 40;
	earmor = 10;
	marmor = 27;
	wingold = 1500;
	winexp = 4200;
	attacktype = 24;
	isboss = 0;
	wakepower = 75;
	stoppower = 70;
}

function b24() {
	eattack = Math.round(((Math.random() * 40) + (96 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special24() {
	eattack = Math.round((Math.random() * 100) + (180 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("The red player.class.mage cast meteor on you causing " + eattack + " hit points from you.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}


//Fire Dragon

function a25() {
	document.monster.src = "monster/a25.gif";
	alert("You have encountered a fire dragon.");
	ehp = 820;
	enemyevade = 15;
	earmor = 18;
	marmor = 18;
	wingold = 1350;
	winexp = 1960;
	attacktype = 25;
	isboss = 0;
	wakepower = 75;
	stoppower = 45;
}

function b25() {
	eattack = Math.round(((Math.random() * 60) + (145 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special25() {
	eattack = Math.round((Math.random() * 60) + (175 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("The fire dragon breath fire causing " + eattack + " points of damage.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}










//Final Boss

//Stage1 Necromancer: (Final Boss1)

function fboss5() {
	alert("You have encountered a necromancer.");
	document.monster.src = "monster/bossf1.gif";
	ehp = 1500;
	mhp = 1500;
	enemyevade = 8;
	earmor = 6;
	marmor = 55;
	wingold = 12;
	winexp = 3;
	attacktype = 26;
	isboss = 1;
	wakepower = 90;
	stoppower = 89;
}

function b26() {
	var morespell0 = Math.round(Math.random() * 99);
	if (morespell0 >= 65) {
		eattack = Math.round(((Math.random() * 20) + (100 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
		if (eattack <= 0) { eattack = 1 };
		counter()
	}
	else {
		special26();
	}
}

function special26() {
	if (ehp >= 400) {
		eattack = Math.round((Math.random() * 45) + (100 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The necromancer cast blizzard on you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
	else {
		sp26x();
	}
}

function sp26x() {
	var rdmwarlock0 = Math.round(Math.random() * 99);
	if (rdmwarlock0 <= 60) {
		eattack = Math.round((Math.random() * 45) + (100 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The necromacer cast blizzard on you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	};
	if (rdmwarlock0 <= 90 && rdmwarlock0 >= 61) {
		eattack = Math.round((Math.random() * 30) + (75 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The warlock cast drain on you and took " + eattack + " hit points from you.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
		ehp = (ehp * 1) + (eattack * 1);
		if (ehp > 500) { ehp = 500 };
	};
	if (rdmwarlock0 >= 91) {
		eattack = Math.round((Math.random() * 30) + (120 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The warlock cast drain2 on you and took " + eattack + " hit points from you.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
		ehp = (ehp * 1) + (eattack * 1);
		if (ehp > 500) { ehp = 500 };
	};
}

//Stage2 Reaper

function fboss6() {
	document.monster.src = "monster/bossf2.gif";
	alert("You have encountered a reaper.");
	ehp = 2500;
	mhp = 4000;
	enemyevade = 50;
	earmor = 0;
	marmor = 90;
	wingold = 15;
	winexp = 4;
	attacktype = 27;
	isboss = 1;
	wakepower = 80;
	stoppower = 75;
}

function b27() {
	eattack = Math.round(((Math.random() * 45) + (140 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special27() {
	if (ehp <= 300) {
		eattack = Math.round((Math.random() * 50) + (120 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The reaper cast drain2 on you and took " + eattack + " hit points from you.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
		ehp = (ehp * 1) + (eattack * 1);
		if (ehp > 1200) { ehp = 1200 };
	}
	else {
		eattack = Math.round((Math.random() * 50) + (150 * 1) - (player.stats.magic * .75) - (magdef * 1));
		if (eattack <= 0) { eattack = 1 };
		alert("The reaper cast blizzard on you causing " + eattack + " points of damage.");
		player.hp.current = (player.hp.current * 1) - (eattack * 1);
		showstat();
		ysurvive();
	}
}


//Stage3 Dark Serpent

function fboss7() {
	document.monster.src = "monster/bossf3.gif";
	alert("You have encountered dark serpent.");
	ehp = 6000;
	mhp = 1000;
	enemyevade = 25;
	earmor = 30;
	marmor = 45;
	wingold = 15;
	winexp = 2;
	attacktype = 28;
	isboss = 1;
	wakepower = 95;
	stoppower = 92;
}

function b28() {
	eattack = Math.round(((Math.random() * 80) + (180 * 1) - (player.gear.armor * 1) - (player.stats.endurance * .25) - (player.gear.shield * player.class.fighter) - (def * 1)) * (1 * stance));
	if (eattack <= 0) { eattack = 1 };
	counter();
}

function special28() {
	eattack = Math.round((Math.random() * 75) + (200 * 1) - (player.stats.magic * .75) - (magdef * 1));
	if (eattack <= 0) { eattack = 1 };
	alert("The dark serpent cast dark matter causing " + eattack + " hit points from you.");
	player.hp.current = (player.hp.current * 1) - (eattack * 1);
	showstat();
	ysurvive();
}
