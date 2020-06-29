var e,t,r=require("@ffmpeg/ffmpeg"),o=/frame=\s+(\d+)\s+fps/g,n=function(e){if(e&&e.message)for(var r;null!==(r=o.exec(e.message));){var n=+r[1]/t.totalFrames;!isNaN(n)&&t.onProgress&&t.onProgress(n)}},i=function(r,o){try{return console.log("transcoding"),t=o,console.log("loading ffmpeg"),Promise.resolve(e.load()).then(function(){return console.log("start transcoding"),Promise.resolve(e.write("input.webm",r)).then(function(){return Promise.resolve(e.run("-r "+t.framerate+" -i input.webm -s "+t.width+"x"+t.height+" -crf "+t.crf+" -preset "+t.preset+" -tune animation -pix_fmt yuv420p output.mp4")).then(function(){var r=e.read("output.mp4");return Promise.resolve(e.remove("input.webm")).then(function(){return Promise.resolve(e.remove("output.mp4")).then(function(){t.onFinish(r)})})})})})}catch(e){return Promise.reject(e)}},s=["ultrafast","superfast","veryfast","faster","fast","medium","slow","slower","veryslow"];!function(){var t=!1,o={},a=!1,l=[];p5.prototype.startRecording=function(u){var c=this;if(void 0===u&&(u={}),this.noLoop(),!a){!function(t){void 0===t&&(t=!1);var o={log:!1,logger:n};o.corePath=t?"/node_modules/@ffmpeg/core/ffmpeg-core.js":"https://unpkg.com/@ffmpeg/core@v0.7.1/ffmpeg-core.js",e=r.createFFmpeg(o)}(u.standalone);var f=this._draw;this._draw=function(){try{f();var e=function(){if(t)c.canvas?c.canvas.toBlob(function(e){try{return l.push(e),c._requestAnimId=window.requestAnimationFrame(c._draw),Promise.resolve()}catch(e){return Promise.reject(e)}}):c._requestAnimId=window.requestAnimationFrame(c._draw);else{var e=function(){if(l.length>0)return o.totalFrames=l.length,console.log("got "+o.totalFrames+" frames"),Promise.resolve(new Blob(l).arrayBuffer()).then(function(e){var t=new Uint8Array(e);return l=[],Promise.resolve(i(t,o)).then(function(){c._requestAnimId=window.requestAnimationFrame(c._draw)})});c._requestAnimId=window.requestAnimationFrame(c._draw)}();if(e&&e.then)return e.then(function(){})}}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},this._draw(),a=!0}t=!0;var m=u.preset,d=u.crf,p=u.onProgress,h=u.onFinish;m&&s.includes(m)||(m="slow"),(void 0===d||isNaN(d)||d<0||d>51)&&(d=18),p||(p=function(e){return console.log(e)}),h||(h=function(e){!function(e,t){var r=document.createElement("div");r.style.width="100%",r.style.height="100%",r.style.position="fixed",r.style.display="flex",r.style.top="0px",r.style.left="0px",r.style.backgroundColor="rgba(0,0,0,0.8)";var o=document.createElement("button");o.innerHTML="&times;",o.style.color="white",o.style.backgroundColor="black",o.style.border="3px solid white",o.style.borderRadius="100%",o.style.fontSize="16px",o.style.fontWeight="bold",o.style.padding="2px 6px 1px 6px",o.style.position="fixed",o.style.top="10px",o.style.right="10px",o.onclick=function(){r.remove()},r.appendChild(o);var n=document.createElement("video");n.width=t.width,n.height=t.height,n.style.display="block",n.style.margin="auto",n.loop=!0,n.controls=!0;var i=URL.createObjectURL(new Blob([e.buffer],{type:"video/mp4"}));n.src=i,r.appendChild(n),document.querySelector("body").appendChild(r)}(e,o)}),o={width:this.width,height:this.height,pixelDensity:this._pixelDensity,framerate:this._targetFrameRate,crf:d,preset:m,onProgress:p,onFinish:h},console.log(o)},p5.prototype.stopRecording=function(){t=!1}}();
//# sourceMappingURL=p5.rec.js.map
