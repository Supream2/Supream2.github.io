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
dt.className="m",s.style.display="block",s.title="スキルで絞込み";
selectSet(s,[
"特殊効果","攻撃力補正","属性値","状態異常値","会心率","防御力","スタン値","飛竜種特効","鳥竜種特効","甲殻種特効","魚竜種特効","牙獣種特効","獣竜種特効","海竜種特効","古龍種特効","小型特効","－－－－－－","猛暑","厳寒","朝方特効","深夜特効","繁殖期特効","温暖期特効","寒冷期特効","月曜日特効","火曜日特効","水曜日特効","木曜日特効","金曜日特効","土曜日特効","日曜日特効","管理人の友","気球の友","ダウジング","狩人魂","入魂のススメ","グークの友","ホルクの友","報酬上手","経験上手","雑食","解体屋","居眠り","おとり","だだコネ","結束","援護","速射追加","超速射追加","速射無効","排熱噴射追加","バリスタ節約","無属弓強化","無属片手強化","音爆範囲拡大","技強化[片手]","技強化[双剣]","技強化[大剣]","技強化[太刀]","技強化[槍]","技強化[銃槍]","技強化[鎚]","技強化[笛]","技変化[片手]","技変化[双剣]","技変化[大剣]","技変化[太刀]","技変化[槍]","技変化[銃槍]","技変化[鎚]","技変化[笛]","技変化[軽銃]","技変化[重銃]","技変化[弓]","リーチUP","砲撃変化","旋律変化１","旋律変化２","旋律変化３","曲射変化","レア度変化","砲撃強化","技強化[弓]","ネコブリーダー","弾変化","抜刀強化[大剣]","抜刀強化[鎚]","抜刀強化[槍]","抜刀強化[片手]","抜刀強化[双剣]","抜刀強化[太刀]","抜刀強化[笛]","抜刀強化[銃槍]","抜刀強化[棍]","技強化[棍]","牙竜種特効","抜刀移動速度","技強化[剣斧]","技強化[重銃]","大剣強化","重銃強化","鎚強化","槍強化","片手剣強化","軽銃強化","双剣強化","太刀強化","狩猟笛強化","銃槍強化","弓強化","穿龍棍強化","剣斧強化","磁斬鎚強化","再使用待機時間","効果時間","[辿]火耐性","[辿]水耐性","[辿]氷耐性","[辿]雷耐性","[辿]龍耐性","[辿]持続回復","[辿]豪傑","[辿]攻撃力","[辿]属性値","[辿]移動速度","[範]攻撃力","[範]属性値","[範]会心率","[範]状態異常","[範]スタン値","[範]持続回復","[範]全耐性"
]);
tH.cells[1].appendChild(s.cloneNode(true));
tH.cells[1].appendChild(s.cloneNode(true));
var ckSkill_F = function (e) {
	return e === "特殊効果" ? function(){return true} : function (cell) {return cell.innerHTML.indexOf(">"+e+"<") !== -1;};
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
