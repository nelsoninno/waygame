gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDLobbyButtonObjects1= [];
gdjs.LobbyCode.GDLobbyButtonObjects2= [];
gdjs.LobbyCode.GDInstructions_9595TextObjects1= [];
gdjs.LobbyCode.GDInstructions_9595TextObjects2= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LobbyButton"), gdjs.LobbyCode.GDLobbyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDLobbyButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDLobbyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDLobbyButtonObjects1[k] = gdjs.LobbyCode.GDLobbyButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDLobbyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects1.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);

return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
