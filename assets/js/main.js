function supports_html5_storage(){try{return"localStorage"in window&&null!==window.localStorage}catch(i){return!1}}function settheme(i,e){"undefined"==typeof e&&(e=!0);var t=basethemeurl+i+".min.css";$('link[title="theme"]').attr("href",t),supports_storage&&e&&(localStorage.theme=i)}function japanruby(i){function e(i,e,t){var a=void 0==t?"*":"{"+t+"}",s=new RegExp("(.[ゅょゃュョャ]?){"+e+"}((.[ゅょゃュョャ]?)"+a+")"),n=s.exec(i)[2];return n}try{if(i.indexOf("!")>=0)return i=i.replace(/!(.*?)\((.*?)\)/g,"<rt></rt>$1<rt>$2</rt>"),"<ruby>"+i+"</ruby>";if(i.indexOf("@")>=0){var t=/([\u3040-\u309f\u30a0-\u30ff]*)@((?:\d{1,2})?)/g;return i.replace(t,function(i,t,a){return void 0==a||""==a?t:0==a?e(t,0,1)+"<span class='accent0'>"+e(t,1)+"</span>":1==a?"<span class='accent'>"+e(t,0,1)+"</span>"+e(t,a):e(t,0,1)+"<span class='accent'>"+e(t,1,a-1)+"</span>"+e(t,a)})}}catch(a){console.error('error parsing "'+i+'"',a)}return i}$(document).ready(function(){function i(){1==a?(t.hide(),e.removeClass("is-open"),e.addClass("is-closed"),a=!1):(t.show(),e.removeClass("is-closed"),e.addClass("is-open"),a=!0)}document.addEventListener("keyup",function(i){27==i.keyCode&&$(".search-overlay").length&&close_search()});var e=$(".hamburger").add(".overlay"),t=$(".overlay"),a=!1;if(e.click(function(){i()}),e.click(function(){$("#wrapper").toggleClass("toggled")}),$("table").addClass("table"),$(".theme-link").click(function(i){i.preventDefault(),settheme($(this).attr("data-theme"))}),supports_storage){var s=localStorage.theme;s&&settheme(s)}else $("#theme-dropdown").hide()});var supports_storage=supports_html5_storage();!function(){for(var i=document.links,e=0,t=i.length;e<t;e++)i[e].hostname!=window.location.hostname&&(i[e].target="_blank",i[e].className+=" externalLink")}();var easyquiz=function(){function i(){var i=this;this.isLocalstorageExist()||($("#onlyremember").prop("disabled",!0),$("#wordremember").prop("disabled",!0));var e=JSON.parse(localStorage.getItem("rwords"));this.rwords=e||{},$("#wordremember").change(function(){this.checked?(e[i.quiz.rid]=!0,i.quiz.rem=!0):(delete e[i.quiz.rid],i.quiz.rem=!1),localStorage.setItem("rwords",JSON.stringify(e))}),$("#trialtext").keypress(function(e){if(13==e.which){var t=$("#autoremember").prop("checked");return i.rollquiz(1),i.displayquiz(),t&&$(this).val()==i.quiz.read&&$("#wordremember").prop("checked",!0).change(),!1}}),$("#content").on("click","a.read",function(e){e.preventDefault(),i.speak($(this).data("read"))}),$("button.toggle-next").on("click",function(e){e.preventDefault(),i.rollquiz(1),i.displayquiz()}),$("button.toggle-next-left").on("click",function(i){i.preventDefault();var e=$("#remembereddiv").detach();$("#trialdiv").before(e)}),$("button.toggle-next-right").on("click",function(i){i.preventDefault();var e=$("#trialdiv").detach();$("#remembereddiv").before(e)}),$("button.toggle-previous").on("click",function(e){e.preventDefault(),i.rollquiz(-1),i.displayquiz()})}return i.prototype.isLocalstorageExist=function(){var i="test";try{return localStorage.setItem(i,i),localStorage.removeItem(i),!0}catch(e){return!1}},i.prototype.start=function(i){this.quizdata=i;for(var e=0;e<this.quizdata.length;e++)this.quizdata[e].rem=this.rwords[this.quizdata[e].rid];var t=$("#shufflewords").prop("checked");t&&(this.quizdata=this.quizdata.sort(function(){return.5-Math.random()})),this.quizid=-1,this.rollquiz(1),this.displayquiz()},i.prototype.displayquiz=function(){$("#content").html(this.quizid%2==0?this.quiz.tip:this.quiz.desc),$("#card-summary").html(this.quiznum+1+"/"+this.quizdata.length+"("+this.countRememberedWords()+")"),$("#wordremember").prop("checked",!!this.quiz.rem)},i.prototype.countRememberedWords=function(){for(var i=0,e=0;e<this.quizdata.length;e++)this.rwords[this.quizdata[e].rid]&&i++;return i},i.prototype.rollquiz=function(i){if(!(this.quizid+i<0||this.quizid+i>=2*this.quizdata.length)){var e=$("#onlyremember").prop("checked"),t=$("#autoreadword").prop("checked");do this.quizid+=i,this.quiznum=Math.floor(this.quizid/2),this.quiz=this.quizdata[this.quiznum];while(this.quizid>0&&this.quizid<2*this.quizdata.length-1&&e&&this.quiz.rem);this.quizid%2==0&&$("#trialtext").val(""),t&&this.quizid%2!=0&&this.speak(this.quiz.read)}},i.prototype.speak=function(i){if("speechSynthesis"in window){var e=new SpeechSynthesisUtterance(i);e.lang="ja-JP",window.speechSynthesis.speak(e)}},i}(),WordHelper=function(){function i(){this.spverb={},this.cte={},this.cnai={},this.cjisyo={},this.cmeirei={},this.cisi={},this.verb21tail="き ぎ び み に ち り い し",this.spverb={},this.cte={},this.cnai={},this.cjisyo={},this.cmeirei={},this.cisi={},this.spverb["!来(き)ます"]={jisyo:"!来(く)る",nai:"!来(こ)ない",isi:"!来(こ)よう",meirei:"!来(こ)い",ba:"!来(く)れば",kanou:"!来(こ)られる",kanoulian:"!来(こ)られ",kanoumasu:"!来(こ)られます",kanoumasen:"!来(こ)られません",kanoumasita:"!来(こ)られました",kanoumasendesita:"!来(こ)られませんでした",kanouta:"!来(こ)られた",kanounai:"!来(こ)られない",kanounakatta:"!来(こ)られなかった",ukemi:"!来(こ)られる"},this.spverb["あります"]={nai:"ない"},this.spverb["!行(い)きます"]={te:"!行(い)って",ta:"!行(い)った"},this.cte["き"]="いて",this.cte["ぎ"]="いで",this.cte["び"]="んで",this.cte["み"]="んで",this.cte["に"]="んで",this.cte["ち"]="って",this.cte["り"]="って",this.cte["い"]="って",this.cte["し"]="して",this.cnai["き"]="か",this.cnai["ぎ"]="が",this.cnai["び"]="ば",this.cnai["み"]="ま",this.cnai["に"]="な",this.cnai["ち"]="た",this.cnai["り"]="ら",this.cnai["い"]="わ",this.cnai["し"]="さ",this.cjisyo["き"]="く",this.cjisyo["ぎ"]="ぐ",this.cjisyo["び"]="ぶ",this.cjisyo["み"]="む",this.cjisyo["に"]="ぬ",this.cjisyo["ち"]="つ",this.cjisyo["り"]="る",this.cjisyo["い"]="う",this.cjisyo["し"]="す",this.cmeirei["く"]="け",this.cmeirei["ぐ"]="げ",this.cmeirei["ぶ"]="べ",this.cmeirei["む"]="め",this.cmeirei["ぬ"]="ね",this.cmeirei["つ"]="て",this.cmeirei["る"]="れ",this.cmeirei["う"]="え",this.cmeirei["す"]="せ",this.cisi["く"]="こう",this.cisi["ぐ"]="ごう",this.cisi["ぶ"]="ぼう",this.cisi["む"]="もう",this.cisi["ぬ"]="のう",this.cisi["つ"]="とう",this.cisi["る"]="ろう",this.cisi["う"]="おう",this.cisi["す"]="そう"}return i.prototype.makeLink=function(i,e){return"<a target='_blank' href='"+i+"'>"+e+"</a>"},i.prototype.makeGooLink=function(i,e){return this.makeLink("http://dictionary.goo.ne.jp/freewordsearcher.html?MT="+i+"&mode=0&x=0&y=0&kind=jn",e)},i.prototype.makeOjadLink=function(i,e){return this.makeLink("http://www.gavo.t.u-tokyo.ac.jp/ojad/search/index/word:"+i,e)},i.prototype.makeXdLink=function(i,e){return this.makeLink("http://dict.hjenglish.com/jp/jc/"+i,e)},i.prototype.purify=function(i){return i.replace(/!(.*)\(.*\)/g,"$1")},i.prototype.joincell=function(i){return i.map(function(i){return i&&japanruby(i)}).join("<br />")},i.prototype.parseverbdataline=function(i,e){var t=this,a=i;if(a.pos=a.pos.replace("动","動"),a.lian=a.masu.replace(/ます$/g,""),a.masen=a.lian+"ません",a.masita=a.lian+"ました",a.masendesita=a.lian+"ませんでした",a.te=a.lian,a.pos.endsWith("1")?a.te=a.te.slice(0,-1)+this.cte[a.te.slice(-1)]:a.te+="て",a.ta=a.te,a.ta=a.ta.replace(/て$/g,"た"),a.ta=a.ta.replace(/で$/g,"だ"),a.jisyo=a.lian,a.pos.endsWith("2")?a.jisyo+="る":a.pos.endsWith("3")?a.jisyo=a.jisyo.slice(0,-1)+"する":a.jisyo=a.jisyo.slice(0,-1)+this.cjisyo[a.jisyo.slice(-1)],a.nai=a.lian,a.pos.endsWith("1")?a.nai=a.nai.slice(0,-1)+this.cnai[a.nai.slice(-1)]+"ない":a.nai+="ない",a.nakatta=a.nai.slice(0,-1)+"かった",a.meirei=a.jisyo,a.pos.endsWith("2")?a.meirei=a.meirei.replace(/る$/g,"ろ"):a.pos.endsWith("3")?a.meirei=a.meirei.replace(/する$/g,"しろ"):a.meirei=a.meirei.slice(0,-1)+this.cmeirei[a.meirei.slice(-1)],a.isi=a.jisyo,a.pos.endsWith("2")?a.isi=a.isi.replace(/る$/g,"よう"):a.pos.endsWith("3")?a.isi=a.isi.replace(/する$/g,"しよう"):a.isi=a.isi.slice(0,-1)+this.cisi[a.isi.slice(-1)],a.ba=a.jisyo,a.pos.endsWith("2")?a.ba=a.ba.replace(/る$/g,"れば"):a.pos.endsWith("3")?a.ba=a.ba.replace(/する$/g,"すれば"):a.ba=a.ba.slice(0,-1)+this.cmeirei[a.ba.slice(-1)]+"ば",a.kanou=a.jisyo,a.pos.endsWith("2")?a.kanou=a.kanou.replace(/る$/g,"られる"):a.pos.endsWith("3")?a.kanou=a.kanou.replace(/する$/g,"できる"):a.kanou=a.kanou.slice(0,-1)+this.cmeirei[a.kanou.slice(-1)]+"る",a.kanoulian=a.kanou.slice(0,-1),a.kanoumasu=a.kanoulian+"ます",a.kanoumasen=a.kanoulian+"ません",a.kanoumasita=a.kanoulian+"ました",a.kanoumasendesita=a.kanoulian+"ませんでした",a.kanouta=a.kanoulian+"た",a.kanounai=a.kanoulian+"ない",a.kanounakatta=a.kanoulian+"なかった",a.ukemi=a.nai,a.pos.endsWith("2")?a.ukemi=a.ukemi.replace(/ない$/g,"られる"):a.pos.endsWith("3")?a.ukemi=a.ukemi.replace(/する$/g,"される"):a.ukemi=a.ukemi.replace(/ない$/g,"れる"),a.ukemilian=a.ukemi.slice(0,-1),a.ukemimasu=a.ukemilian+"ます",a.ukemimasen=a.ukemilian+"ません",a.ukemimasita=a.ukemilian+"ました",a.ukemimasendesita=a.ukemilian+"ませんでした",a.kanji=a.jisyo.replace(/[!()\u3040-\u309f\u30a0-\u30ff]/g,""),this.spverb[a.masu])for(var s in this.spverb[a.masu])a[s]=this.spverb[a.masu][s],a["sp"+s]=!0;a.goolink=this.makeGooLink(this.purify(a.jisyo),"goo"),a.ojadlink=this.makeOjadLink(this.purify(a.jisyo),"OJAD"),a.xdlink=this.makeXdLink(this.purify(a.jisyo),"小D"),a.respect=this.joincell([a.masu,a.masen,a.masita,a.masendesita]),a.simple=this.joincell([a.jisyo,a.nai,a.ta,a.nakatta]),a.kanourespect=this.joincell([a.kanoumasu,a.kanoumasen,a.kanoumasita,a.kanoumasendesita]),a.kanousimple=this.joincell([a.kanou,a.kanounai,a.kanouta,a.kanounakatta]),a.other=this.joincell([a.te,a.meirei,a.isi,a.ba]);var n=a.goolink+"|"+a.ojadlink+"|"+a.xdlink;a.desclinks=this.joincell([a.desc,n]),a.pronounce=a.jisyo.replace(/[^\u3040-\u309f\u30a0-\u30ff]/g,"");var o=[a.masu,a.masen,a.masita,a.masendesita,a.jisyo,a.nai,a.ta,a.nakatta,a.te,a.ba,a.kanou,a.kanounai,a.kanouta,a.kanounakatta,a.kanoumasu,a.kanoumasen,a.kanoumasita,a.kanoumasendesita,a.ukemi,a.ukemimasu,a.ukemimasen,a.ukemimasita,a.ukemimasendesita].map(function(i){return t.purify(i)});return a.idiomlist=$.extend([],e),a.idiomlist=a.idiomlist.filter(function(i){return o.some(function(e){return i.indexOf(e)>=0})}),a.idioms=this.joincell(a.idiomlist),"あります"!=a.masu&&"います"!=a.masu&&"します"!=a.masu||(a.idioms=""),a.pos.endsWith("2")?this.verb21tail.indexOf(a.pronounce.slice(-2,-1))>=0?a.posclass="verb2-1":a.posclass="verb2-2":a.pos.endsWith("3")?a.posclass="verb3":a.posclass="verb1",a},i.prototype.parseverbdata=function(i){var e=this,t=$.map(i.data,function(t){return e.parseverbdataline(t,i.idiom)});return t},i.prototype.parseAdjCommonDataLine=function(i,e){var t=i;return t.pos.endsWith("2")?t.posclass="adj2":t.posclass="adj1",t},i.prototype.parseAdj1DataLine=function(i,e){var t=this.parseAdjCommonDataLine(i,e);return t.base=t.word.slice(0,-1),t.te="",t.ku=t.base+"く",t.katta=t.base+"かった",t.nai=t.ku+"ない",t.nakatta=t.ku+"なかった",t.kereba=t.base+"ければ",t},i.prototype.parseAdj1Data=function(i){var e=this,t=$.map(i.data,function(i){return e.parseAdj1DataLine(i,null)});return t},i.prototype.parseAdj2DataLine=function(i,e){var t=this.parseAdjCommonDataLine(i,e);return t.na=t.word+"な",t.te="",t.ni="",t.datta=t.word+"だった",t.nai=t.word+"ではない",t.nakatta=t.word+"ではなかった",t.naraba=t.word+"ならば",t.deareba=t.word+"であれば",t.denakereba=t.word+"でなければ",t.da=t.word+"だ",t},i.prototype.parseAdj2Data=function(i){var e=this,t=$.map(i.data,function(i){return e.parseAdj2DataLine(i,null)});return t},i.prototype.createCell=function(i,e){return $("<td />",{"class":i}).html(e)},i.prototype.addCellsToRow=function(i,e,t){var a=this;$.each(i,function(i,s){return e.append(a.createCell(t.posclass+(t["sp"+s]?" spcell":""),t[s]))})},i.prototype.initgrouptable=function(i,e,t,a,s){var n=this,o={};$.each(i,function(i,e){e[t]in o?o[e[t]].push(e):o[e[t]]=[e]}),e.children("tbody").remove();var r=0;Object.keys(o).forEach(function(i){var u=o[i];if(void 0==s||s(u)){var c=$("<tr />"),l=$('<td rowspan="'+u.length+'">'+u[0][t]+"</td>");r++%2==0&&(l=l.addClass("althead")),c.append(l),$.each(u,function(i,t){n.addCellsToRow(a,c,t),e.append(c),c=$("<tr />");var s=$('<td style="display: none" />');c.append(s)})}})},i.prototype.initTable=function(i,e,t){var a=this;e.children("tbody").remove(),$.each(i,function(i,s){var n=$("<tr />");a.addCellsToRow(t,n,s),e.append(n)})},i}();