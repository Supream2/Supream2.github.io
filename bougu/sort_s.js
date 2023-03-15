setTimeout(function (){
/*@cc_on if (@_jscript_version < 9) {_d=document;eval('var document=_d');}@*/
//イベントセット
var addEvent = function (elm, type, func) {
	//追加
	elm./*@if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ type,func,false);
	//アンロードで削除
	window./*@if (@_jscript_version < 9) attachEvent ('on' + @else@*/ addEventListener (/*@end@*/ "unload",
		function(){
			elm./*@if (@_jscript_version < 9) detachEvent ('on' + @else@*/ removeEventListener (/*@end@*/ type,func,false);
		}
		,false);
};
//リストセット
var selectSet = function(e,v) {
	var m = v.length;
	/*@if (@_jscript_version < 9)
	e.options.length = m;
	for (var i = 0;i < m;e.options[i].value = e.options[i].text = v[i++]);
	@else@*/
	e.length = 0;
	for (var i = 0,o;i < m;i++){
		o = document.createElement("option");
		o.setAttribute("value", v[i]);
		o.appendChild(document.createTextNode(v[i]));
		e.appendChild(o.cloneNode(true));
	}
	/*@end@*/
};

//HTMLにボタン追加

//初期設定
var tH = document.getElementsByTagName("thead")[0].rows[0],
	dt = document.createElement("div"),
	s = document.createElement("select");
dt.className="m",s.style.display="block",s.title="Filter by Skill";
selectSet(s,[
"Special Effects","Attack","Elemental","Status Attack","Affinity","Defense","Stun Value","Flying Wyvern","Bird Wyvern","Carapaceon","Piscine","Fanged Beast","Brute Wyvern","Leviathan","Elder Dragon","Minion","－－－－－－","Hot","Cold","Morning","Night","Breeding Season","Warm Season","Cold Season","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Manager's Friend","Balloon Friend","Dowsing","Hunter Soul","Soul Collection","Gook's Friend","Halk's Friend","Money Expert","Exp Expert","Omnivore","Carving Division","Nodding Off","Decoy","Tantrum","Unity","Support","Rapid Fire Add","Super R Fire","Disable Rapid","Heat Cannon Add","Ballista Saver","Raw Bow Boost","Raw SnS Boost","Sonic Bomb Range","Tech Boost[片手]","Tech Boost[双剣]","Tech Boost[大剣]","Tech Boost[太刀]","Tech Boost[槍]","Tech Boost[銃槍]","Tech Boost[鎚]","Tech Boost[笛]","Tech Change[片手]","Tech Change[双剣]","Tech Boost[大剣]","Tech Change[太刀]","Tech Change[槍]","Tech Change[銃槍]","Tech Change[鎚]","Tech Change[笛]","Tech Change[軽銃]","Tech Change[重銃]","Tech Change[弓]","Length UP","Shelling Change","Note Change 1","Note Change 2","Note Change 3","Arc","Rarity Change","Shelling Enhancement","Tech Boost[Bow]","Cat Breeder","Shot Change","Draw Strength[大剣]","Draw Strength[鎚]","Draw Strength[槍]","Draw Strength[片手]","Draw Strength[双剣]","Draw Strength[太刀]","Draw Strength[笛]","Draw Strength[銃槍]","Draw Strength[棍]","Tech Boost[Tonfa]","Fanged Wyvern","Unsheath","Tech Boost[SAF]","Tech Boost[HBG]","GS Strengthen","HBG Strengthen","Hammer Strengthen","Lance Strengthen","SnS Strengthen","LBG Strengthen","DS Strengthen","LS Strengthen","HH Strengthen","GL Strengthen","Bow Strengthen","Tonfa Strengthen","SAF Strengthen","MagSpike Strengthen","Recharge Duration","Effect Duration","[Zenith]Fire Res","[Zenith]Water Res","[Zenith]Ice Res","[Zenith]Thunder Res","[Zenith]Dragon Res","[Zenith]Healing","[Zenith]Heroics","[Zenith]Attack","[Zenith]Elemental","[Zenith]Movement Speed","[Ranged]Attack","[Ranged]Elemental","[Ranged]Affinity","[Ranged]Status","[Ranged]Stun","[Ranged]Healing","[Ranged]All Res"
]);
tH.cells[1].appendChild(s.cloneNode(true));
tH.cells[1].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "Special Effects" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
	};
tH=dt=s=null;

//装飾品
var filter = function () {
	var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select"),
		tr = document.getElementsByTagName("tbody")[0].rows,
		N = tr.length,
		ckSkill1 = ckSkill_F(s[0].value);
		ckSkill2 = ckSkill_F(s[1].value);
	for (var i = 0; i < N; i++) tr[i].style.display = ckSkill1(tr[i].cells[1]) && ckSkill2(tr[i].cells[1]) ? "" : "none";
}

var s = document.getElementsByTagName("thead")[0].getElementsByTagName("select");
for (var i = 0, max = s.length; i < max; addEvent(s[i++],"change",filter));
s=null;

}, 32);
