;(function(){'use strict';(function(){function a(a){a&&(navigator.userAgent.match(/Android/i),navigator.userAgent.match(/MQQBrowser/i),navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/),g&&a.wx?q.Lp(a):m.Lp(a))}function b(){}function c(a,b,c){a||(l.close(),c({status:20004,desc:"\u4e0a\u4f20\u56fe\u7247\u6570\u636e\u4e3a\u7a7a"}));var d=/data:image\/(.*);/.test(a)&&window.RegExp.$1,f=new XMLHttpRequest;f.addEventListener("readystatechange",function(){if(4==this.readyState)if(200==this.status){var a=
JSON.parse(this.responseText);0===a.status?(l.close(),b({status:0,url:a.info})):(l.close(),c({status:22001,desc:"\u4e0a\u4f20\u56fe\u7247\u5931\u8d25\uff1a"+a.error}))}else l.close(),c({status:22E3,desc:"\u4e0a\u4f20\u56fe\u7247\u5931\u8d25\uff1a"+this.statusText})});var g=e.fc();window._mrmcp&&window._mrmcp.data_server&&(g=window._mrmcp.data_server);if(window._mrmcp&&window._mrmcp.creative_id)var k=window._mrmcp.creative_id;f.open("POST",g+"/server/app_asset.php/u");f.withCredentials=!0;f.setRequestHeader("Content-Type",
"application/x-www-form-urlencoded");f.send("type="+d+"&urid=&"+(k?"crid="+k+"&":"")+"imgdata="+encodeURIComponent(a.replace(/data:image\/(.*);base64,/,""))+"&login=true&token="+h)}var d=MugineRequire("Render/StyleSheet"),e=MugineRequire("Utils/Browser"),f=navigator.userAgent.toLowerCase().match(/micromessenger\/(\d+).(\d+).?(\d?)\s?/),g=!!(f&&0<f.length),h=/token=(.*)(?:;|$)/.test(document.cookie)&&window.RegExp.$1||"",k=function(){var a=document.createElement("form"),b=a.appendChild(document.createElement("iframe")),
c=a.appendChild(document.createElement("input"));a.action="javascript:;";a.target="uploader_iframe";a.enctype="multipart/form-data";a.method="POST";b.name="uploader_iframe";c.name="photo";c.type="file";c.accept="image/*";a.style.display=b.style.display=c.style.display="none";"complete"==document.readyState?document.body.appendChild(a):window.addEventListener("load",function(){document.body.appendChild(a)},!1);return{form:a,input:c}}(),l=function(){var a;return{show:function(b){var c=document.createElement("div"),
f=c.appendChild(document.createElement("div")),g=f.appendChild(document.createElement("div")),h=f.appendChild(document.createElement("div"));c.style.cssText="position:fixed;left:0;right:0;top:0;bottom:0;text-align:center;line-height:"+(document.body.clientHeight||document.documentElement.clientHeight)+"px";f.style.cssText='padding-top:10px; line-height:30px;display:inline-block;padding:8px; min-width: 80px; background-color:rgba(0,0,0,0.6);border-radius:4px;"';f.align="center";g.style.cssText="width: 24px; height: 24px; display: block; border-radius: 50%; border-left: 2px solid #F36523; border-top: 2px solid #F36523; border-right: 2px solid white; border-bottom: 2px solid white; margin: 16px;";
h.style.cssText='text-align:center;color:#fff;font:normal 12px "microsoft yahei";';h.innerHTML=b;a=document.body.appendChild(c);b=d.qf("from {"+e.prefix.f+"transform:rotate( 0deg ) }to {"+e.prefix.f+"transform:rotate( 360deg ) }");g.style.cssText+=e.prefix.f+"animation:"+b+" 1200ms linear infinite;"},close:function(){a&&(a.parentNode.removeChild(a),a=null)}}}(),n=function(){function a(b){var c=0;"string"==typeof b?(c=b.length,this.Bd=function(a){return b.charCodeAt(a+0)&255},this.Lv=function(a,c){for(var d=
[],e=0;e<c;e++)d[e]=b.charCodeAt(a+e+0)&255;return d}):"unknown"==typeof b&&(c=IEBinary_getLength(b),this.Bd=function(a){return IEBinary_getByteAt(b,a+0)},this.Lv=function(a,c){return(new VBArray(IEBinary_getBytesAt(b,a+0,c))).YG()});this.sD=function(){return c};this.of=function(a,b){var c=b?(this.Bd(a)<<8)+this.Bd(a+1):(this.Bd(a+1)<<8)+this.Bd(a);0>c&&(c+=65536);return c};this.nf=function(a,b){var c=this.Bd(a),d=this.Bd(a+1),e=this.Bd(a+2),f=this.Bd(a+3),c=b?(((c<<8)+d<<8)+e<<8)+f:(((f<<8)+e<<8)+
d<<8)+c;0>c&&(c+=4294967296);return c};this.mj=function(a,b){var c=this.nf(a,b);return 2147483647<c?c-4294967296:c};this.Qv=function(a,b){for(var c=[],d=this.Lv(a,b),e=0;e<b;e++)c[e]=String.fromCharCode(d[e]);return c.join("")}}var b={};(function(){function c(a,b,e,f,g){for(var h=a.of(e,g),k={},l=0;l<h;l++){var m=e+12*l+2,n=f[a.of(m,g)];k[n]=d(a,m,b,g)}return k}function d(a,b,c,e){var f=a.of(b+2,e),g=a.nf(b+4,e);c=a.nf(b+8,e)+c;switch(f){case 1:case 7:if(1==g)return a.Bd(b+8,e);c=4<g?c:b+8;b=[];for(f=
0;f<g;f++)b[f]=a.Bd(c+f);return b;case 2:return a.Qv(4<g?c:b+8,g-1);case 3:if(1==g)return a.of(b+8,e);c=2<g?c:b+8;b=[];for(f=0;f<g;f++)b[f]=a.of(c+2*f,e);return b;case 4:if(1==g)return a.nf(b+8,e);b=[];for(f=0;f<g;f++)b[f]=a.nf(c+4*f,e);return b;case 5:if(1==g)return a.nf(c,e)/a.nf(c+4,e);b=[];for(f=0;f<g;f++)b[f]=a.nf(c+8*f,e)/a.nf(c+4+8*f,e);return b;case 9:if(1==g)return a.mj(b+8,e);b=[];for(f=0;f<g;f++)b[f]=a.mj(c+4*f,e);return b;case 10:if(1==g)return a.mj(c,e)/a.mj(c+4,e);b=[];for(f=0;f<g;f++)b[f]=
a.mj(c+8*f,e)/a.mj(c+4+8*f,e);return b}}function e(a,d){if("Exif"!=a.Qv(d,4))return!1;var f,g=d+6;if(18761==a.of(g))f=!1;else if(19789==a.of(g))f=!0;else return!1;if(42!=a.of(g+2,f)||8!=a.nf(g+4,f))return!1;var h=c(a,g,g+8,b.Ux,f);if(h.zx){var k=c(a,g,g+h.zx,b.Tx,f),l;for(l in k){switch(l){case "LightSource":case "Flash":case "MeteringMode":case "ExposureProgram":case "SensingMethod":case "SceneCaptureType":case "SceneType":case "CustomRendered":case "WhiteBalance":case "GainControl":case "Contrast":case "Saturation":case "Sharpness":case "SubjectDistanceRange":case "FileSource":k[l]=
b.zj[l][k[l]];break;case "ExifVersion":case "FlashpixVersion":k[l]=String.fromCharCode(k[l][0],k[l][1],k[l][2],k[l][3]);break;case "ComponentsConfiguration":k[l]=b.zj.Components[k[l][0]]+b.zj.Components[k[l][1]]+b.zj.Components[k[l][2]]+b.zj.Components[k[l][3]]}h[l]=k[l]}}if(h.Dx)for(l in f=c(a,g,g+h.Dx,b.Ex,f),f){switch(l){case "GPSVersionID":f[l]=f[l][0]+"."+f[l][1]+"."+f[l][2]+"."+f[l][3]}h[l]=f[l]}return h}b.Tx={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",
40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",
37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",
41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"};b.Ux={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",
531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"};b.Ex={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",
4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",
30:"GPSDifferential"};b.zj={VE:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},cF:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},bF:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",
14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},XE:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},oF:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},mF:{0:"Standard",
1:"Landscape",2:"Portrait",3:"Night scene"},nF:{1:"Directly photographed"},TE:{0:"Normal process",1:"Custom process"},BF:{0:"Auto white balance",1:"Manual white balance"},YE:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},SE:{0:"Normal",1:"Soft",2:"Hard"},kF:{0:"Normal",1:"Low saturation",2:"High saturation"},pF:{0:"Normal",1:"Soft",2:"Hard"},qF:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},WE:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};
b.jE=function(b,c){var d=(b.slice||b.webkitSlice||b.mozSlice||function(){return this}).call(b,0,131072),f=new FileReader;f.onload=function(){var b=new a(this.result);try{var d;a:if(255!=b.Bd(0)||216!=b.Bd(1))d=!1;else{for(var f=2,g=b.sD();f<g;){if(255!=b.Bd(f)){d=!1;break a}var h=b.Bd(f+1);if(22400==h||225==h){d=e(b,f+4,b.of(f+2,!0)-2);break a}f+=2+b.of(f+2,!0)}d=void 0}}catch(k){}c instanceof Function&&c(d)};f.readAsBinaryString(d)}})();return b}(),m=function(){function a(b,c,d,e,f){var g=new Image,
h=Math.abs(c);g.onload=function(){try{var a=Math.min(1,750/this.naturalWidth,1334/this.naturalHeight),b=(90==h?this.naturalHeight:this.naturalWidth)*a,k=(90==h?this.naturalWidth:this.naturalHeight)*a,m=document.createElement("canvas");m.width=b;m.height=k;var n=m.getContext("2d");n.save();var a=90===h?k:b,q=90===h?b:k;n.translate(b/2,k/2);n.rotate(-c/180*Math.PI);n.translate(-a/2,-q/2);n.drawImage(g,0,0,a,q);n.restore();e({status:0,url:m.toDataURL("image/"+(d?"png":"jpeg")),mode:"local"})}catch(r){l.close(),
f({status:20001,desc:"\u52a0\u8f7d\u56fe\u7247\u5931\u8d25\uff1a"+r})}};g.onerror=function(){l.close();f("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25\u3002")};g.src=b}function d(a){/image\/.*/.test(a.file.type)?window.URL||window.webkitURL?e(a.file,a.gi,a.error):f(a.gi,a.error):(l.close(),a.error({status:21E3,desc:"\u672a\u9009\u62e9\u6709\u6548\u7684\u56fe\u50cf\u6587\u4ef6\u3002"}))}function e(b,c,d){var f=window.URL||window.webkitURL;n.jE(b,function(e){var g=0,h="image/jpeg"==b.type||"image/jpg"==b.type;
if(e&&e.Orientation)switch(e.Orientation){case 8:g=90;break;case 3:g=180;break;case 6:g=-90;break;default:g=0}e=f.createObjectURL(b);a(e,g,h,c,d)})}function f(a,b){window.onmessage=function(c){c=JSON.parse(c.data);l.close();c.hD?b({status:c.hD,desc:c.message}):a({status:0,url:c.data.path,mode:"remote"})};k.form.submit()}return{Lp:function(a){a=a||{};JSON.parse(JSON.stringify(a));a.success=a.success instanceof Function?a.success:b;a.error=a.error instanceof Function?a.error:b;k.input.onchange=function(){1==
this.files.length&&d({file:this.files[0],gi:function(b){(new t.ImageCutter).show({url:b.url,destWidth:a.destWidth,destHeight:a.destHeight,mode:b.mode,croppingMode:a.croppingMode,success:function(b){l.show("\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u4faf ...");"base64"==b.type&&c(b.fq,a.success,a.error)},error:a.error})},error:a.error})};k.input.value="";k.input.click()}}}(),q=function(){function a(b,c,d){setTimeout(function(){b.uploadImage({localId:c,isShowProgressTips:1,success:d})},100)}function d(a,
b,c,f){a=a.match(/data:image\/.*?;base64,/)?"":a;var g=new XMLHttpRequest;g.addEventListener("readystatechange",function(){if(4==this.readyState)if(200==this.status){var a=JSON.parse(this.responseText);0===a.status?(l.close(),c({status:0,url:a.info})):(l.close(),f({status:a.status,desc:a.error}))}else l.close(),f({status:22E3+this.status,desc:this.statusText})});var k=e.fc();window._mrmcp&&window._mrmcp.data_server&&(k=window._mrmcp.data_server);var m=window._mrmcp||{},n=m.wechatAuth,n=n?n.appId:
m.weixinAppId||"wx75babd529e23776c",m=m.creative_id||"";g.withCredentials=!0;g.open("GET",k+"/server/wx_resource.php?appid="+n+"&mediaid="+a+"&token="+h+"&crid="+m+"&param="+encodeURIComponent(JSON.stringify(b)));g.send()}return{Lp:function(e){function f(b,g){try{var h=new t.ImageCutter,k=b.match(/data:image\/.*?;base64,/);h.show({url:b,destWidth:e.destWidth,destHeight:e.destHeight,croppingMode:e.croppingMode,mode:k?"local":"weixin",success:function(b){l.show("\u5904\u7406\u4e2d\uff0c\u8bf7\u7a0d\u4faf ...");
"base64"==b.type?c(b.fq,e.success,e.error):a(e.wx,g,function(a){d(a.serverId,b.clip,e.success,e.error)})}})}catch(m){console.log(m.toString())}}JSON.parse(JSON.stringify(e));e.success=e.success instanceof Function?e.success:b;e.error=e.error instanceof Function?e.error:b;e.wx||e.error({status:22E3,desc:"\u7f3a\u5c11\u5fae\u4fe1\u5bf9\u8c61"});e.wx.chooseImage({success:function(a){if(window.__wxjs_is_wkwebview){var b=a.localIds[0];e.wx.getLocalImgData({localId:b,success:function(a){a=a.localData;0>
a.indexOf("data:image")&&(a="data:image/jpeg;base64,"+a);f(a,b)}})}else f(a.localIds[0],a.localIds[0])}})}}}();a.done=function(){l.close()};var t=e.aa.MugedaTools=e.aa.MugedaTools||{};t.chooseImage=a;t.ImageCutter=function(){function a(b){var c=new Image;c.src=b.url;c.onload=function(){if("local"==b.mode){var a=document.createElement("canvas"),d=a.getContext("2d");a.width=b.width;a.height=b.height;"Cover"==b.croppingMode?d.drawImage(c,0,0,c.width,c.height,0,0,b.width,b.height):"no_cover"==b.croppingMode&&
(a.width=c.width,a.height=c.height,d.drawImage(c,0,0,c.width,c.height,0,0,c.width,c.height));b.success({type:"base64",fq:a.toDataURL("image/png")})}else"Cover"==b.croppingMode?a={startX:Math.ceil(0),startY:Math.ceil(0),width:Math.ceil(c.width),height:Math.ceil(c.height),rawWidth:b.width,rawHeight:b.height}:"no_cover"==b.croppingMode&&(a={startX:Math.ceil(0),startY:Math.ceil(0),width:Math.ceil(c.width),height:Math.ceil(c.height),rawWidth:c.width,rawHeight:c.height}),b.success({type:"url",zD:b.url,
clip:a})}}function b(){var a=(ia-L)/ua,c=(S-R)/ua,d=U/ua,e=P/ua;if("local"==n.mode){var f=3*n.XC,g=f*la,h=f/g,k=da.width/da.height;h>k&&f>da.width?f=da.width:h<k&&g>da.height&&(g=da.height,f=g/la);h=document.createElement("canvas");k=h.getContext("2d");f=Math.floor(Math.max(f,Math.min(1080,da.naturalWidth)));g=Math.floor(f*la);h.width=f;h.height=f*la;k.drawImage(da,a,c,d,e,0,0,f,g);return{type:"base64",fq:h.toDataURL("image/jpeg",.9)}}return{type:"url",zD:ab.src,clip:{startX:Math.ceil(a),startY:Math.ceil(c),
width:Math.ceil(d),height:Math.ceil(e),rawWidth:Ca,rawHeight:na}}}function c(){function a(b,c,d){if(h){var e=1<la,f=b*la;c<f&&(f=c,b=c/la);e?(e=Math.max(64,P+f),c=e/la):(c=Math.max(64,U+b),e=c*la);c+ia>L+ka&&(c=L+ka-ia,e=c*la);e+S>R+ma&&(e=R+ma-S,c=e/la);k(ia,S,c,e);d&&(U=c,P=e)}else l&&(e=Math.max(L,ia+b),c=Math.max(R,S+c),U+e>L+ka&&(e=L+ka-U),P+c>R+ma&&(c=R+ma-P),k(e,c,U,P),d&&(ia=e,S=c))}var b,d,f,g=!1,h=!1,l=!1;q.addEventListener("touchstart",function(a){return a.preventDefault()});q.addEventListener(e.Ab,
function(a){a.preventDefault();if(!g&&(a.touches&&0!==a.touches.length||(a.touches=[{clientX:a.clientX,clientY:a.clientY}]),a.touches&&a.touches.length)){b=a.touches[0].clientX;d=a.touches[0].clientY;for(var c=q,e=0,k=0;c&&"BODY"!=c.tagName;)e+=c.offsetTop,k+=c.offsetLeft,c=c.offsetParent;c=b-k+window.pageXOffset;e=d-e+window.pageYOffset-44;h=576>Math.pow(c-(ia+U),2)+Math.pow(e-(S+P),2);l=!h&&c>ia&&c<ia+U&&e>S&&e<S+P;if(g=h||l)f=a.touches[0].identifier}});q.addEventListener(e.Bc,function(c){c.preventDefault();
g&&(c.stopPropagation(),c.touches&&0!==c.touches.length||(c.touches=[{clientX:c.clientX,clientY:c.clientY}]),c.touches&&c.touches.length&&a(c.touches[0].clientX-b,c.touches[0].clientY-d))},!0);q.addEventListener(e.rb,function(c){if(g&&(c.changedTouches&&0!==c.changedTouches.length||(c.changedTouches=[{clientX:c.clientX,clientY:c.clientY}]),c.changedTouches&&c.changedTouches.length))for(var e=0;e<c.changedTouches.length;e++)if(c.changedTouches[e].identifier==f){a(c.changedTouches[e].clientX-b,c.changedTouches[e].clientY-
d,!0);g=!1;break}},!0);q.addEventListener("touchcancel",function(c){if(c.changedTouches&&c.changedTouches.length)for(var e=0;e<c.changedTouches.length;e++)if(c.changedTouches[e].identifier==f){a(c.changedTouches[e].clientX-b,c.changedTouches[e].clientY-d,!0);g=!1;break}})}function d(a){for(;a;){if("BODY"==a.tagName)return!0;a=a.parentNode}return!1}function f(){d(n.parent)||window.removeEventListener("resize",f);h(n.parent.offsetWidth,n.parent.offsetHeight)}function g(a){var b=da.width,c=da.height,
d=Math.min((t-24)/b,(Ba-24)/c,1),b=b*d,c=c*d,e=12+Math.round((t-24-b)/2),f=12+Math.round((Ba-24-c)/2);la=Nb;ua=d;var d=b,h=d*Nb;h>c&&(h=c,d=h/Nb);L=e;R=f;ka=b;ma=c;ia=e;S=f;U=d;P=h;a&&k(e,f,d,h,!0)}function h(a,b){t=a;Ba=b;q.style.width=a+"px";q.style.height=b+"px";da&&(g(),k(ia,S,U,P,!0))}function k(a,b,c,d,e){e&&(ab.style.cssText+="left:"+L+"px;top:"+R+"px;width:"+ka+"px;height:"+ma+"px;");$b.style.cssText+="-webkit-transform: translate("+L+"px, "+R+"px) scale("+ka/100+","+(b-R)/100+");";ya.style.cssText+=
"-webkit-transform: translate("+L+"px, "+(b+d)+"px) scale("+ka/100+","+(R+ma-b-d)/100+");";Ab.style.cssText+="-webkit-transform: translate("+L+"px, "+b+"px) scale("+(a-L)/100+","+d/100+");";sb.style.cssText+="-webkit-transform: translate("+(c+a)+"px, "+b+"px) scale("+(L+ka-c-a)/100+","+d/100+");";tb.style.cssText+="left:"+(c+a-20)+"px;top:"+(b+d-20)+"px;width:40px;height:40px;";sd.style.cssText+="left:"+(a-1)+"px;top:"+(b-1)+"px;width:"+(c+2)+"px;height:"+(d+2)+"px;background-size:contain;opacity:0.8;background-position:center;background-repeat:no-repeat;"}
function l(a,b){da=new Image;da.onload=function(){Ca=this.naturalWidth;na=this.naturalHeight;Nb=b||this.naturalHeight/this.naturalWidth;g(!0);ab.src=da.src};da.src=a}function m(a,b,e,g,k){d(a)&&(n.parent=a,n.mode=k,n.XC=e,n.gG=g,window.addEventListener("resize",f),q=document.createElement("div"),a.innerHTML="",ab=document.createElement("img"),ab.style.cssText+="position:absolute;left:0;right:0;top:0;bottom:0;border:1px solid transparent;margin-left:-1px;margin-top:-1px;",a.appendChild(ab),a.appendChild(q),
q.style.position="absolute",q.style.top="0",h(a.clientWidth,a.clientHeight-44),c(),q.innerHTML='<span id="mask1" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask2" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask3" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask4" style="position: absolute;background-color: rgba(0,0,0,0.6);left:0;top:0;width:100px;height:100px;-webkit-transform-origin: 0 0;-webkit-transform: translate(-100px, 0);"></span><span id="mask6" style="position: absolute;border: 1px white solid;"><canvas id="maskImg"></canvas></span><span id="mask5" style="position: absolute;background-color: #0C518F; border-radius:22px;border:2px white solid;background-image:url('+
Ga.src+');background-repeat:no-repeat;background-position: center;background-position:center;background-repeat:no-repeat;opacity:0.7;"></span>',$b=document.getElementById("mask1"),ya=document.getElementById("mask2"),Ab=document.getElementById("mask3"),sb=document.getElementById("mask4"),tb=document.getElementById("mask5"),sd=document.getElementById("mask6"),b&&l(b,g/e))}var n=this,q=void 0,t=void 0,Ba=void 0,L=void 0,R=void 0,ka=void 0,ma=void 0,Ca=void 0,na=void 0,ia=void 0,S=void 0,U=void 0,P=void 0,
la=void 0,da=void 0,ua=void 0,Ga=new Image,Zb=new Image,ab=void 0,$b=void 0,ya=void 0,Ab=void 0,sb=void 0,tb=void 0,sd=void 0,Nb=void 0;Ga.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAVCAYAAABCIB6VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALpJREFUeNpi/P//fwMDA4M9ED8A4odAfAHEZmRkBNHkA6DBDv9xg/mUGGyAw9DzQCxAqauxgQIGSgHUddhAAqUG74ca9J6qhoNSBixMQRFGNcOhKUMAiT+fqkGCZtl8qhuKnBQZhg2giW9oEv74Ugw0uSqA2ExUsAtkUQI0ue4HYgdquhoE7kPpBmoHCQzsp0V4g4tbSg0VwFUqUmrwejw1jwELuQYD68RAWAEGpEApApRh9KFsAYAAAwDPG50lOOkShAAAAABJRU5ErkJggg==";
Zb.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAALUlEQVQokWM8c+YMAzZgbGyMVZwJqygeMKqBGMD4//9/rBJnz56ljg2jGogBAEK1CICe2Pz1AAAAAElFTkSuQmCC";this.show=function(c){function d(){q&&(q.style.visibility="");g.parentNode.removeChild(g)}function f(){c.success instanceof Function&&c.success(b());d()}console.log(c.croppingMode);if(c.croppingMode&&"Cropping_box"!=c.croppingMode)a({url:c.url,width:c.destWidth,height:c.destHeight,
success:c.success,mode:c.mode,croppingMode:c.croppingMode});else{var g=document.body.appendChild(document.createElement("div")),h=g.appendChild(document.createElement("div")),k=g.appendChild(document.createElement("div")),l=h.appendChild(document.createElement("button")),n=h.appendChild(document.createElement("button"));g.style.cssText=e.prefix.f+"user-select:none;position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);";k.style.cssText="height:100%;width:100%;border-top:44px solid transparent; position: relative;box-sizing: border-box;";
h.style.cssText="position: absolute; z-index: 1;height:44px;background:rgba(255,255,255,1);border-bottom:solid 1px #aaa;width:100%;";l.style.cssText=n.style.cssText='outline:none;-webkit-tap-highlight-color:transparent;cursor:pointer;color:#000;width:80px;height:32px;background:transparent;border:none;font:normal 16px/44px "microsoft yahei"';l.style.cssFloat="right";n.style.cssFloat="left";l.innerHTML="\u786e\u5b9a";n.innerHTML="\u53d6\u6d88";var q=document.querySelector("#mugeda_audio_indicator");
q&&(q.style.visibility="hidden");m(k,c.url,c.destWidth,c.destHeight,c.mode);l.addEventListener("click",f);n.addEventListener("click",d)}}}})();
})();