var gdjs;(function(r){const N=new r.Logger("Multiplayer"),l=new r.Logger("Multiplayer - Debug");r.Logger.getDefaultConsoleLoggerOutput().discardGroup("Multiplayer - Debug");class Oe{constructor($){this.maxSize=$,this.cache=new Set,this.keys=[]}has($){return this.cache.has($)}add($){if(this.cache.size>=this.maxSize){const H=this.keys.shift();H&&this.cache.delete(H)}this.cache.add($),this.keys.push($)}}r.makeMultiplayerMessageManager=()=>{const W=0,$=0,H=0,Ne=0,D=window.performance&&typeof window.performance.now=="function"?window.performance.now.bind(window.performance):Date.now,De=200,$e=4,F=new Oe(500);let w={},S={};const ke=1;let te=0,U=null,L=0;const Se=1;let ne=0,v=null,E=0;const ve=1;let ae=0,C={},re={},k={1:0},x=[];const R=({originalMessageName:e,originalData:t,expectedMessageName:n,otherPeerIds:a,shouldCancelMessageIfTimesOut:s,maxNumberOfRetries:o,messageRetryTime:i})=>{!r.multiplayer.isLobbyGameRunning()||(w[n]||(w[n]={}),l.info(`Adding expected message ${n} from ${a.join(", ")}.`),a.forEach(c=>{w[n][c]={acknowledged:!1,lastMessageSentAt:D(),originalMessageName:e,originalData:t,shouldCancelMessageIfTimesOut:s,numberOfRetries:0,maxNumberOfRetries:o||$e,messageRetryTime:i||De}}))},Ae=()=>{w={},S={}},oe=({sceneNetworkId:e,instanceNetworkId:t})=>(S[e]||(S[e]={}),S[e][t]||0),ie=({sceneNetworkId:e,instanceNetworkId:t,clock:n})=>{S[e]||(S[e]={}),S[e][t]=n},I=(e,t,n)=>{if(!($>0&&Math.random()<$)){if(H>0&&Math.random()<H){setTimeout(()=>{r.multiplayerPeerJsHelper.sendDataTo(e,t,n)},Ne);return}if(W>0){setTimeout(()=>{r.multiplayerPeerJsHelper.sendDataTo(e,t,n)},W);return}r.multiplayerPeerJsHelper.sendDataTo(e,t,n)}},Ce=(e,t,n)=>{if(!e.length)return null;let a=null,s=1/0;for(let o=0;o<e.length;++o){if(e[o].networkId)continue;const i=e[o],c=Math.pow(i.getX()-t,2)+Math.pow(i.getY()-n,2);c<s&&(a=i,s=c)}return a},B=({runtimeScene:e,objectName:t,instanceNetworkId:n,instanceX:a,instanceY:s,shouldCreateIfNotFound:o})=>{const i=e.getInstancesOf(t);if(!i)return null;let c=i.find(g=>g.networkId===n)||null;if(c||(l.info(`instance ${t} ${n} not found with network ID, trying to find it with persistent UUID.`),c=i.find(g=>g.persistentUuid&&g.persistentUuid.substring(0,8)===n)||null,c&&(l.info(`instance ${t} ${n} found with persistent UUID. Assigning network ID.`),c.networkId=n)),!c&&a!==void 0&&s!==void 0){l.info(`instance ${t} ${n} not found with network ID, trying to find it with position ${a}/${s}.`);const g=Ce(i,a,s);g&&(l.info(`Found closest instance for object ${t} ${n} with no network ID.`),c=g,c.networkId=n)}if(!c&&o){l.info(`Instance ${n} still not found, Creating instance ${t}.`);const g=e.createObject(t);if(!g)return null;g.networkId=n,c=g}return c},J="#changeInstanceOwner",ce=/#changeInstanceOwner#owner_(\d+)#object_(.+)#instance_(.+)/,Re=({objectOwner:e,objectName:t,instanceNetworkId:n,newObjectOwner:a,instanceX:s,instanceY:o,sceneNetworkId:i})=>({messageName:`${J}#owner_${e}#object_${t}#instance_${n}`,messageData:{previousOwner:e,newOwner:a,instanceX:s,instanceY:o,sceneNetworkId:i}}),K="#instanceOwnerChanged",je=/#instanceOwnerChanged#owner_(\d+)#object_(.+)#instance_(.+)/,ge=e=>e.replace(J,K),Te=e=>{const t=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(t.keys()).filter(s=>s.startsWith(J)).forEach(s=>{const o=t.get(s);if(!o)return;const i=o.getMessages();!i.length||i.forEach(c=>{const g=c.getData(),m=c.getSender(),p=ce.exec(s);if(!p)return;const f=p[2],u=p[3],d=g.previousOwner,y=g.newOwner,h=g.sceneNetworkId;if(h!==e.networkId){l.info(`Object ${f} is in scene ${h}, but we are on ${e.networkId}. Skipping.`);return}const M=B({runtimeScene:e,objectName:f,instanceNetworkId:u,instanceX:g.instanceX,instanceY:g.instanceY});if(!M){l.info(`Instance ${u} not found, it must have been destroyed.`);return}const P=M.getBehavior("MultiplayerObject");if(!P){l.info(`Object ${f} does not have the MultiplayerObjectBehavior, cannot change ownership.`);return}const b=P.getPlayerObjectOwnership(),O=b===d||b===y;if(r.multiplayer.isPlayerHost()&&!O){l.info(`Object ${f} with instance network ID ${u} does not have the expected owner. Wanted to change from ${d} to ${y}, but object has owner ${b}.`);return}l.info(`Changing ownership of object ${f} to ${y}.`),P.playerNumber=y;const _=ge(s);if(l.info(`Sending acknowledgment of ownership change of object ${f} from ${d} to ${y} with instance network ID ${u} to ${m}.`),I([m],_,{}),r.multiplayer.isPlayerHost()){const A=r.multiplayerPeerJsHelper.getAllPeers().filter(T=>T!==m);if(!A.length)return;R({originalMessageName:s,originalData:g,expectedMessageName:_,otherPeerIds:A,shouldCancelMessageIfTimesOut:!1}),l.info(`Relaying ownership change of object ${f} with instance network ID ${u} to ${A.join(", ")}.`),I(A,s,g)}})})},le="#updateInstance",He=/#updateInstance#owner_(\d+)#object_(.+)#instance_(.+)#scene_(.+)/,xe=({objectOwner:e,objectName:t,instanceNetworkId:n,objectNetworkSyncData:a,sceneNetworkId:s})=>({messageName:`${le}#owner_${e}#object_${t}#instance_${n}#scene_${s}`,messageData:a}),_e=e=>{const t=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(t.keys()).filter(s=>s.startsWith(le)).forEach(s=>{const o=t.get(s);if(!o)return;const i=o.getMessages();if(!i.length)return;i.slice().reverse().forEach(g=>{const m=g.getData(),p=g.getSender(),f=He.exec(s);if(!f)return;const u=parseInt(f[1],10);if(u===r.multiplayer.playerNumber)return;const d=f[2],y=f[3],h=f[4];if(h!==e.networkId){l.info(`Object ${d} is in scene ${h}, but we are on ${e.networkId}. Skipping.`);return}const M=m._clock,P=oe({sceneNetworkId:h,instanceNetworkId:y});if(M<=P)return;const b=B({runtimeScene:e,objectName:d,instanceNetworkId:y,shouldCreateIfNotFound:!0,instanceX:m.x,instanceY:m.y});if(!b){N.error("Instance could not be found or created.");return}const O=b.getBehavior("MultiplayerObject");if(!O){N.error(`Object ${d} does not have the MultiplayerObjectBehavior, cannot update it.`);return}if(O.getPlayerObjectOwnership()===r.multiplayer.playerNumber){l.info(`Object ${d} with instance network ID ${y} is owned by us ${r.multiplayer.playerNumber}, ignoring update message from ${u}.`);return}if(O.getPlayerObjectOwnership()!==u&&(l.info(`Object ${d} with instance network ID ${y} is owned by ${O.getPlayerObjectOwnership()} on our game, changing ownership to ${u} as part of the update event.`),O.playerNumber=u),b.updateFromNetworkSyncData(m),ie({sceneNetworkId:h,instanceNetworkId:y,clock:M}),O._clock=M,r.multiplayer.isPlayerHost()){const j=r.multiplayerPeerJsHelper.getAllPeers().filter(A=>A!==p);if(!j.length)return;I(j,s,m)}})})},G="#changeVariableOwner",ue=/#changeVariableOwner#owner_(\d+)#variable_(.+)/,Le=({variableOwner:e,variableNetworkId:t,newVariableOwner:n})=>({messageName:`${G}#owner_${e}#variable_${t}`,messageData:{previousOwner:e,newOwner:n}}),Y="#variableOwnerChanged",Ee=/#variableOwnerChanged#owner_(\d+)#variable_(.+)/,me=e=>e.replace(G,Y),Je=e=>{const t=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(t.keys()).filter(s=>s.startsWith(G)).forEach(s=>{const o=t.get(s);if(!o)return;const i=o.getMessages();!i.length||i.forEach(c=>{const g=c.getData(),m=c.getSender(),p=ue.exec(s);if(!p)return;const f=p[2],u=g.previousOwner,d=g.newOwner,{type:y,name:h,containerId:M}=r.multiplayerVariablesManager.getVariableTypeAndNameFromNetworkId(f);if(y==="scene"&&M!==e.networkId){l.info(`Variable ${h} is in scene ${M}, but we are on ${e.networkId}. Skipping.`);return}const P=M==="game"?e.getGame().getVariables():e.getVariables();if(!P.has(h)){N.error(`Variable with ID ${f} not found whilst syncing. This should not happen.`);return}const b=P.get(h),O=b.getPlayerOwnership(),_=O===u||O===d;if(r.multiplayer.isPlayerHost()&&!_){l.info(`Variable with ID ${f} does not have the expected owner. Wanted to change from ${u} to ${d}, but variable has owner ${O}.`);return}l.info(`Changing ownership of variable ${h} to ${d}.`),b.setPlayerOwnership(d);const j=me(s);if(l.info(`Sending acknowledgment of ownership change of variable with ID ${f} from ${u} to ${d} to ${m}.`),I([m],j,{}),r.multiplayer.isPlayerHost()){const T=r.multiplayerPeerJsHelper.getAllPeers().filter(se=>se!==m);if(!T.length)return;R({originalMessageName:s,originalData:g,expectedMessageName:j,otherPeerIds:T,shouldCancelMessageIfTimesOut:!1});for(const se of T)l.info(`Relaying ownership change of variable with Id ${f} to ${se}.`),I(T,s,g)}})})},Ge=e=>e.startsWith(X)?Ke:e.startsWith(K)?je:e.startsWith(Y)?Ee:e.startsWith(Q)?ze:null,Ve=e=>e.startsWith(X)||e.startsWith(K)||e.startsWith(Y)||e.startsWith(Q),We=()=>{const e=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(e.keys()).filter(Ve).forEach(a=>{const s=e.get(a);if(!s)return;const o=s.getMessages();!o.length||o.forEach(i=>{const c=i.getData(),g=i.getSender();l.info(`Received acknowledgment for message ${a}.`);const m=Ge(a);if(!m){N.error(`Invalid acknowledgment message ${a}.`);return}const p=m.exec(a);if(!p){N.error(`Invalid acknowledgment message ${a}.`);return}if(!w[a]||!w[a][g])return;const f=c._clock;if(f!==void 0){const u=p[3],d=p[4],y=oe({sceneNetworkId:d,instanceNetworkId:u});if(f<=y)return;ie({sceneNetworkId:d,instanceNetworkId:u,clock:f})}l.info(`Marking message ${a} as acknowledged from ${g}.`),w[a][g].acknowledged=!0})})},Fe=e=>{Object.keys(w).forEach(n=>{const a=w[n],s=Object.keys(a).filter(o=>!a[o].acknowledged);if(!s.length)l.info(`All peers have acknowledged message ${n}.`),delete w[n];else for(const o of s){const{lastMessageSentAt:i,originalMessageName:c,originalData:g,numberOfRetries:m,maxNumberOfRetries:p,messageRetryTime:f}=a[o];if(D()-i>f){if(m>=p){if(l.info(`Giving up on message ${n} for ${o}.`),a[o].shouldCancelMessageIfTimesOut){if(c.startsWith(J)){const u=ce.exec(c);if(!u){delete w[n];return}const d=u[2],y=u[3],h=e.getInstancesOf(d);if(!h){delete w[n];return}let M=h.find(O=>O.networkId===y);if(!M){delete w[n];return}const P=M.getBehavior("MultiplayerObject");if(!P){N.error(`Object ${d} does not have the MultiplayerObjectBehavior, cannot revert ownership.`),delete w[n];return}const b=g.previousOwner;if(b===void 0){delete w[n];return}P.playerNumber=b||0}if(c.startsWith(G)){const u=ue.exec(c);if(!u){delete w[n];return}const d=u[2],y=g.previousOwner,{type:h,name:M,containerId:P}=r.multiplayerVariablesManager.getVariableTypeAndNameFromNetworkId(d);if(h==="scene"&&P!==e.networkId){l.info(`Variable ${M} is in scene ${P}, but we are on ${e.networkId}. Skipping ownership revert.`),delete w[n];return}const b=P==="game"?e.getGame().getVariables():e.getVariables();if(!b.has(M)){N.error(`Variable with ID ${d} not found while reverting ownership. This should not happen.`),delete w[n];return}const O=b.get(M);if(y===void 0){delete w[n];return}O.setPlayerOwnership(y||0)}}delete w[n];continue}I([o],c,g),a[o].lastMessageSentAt=D(),a[o].numberOfRetries=m+1}}})},q="#destroyInstance",Ue=/#destroyInstance#owner_(\d+)#object_(.+)#instance_(.+)#scene_(.+)/,Be=({objectOwner:e,objectName:t,instanceNetworkId:n,sceneNetworkId:a})=>({messageName:`${q}#owner_${e}#object_${t}#instance_${n}#scene_${a}`,messageData:{}}),X="#instanceDestroyed",Ke=/#instanceDestroyed#owner_(\d+)#object_(.+)#instance_(.+)/,de=e=>e.replace(q,X),Ye=e=>{const t=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(t.keys()).filter(s=>s.startsWith(q)).forEach(s=>{const o=t.get(s);if(!o)return;const i=o.getMessages();!i.length||i.forEach(c=>{const g=c.getData(),m=c.getSender();l.info(`Received message ${s} with data ${JSON.stringify(g)}.`);const p=Ue.exec(s);if(!p||parseInt(p[1],10)===r.multiplayer.playerNumber)return;const u=p[2],d=p[3],y=p[4];if(y!==e.networkId){l.info(`Object ${u} is in scene ${y}, but we are on ${e.networkId}. Skipping.`);return}const h=B({runtimeScene:e,objectName:u,instanceNetworkId:d}),M=de(s);if(!h){l.info("Instance was not found in the scene, sending acknowledgment anyway."),I([m],M,{});return}if(l.info(`Destroying object ${u} with instance network ID ${d}.`),h.deleteFromScene(e),l.info(`Sending acknowledgment of destruction of object ${u} with instance network ID ${d} to ${m}.`),I([m],M,{}),r.multiplayer.isPlayerHost()){const b=r.multiplayerPeerJsHelper.getAllPeers().filter(O=>O!==m);if(!b.length)return;R({originalMessageName:s,originalData:g,expectedMessageName:M,otherPeerIds:b,shouldCancelMessageIfTimesOut:!1}),I(b,s,g)}})})},z="#customMessage",qe=/#customMessage#(.+)/,V=e=>`${z}#${e}`,Xe=({userMessageName:e,userMessageData:t,senderPlayerNumber:n})=>{const a=r.makeUuid();return{messageName:V(e),messageData:{data:t,uniqueId:a,senderPlayerNumber:n}}},Q="#ackCustomMessage",ze=/#ackCustomMessage#(.+)/,fe=e=>e.replace(z,Q),pe=(e,t)=>{const n=r.multiplayerPeerJsHelper.getAllPeers(),a=r.multiplayer.getCurrentPlayerNumber(),{messageName:s,messageData:o}=Xe({userMessageName:e,userMessageData:t,senderPlayerNumber:a}),i=fe(s);R({originalMessageName:s,originalData:o,expectedMessageName:i,otherPeerIds:n,shouldCancelMessageIfTimesOut:!1}),l.info(`Sending custom message ${e} with data ${JSON.stringify(t)}.`),I(n,s,o),r.multiplayer.isPlayerHost()&&r.multiplayerPeerJsHelper.getOrCreateMessagesList(s).pushMessage(o,r.multiplayerPeerJsHelper.getCurrentId())},Qe=(e,t)=>{const n=t.toJSObject();l.info(`Sending custom message ${e} with data ${JSON.stringify(n)}.`),pe(e,n)},Ze=e=>{const t=V(e),a=r.multiplayerPeerJsHelper.getAllMessagesMap().get(t);if(!a)return;const s=a.getMessages();if(!s.length)return;l.info(`custom message ${e} has been received.`);let o=!1;return s.forEach(i=>{const g=i.getData().uniqueId,m=`${t}#${g}`;F.has(m)||(F.add(m),o=!0)}),o},he=e=>{const t=V(e),a=r.multiplayerPeerJsHelper.getAllMessagesMap().get(t);if(!a)return;const s=a.getMessages();return s.length?s[s.length-1].getData().data:void 0},es=(e,t)=>{const n=he(e);!n||(l.info(`Received custom message ${e} with data ${JSON.stringify(n)}.`),t.fromJSObject(n))},ss=e=>{const t=V(e),a=r.multiplayerPeerJsHelper.getAllMessagesMap().get(t);if(!a)return 0;const s=a.getMessages();return s.length?s[s.length-1].getData().senderPlayerNumber:0},ts=()=>{const e=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(e.keys()).filter(a=>a.startsWith(z)).forEach(a=>{const s=e.get(a);if(!s){N.error(`No messages list found for ${a}.`);return}const o=s.getMessages();!o.length||o.forEach(i=>{const c=i.getData(),g=i.getSender(),m=c.uniqueId;if(l.info(`Received custom message ${a} with data ${JSON.stringify(c)}.`),!qe.exec(a)){N.error(`Invalid custom message ${a}.`);return}const f=`${a}#${m}`;if(F.has(f)){l.info(`Message ${a} has already been processed, skipping.`);return}const u=fe(a);if(l.info(`Sending acknowledgment of custom message ${a} to ${g}.`),I([g],u,{}),r.multiplayer.isPlayerHost()){const d=r.multiplayerPeerJsHelper.getAllPeers();if(!d.length)return;R({originalMessageName:a,originalData:c,expectedMessageName:u,otherPeerIds:d,shouldCancelMessageIfTimesOut:!1}),I(d,a,c)}})})},ye="#updateScene",Me=({sceneNetworkSyncData:e})=>({messageName:`${ye}`,messageData:e}),ns=e=>e.var?U?JSON.stringify(e.var)!==JSON.stringify(U.var):!0:!1,as=()=>D()-te<1e3/ke,rs=e=>{const t=e.getNetworkSyncData({playerNumber:r.multiplayer.getCurrentPlayerNumber()});if(!t)return;const n=ns(t),a=!as()||n||L>0;if(n&&(L=3),!a)return;const s=r.multiplayerPeerJsHelper.getAllPeers(),{messageName:o,messageData:i}=Me({sceneNetworkSyncData:t});I(s,o,i),te=D(),U=t,L=Math.max(L-1,0)},os=e=>{const t=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(t.keys()).filter(s=>s.startsWith(ye)).forEach(s=>{const o=t.get(s);if(!o)return;const i=o.getMessages();!i.length||i.forEach(c=>{const g=c.getData(),m=c.getSender(),p=g.id;if(p!==e.networkId){l.info(`Received update of scene ${p}, but we are on ${e.networkId}. Skipping.`);return}if(e.updateFromNetworkSyncData(g),r.multiplayer.isPlayerHost()){const u=r.multiplayerPeerJsHelper.getAllPeers().filter(d=>d!==m);I(u,s,g)}})})},be="#updateGame",we=({gameNetworkSyncData:e})=>({messageName:`${be}`,messageData:e}),is=e=>{const t=e.var,n=e.ss;if(!t&&!n)return!1;if(!v||!v.var||!v.ss||t&&JSON.stringify(t)!==JSON.stringify(v.var))return!0;if(n){if(n.length!==v.ss.length)return!0;for(let a=0;a<n.length;++a){const s=n[a],o=v.ss[a];if(s.name!==o.name||s.networkId!==o.networkId)return!0}}return!1},cs=()=>D()-ne<1e3/Se,gs=e=>{const t=e.getGame().getNetworkSyncData({playerNumber:r.multiplayer.getCurrentPlayerNumber()});if(!t)return;const n=is(t),a=!cs()||n||E>0;if(n&&(E=3),!a)return;const s=r.multiplayerPeerJsHelper.getAllPeers(),{messageName:o,messageData:i}=we({gameNetworkSyncData:t});I(s,o,i),ne=D(),v=t,E=Math.max(E-1,0)},ls=e=>{const t=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(t.keys()).filter(s=>s.startsWith(be)).forEach(s=>{const o=t.get(s);if(!o)return;const i=o.getMessages();!i.length||i.forEach(c=>{const g=c.getData(),m=c.getSender();if(e.getGame().updateFromNetworkSyncData(g),r.multiplayer.isPlayerHost()){const f=r.multiplayerPeerJsHelper.getAllPeers().filter(u=>u!==m);I(f,s,g)}})})},Z="#heartbeat",us=/#heartbeat#(.+)/,ms=()=>{const e={1:0};for(const t in C)e[t]=ee(parseInt(t,10));return{messageName:`${Z}#${r.multiplayer.getCurrentPlayerNumber()}`,messageData:{now:D(),playersPings:e}}},ds=({heartbeatSentAt:e})=>({messageName:`${Z}#${r.multiplayer.getCurrentPlayerNumber()}`,messageData:{sentAt:e}}),fs=()=>D()-ae<1e3/ve,ps=()=>{if(!r.multiplayer.isPlayerHost()||!!fs())return;const t=r.multiplayerPeerJsHelper.getAllPeers(),{messageName:n,messageData:a}=ms();I(t,n,a),ae=D()},hs=()=>{const e=r.multiplayerPeerJsHelper.getAllMessagesMap();Array.from(e.keys()).filter(a=>a.startsWith(Z)).forEach(a=>{const s=e.get(a);if(!s)return;const o=s.getMessages();!o.length||o.forEach(i=>{const c=i.getData(),g=i.getSender(),m=us.exec(a);if(!m)return;const p=parseInt(m[1],10);if(re[g]=p,!r.multiplayer.isPlayerHost()){k=c.playersPings;const{messageName:b,messageData:O}=ds({heartbeatSentAt:c.now});I([g],b,O);return}const f=D(),u=c.sentAt,d=Math.round(f-u),h=(C[p]||{}).lastRoundTripTimes||[];h.push(d),h.length>5&&h.shift(),C[p]={lastRoundTripTimes:h};let M=0;for(const b of h)M+=b;const P=Math.round(M/h.length/2);k[p]=P})})},ee=e=>e<1?0:k[e]||0,ys=()=>{const e=r.multiplayer.getCurrentPlayerNumber();return ee(e)},Ms=e=>{if(N.info(`Marking player ${e} as disconnected.`),x.push(e),e===1){N.info("Host has disconnected, ending the game."),C={},k={},r.multiplayer.handleLobbyGameEnded();return}delete C[e],delete k[e]},bs=e=>{if(!r.multiplayer.isLobbyGameRunning())return;const t=[],n=r.multiplayerPeerJsHelper.getJustDisconnectedPeers();if(n.length)for(const a of n){const s=re[a];if(!s)return;N.info(`Player ${s} has disconnected.`),t.push(s)}for(const a of t){if(r.multiplayer.isPlayerHost()){const s=e.getAdhocListOfAllInstances();for(const o of s){const i=o.getBehavior("MultiplayerObject");if(i&&i.getPlayerObjectOwnership()===a){const c=i.getActionOnPlayerDisconnect();c==="DestroyObject"?o.deleteFromScene(e):c==="GiveOwnershipToHost"&&i.removeObjectOwnership()}}}Ms(a)}},ws=()=>{x=[]},Is=()=>x.length>0,Os=e=>x.includes(e),Ps=()=>x,Ns=()=>Object.keys(k).length,Ds=e=>k[e]!==void 0,Ie="#endGame",$s=()=>({messageName:Ie,messageData:{}});return{sendDataTo:I,addExpectedMessageAcknowledgement:R,clearExpectedMessageAcknowledgements:Ae,handleAcknowledgeMessagesReceived:We,resendClearOrCancelAcknowledgedMessages:Fe,createChangeInstanceOwnerMessage:Re,createInstanceOwnerChangedMessageNameFromChangeInstanceOwnerMessage:ge,handleChangeInstanceOwnerMessagesReceived:Te,createUpdateInstanceMessage:xe,handleUpdateInstanceMessagesReceived:_e,createDestroyInstanceMessage:Be,createInstanceDestroyedMessageNameFromDestroyInstanceMessage:de,handleDestroyInstanceMessagesReceived:Ye,createChangeVariableOwnerMessage:Le,createVariableOwnerChangedMessageNameFromChangeVariableOwnerMessage:me,handleChangeVariableOwnerMessagesReceived:Je,sendCustomMessage:pe,getCustomMessageData:he,sendVariableCustomMessage:Qe,getVariableCustomMessageData:es,hasCustomMessageBeenReceived:Ze,handleCustomMessagesReceived:ts,getCustomMessageSender:ss,createUpdateSceneMessage:Me,handleUpdateSceneMessagesToSend:rs,handleUpdateSceneMessagesReceived:os,createUpdateGameMessage:we,handleUpdateGameMessagesToSend:gs,handleUpdateGameMessagesReceived:ls,handleHeartbeatsToSend:ps,handleHeartbeatsReceived:hs,getPlayerPing:ee,getCurrentPlayerPing:ys,updatePlayersPingsForTests:e=>{k=e},handleDisconnectedPeers:bs,clearDisconnectedPeers:ws,hasAnyPlayerLeft:Is,hasPlayerLeft:Os,getDisconnectedPlayers:Ps,getNumberOfConnectedPlayers:Ns,isPlayerConnected:Ds,sendEndGameMessage:()=>{if(!r.multiplayer.isPlayerHost())return;l.info("Sending endgame message.");const e=r.multiplayerPeerJsHelper.getAllPeers(),{messageName:t,messageData:n}=$s();I(e,t,n)},handleEndGameMessages:()=>{if(r.multiplayer.isPlayerHost())return;const t=r.multiplayerPeerJsHelper.getAllMessagesMap().get(Ie);!t||!t.getMessages().length||(N.info("Received endgame message."),C={},k={},r.multiplayer.handleLobbyGameEnded())}}},r.multiplayerMessageManager=r.makeMultiplayerMessageManager()})(gdjs||(gdjs={}));
//# sourceMappingURL=messageManager.js.map
