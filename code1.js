gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.forEachIndex3 = 0;

gdjs.Game_32SceneCode.forEachIndex4 = 0;

gdjs.Game_32SceneCode.forEachObjects3 = [];

gdjs.Game_32SceneCode.forEachObjects4 = [];

gdjs.Game_32SceneCode.forEachTemporary3 = null;

gdjs.Game_32SceneCode.forEachTemporary4 = null;

gdjs.Game_32SceneCode.forEachTotalCount3 = 0;

gdjs.Game_32SceneCode.forEachTotalCount4 = 0;

gdjs.Game_32SceneCode.GDTileObjects1= [];
gdjs.Game_32SceneCode.GDTileObjects2= [];
gdjs.Game_32SceneCode.GDTileObjects3= [];
gdjs.Game_32SceneCode.GDTileObjects4= [];
gdjs.Game_32SceneCode.GDTileObjects5= [];
gdjs.Game_32SceneCode.GDTileObjects6= [];
gdjs.Game_32SceneCode.GDCameraCenterObjects1= [];
gdjs.Game_32SceneCode.GDCameraCenterObjects2= [];
gdjs.Game_32SceneCode.GDCameraCenterObjects3= [];
gdjs.Game_32SceneCode.GDCameraCenterObjects4= [];
gdjs.Game_32SceneCode.GDCameraCenterObjects5= [];
gdjs.Game_32SceneCode.GDCameraCenterObjects6= [];
gdjs.Game_32SceneCode.GDPlayerObjects1= [];
gdjs.Game_32SceneCode.GDPlayerObjects2= [];
gdjs.Game_32SceneCode.GDPlayerObjects3= [];
gdjs.Game_32SceneCode.GDPlayerObjects4= [];
gdjs.Game_32SceneCode.GDPlayerObjects5= [];
gdjs.Game_32SceneCode.GDPlayerObjects6= [];
gdjs.Game_32SceneCode.GDArrowBarObjects1= [];
gdjs.Game_32SceneCode.GDArrowBarObjects2= [];
gdjs.Game_32SceneCode.GDArrowBarObjects3= [];
gdjs.Game_32SceneCode.GDArrowBarObjects4= [];
gdjs.Game_32SceneCode.GDArrowBarObjects5= [];
gdjs.Game_32SceneCode.GDArrowBarObjects6= [];
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects1= [];
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2= [];
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects3= [];
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects4= [];
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects5= [];
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects6= [];
gdjs.Game_32SceneCode.GDPausedGameTextObjects1= [];
gdjs.Game_32SceneCode.GDPausedGameTextObjects2= [];
gdjs.Game_32SceneCode.GDPausedGameTextObjects3= [];
gdjs.Game_32SceneCode.GDPausedGameTextObjects4= [];
gdjs.Game_32SceneCode.GDPausedGameTextObjects5= [];
gdjs.Game_32SceneCode.GDPausedGameTextObjects6= [];
gdjs.Game_32SceneCode.GDScoreObjects1= [];
gdjs.Game_32SceneCode.GDScoreObjects2= [];
gdjs.Game_32SceneCode.GDScoreObjects3= [];
gdjs.Game_32SceneCode.GDScoreObjects4= [];
gdjs.Game_32SceneCode.GDScoreObjects5= [];
gdjs.Game_32SceneCode.GDScoreObjects6= [];
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects1= [];
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects2= [];
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects3= [];
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects4= [];
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects5= [];
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects6= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects1= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects2= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects3= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects4= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects5= [];
gdjs.Game_32SceneCode.GDMovementJoystickObjects6= [];
gdjs.Game_32SceneCode.GDAimingJoystickObjects1= [];
gdjs.Game_32SceneCode.GDAimingJoystickObjects2= [];
gdjs.Game_32SceneCode.GDAimingJoystickObjects3= [];
gdjs.Game_32SceneCode.GDAimingJoystickObjects4= [];
gdjs.Game_32SceneCode.GDAimingJoystickObjects5= [];
gdjs.Game_32SceneCode.GDAimingJoystickObjects6= [];
gdjs.Game_32SceneCode.GDArrowObjects1= [];
gdjs.Game_32SceneCode.GDArrowObjects2= [];
gdjs.Game_32SceneCode.GDArrowObjects3= [];
gdjs.Game_32SceneCode.GDArrowObjects4= [];
gdjs.Game_32SceneCode.GDArrowObjects5= [];
gdjs.Game_32SceneCode.GDArrowObjects6= [];
gdjs.Game_32SceneCode.GDBowObjects1= [];
gdjs.Game_32SceneCode.GDBowObjects2= [];
gdjs.Game_32SceneCode.GDBowObjects3= [];
gdjs.Game_32SceneCode.GDBowObjects4= [];
gdjs.Game_32SceneCode.GDBowObjects5= [];
gdjs.Game_32SceneCode.GDBowObjects6= [];
gdjs.Game_32SceneCode.GDGround3Objects1= [];
gdjs.Game_32SceneCode.GDGround3Objects2= [];
gdjs.Game_32SceneCode.GDGround3Objects3= [];
gdjs.Game_32SceneCode.GDGround3Objects4= [];
gdjs.Game_32SceneCode.GDGround3Objects5= [];
gdjs.Game_32SceneCode.GDGround3Objects6= [];


gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDScoreObjects5 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDScoreObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDScoreObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDScoreObjects5[i].getVariables().getFromIndex(0)) > gdjs.multiplayer.getPlayersInLobbyCount() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDScoreObjects5[k] = gdjs.Game_32SceneCode.GDScoreObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDScoreObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDScoreObjects5 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects5[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects4, gdjs.Game_32SceneCode.GDPlayerObjects5);

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32SceneCode.GDScoreObjects5);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDScoreObjects5.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDScoreObjects5[i].getVariableNumber(gdjs.Game_32SceneCode.GDScoreObjects5[i].getVariables().getFromIndex(0)) == ((gdjs.Game_32SceneCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects5[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDScoreObjects5[k] = gdjs.Game_32SceneCode.GDScoreObjects5[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDScoreObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects5 */
/* Reuse gdjs.Game_32SceneCode.GDScoreObjects5 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects5.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects5[i].setColor(((gdjs.Game_32SceneCode.GDPlayerObjects5.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects5[0].getVariables()).getFromIndex(2).getAsString());
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects3);

for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDPlayerObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDPlayerObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDPlayerObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(gdjs.Game_32SceneCode.GDPlayerObjects4[i].getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].setColor(gdjs.Game_32SceneCode.GDPlayerObjects4[i].getVariables().getFromIndex(2).getAsString());
}
}
{ //Subevents: 
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowBar"), gdjs.Game_32SceneCode.GDArrowBarObjects3);

for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDArrowBarObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDArrowBarObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDArrowBarObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDArrowBarObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowBarObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowBarObjects4[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(gdjs.Game_32SceneCode.GDArrowBarObjects4[i].getVariables().getFromIndex(0).getAsNumber());
}
}}
}

}


{



}


};gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayerUsername(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()) == "");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDScoreObjects3, gdjs.Game_32SceneCode.GDScoreObjects4);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects4[i].getBehavior("Text").setText("P" + gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsString() + ": " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.multiplayer.getPlayerUsername(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()) != "");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDScoreObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDScoreObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDScoreObjects3[i].getBehavior("Text").setText(gdjs.multiplayer.getPlayerUsername(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()) + ": " + runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsString());
}
}}

}


};gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Game_32SceneCode.GDScoreObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDScoreObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDScoreObjects3[i].getVariableNumber(gdjs.Game_32SceneCode.GDScoreObjects3[i].getVariables().getFromIndex(0)) == gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDScoreObjects3[k] = gdjs.Game_32SceneCode.GDScoreObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDScoreObjects3.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.Game_32SceneCode.localVariables[0].getFromIndex(0).add(1);
}}

}


};gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{


const repeatCount2 = 4;
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList5(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("PlayerNumberIndex", variable);
}
gdjs.Game_32SceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}
gdjs.Game_32SceneCode.localVariables.pop();

}


};gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AimingJoystick"), gdjs.Game_32SceneCode.GDAimingJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("MovementJoystick"), gdjs.Game_32SceneCode.GDMovementJoystickObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDMovementJoystickObjects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDAimingJoystickObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDAimingJoystickObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Game_32SceneCode.eventsList3(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList7(runtimeScene);
}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CameraCenter"), gdjs.Game_32SceneCode.GDCameraCenterObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Game_32SceneCode.GDCameraCenterObjects1.length !== 0 ? gdjs.Game_32SceneCode.GDCameraCenterObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDCameraCenterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCameraCenterObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "67;71;100");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.multiplayer.getPlayersInLobbyCount());
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTileObjects2Objects = Hashtable.newFrom({"Tile": gdjs.Game_32SceneCode.GDTileObjects2});
gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateUpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].getBehavior("TopDownMovement").simulateRightKey();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.Game_32SceneCode.GDTileObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTileObjects2Objects, false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects3, gdjs.Game_32SceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) < (( gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects4[0].getCenterXInScene());
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects3, gdjs.Game_32SceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) > (( gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects4[0].getCenterXInScene());
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects3, gdjs.Game_32SceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects4[k] = gdjs.Game_32SceneCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("Run");
}
}}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects3, gdjs.Game_32SceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects4.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects4[k] = gdjs.Game_32SceneCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


};gdjs.Game_32SceneCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);


for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDPlayerObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDPlayerObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDPlayerObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList11(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32SceneCode.eventsList13 = function(runtimeScene) {

{



}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBowObjects4Objects = Hashtable.newFrom({"Bow": gdjs.Game_32SceneCode.GDBowObjects4});
gdjs.Game_32SceneCode.eventsList14 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBowObjects4Objects = Hashtable.newFrom({"Bow": gdjs.Game_32SceneCode.GDBowObjects4});
gdjs.Game_32SceneCode.eventsList15 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);


for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDPlayerObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Bow"), gdjs.Game_32SceneCode.GDBowObjects4);
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDPlayerObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDPlayerObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBowObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBowObjects4[i].getBehavior("MultiplayerObject").getPlayerObjectOwnership() == ((gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBowObjects4[k] = gdjs.Game_32SceneCode.GDBowObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBowObjects4.length = k;
if (isConditionTrue_0) {
{gdjs.evtsExt__PointAndOrbit__PointAndOrbit.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBowObjects4Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects4[0].getCenterXInScene()), (( gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects4[0].getCenterYInScene()), 5, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);


for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDPlayerObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.Game_32SceneCode.GDBowObjects4.length = 0;

gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDPlayerObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDPlayerObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20259308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDBowObjects4Objects, (( gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects4[0].getPointX("")), (( gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects4[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBowObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBowObjects4[i].getBehavior("Scale").setScale(0.9);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBowObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBowObjects4[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(((gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
}}
}

}


{



}


};gdjs.Game_32SceneCode.eventsList17 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bow"), gdjs.Game_32SceneCode.GDBowObjects3);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)).setString("Aiming");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(4)).setNumber((gdjs.Game_32SceneCode.GDPlayerObjects3[i].getAngleToPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBowObjects3[i].getBehavior("Animation").setAnimationName("Charging");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bow"), gdjs.Game_32SceneCode.GDBowObjects3);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)).setString("FiringArrow");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBowObjects3[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Right", "Any", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects3);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)).setString("Aiming");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(4)).setNumber(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)) == "Aiming" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RT", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RB", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20269684);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setString("FiringArrow");
}
}}

}


};gdjs.Game_32SceneCode.eventsList18 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("AimingJoystick"), gdjs.Game_32SceneCode.GDAimingJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDAimingJoystickObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDAimingJoystickObjects2[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDAimingJoystickObjects2[k] = gdjs.Game_32SceneCode.GDAimingJoystickObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDAimingJoystickObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDAimingJoystickObjects2 */
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects1, gdjs.Game_32SceneCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(3)).setString("Aiming");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(4)).setNumber((( gdjs.Game_32SceneCode.GDAimingJoystickObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDAimingJoystickObjects2[0].StickAngle((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AimingJoystick"), gdjs.Game_32SceneCode.GDAimingJoystickObjects1);
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDAimingJoystickObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDAimingJoystickObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDAimingJoystickObjects1[k] = gdjs.Game_32SceneCode.GDAimingJoystickObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDAimingJoystickObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)) == "Aiming" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20273108);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setString("FiringArrow");
}
}}

}


};gdjs.Game_32SceneCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList17(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList20 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList10(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList12(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList13(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList16(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList19(runtimeScene);
}


};gdjs.Game_32SceneCode.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList22 = function(runtimeScene) {

};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects3Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects3Objects = Hashtable.newFrom({"Arrow": gdjs.Game_32SceneCode.GDArrowObjects3});
gdjs.Game_32SceneCode.eventsList23 = function(runtimeScene) {

};gdjs.Game_32SceneCode.eventsList24 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDArrowObjects3 */

for (gdjs.Game_32SceneCode.forEachIndex4 = 0;gdjs.Game_32SceneCode.forEachIndex4 < gdjs.Game_32SceneCode.GDArrowObjects3.length;++gdjs.Game_32SceneCode.forEachIndex4) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects3, gdjs.Game_32SceneCode.GDPlayerObjects4);

gdjs.Game_32SceneCode.GDArrowObjects4.length = 0;


gdjs.Game_32SceneCode.forEachTemporary4 = gdjs.Game_32SceneCode.GDArrowObjects3[gdjs.Game_32SceneCode.forEachIndex4];
gdjs.Game_32SceneCode.GDArrowObjects4.push(gdjs.Game_32SceneCode.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects4[i].getBehavior("Animation").getAnimationName() == "Stopped" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects4[k] = gdjs.Game_32SceneCode.GDArrowObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects4[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects4[k] = gdjs.Game_32SceneCode.GDArrowObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects4.length = k;
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects4[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects4[i].getVariables().getFromIndex(1)).add(1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickUpArrow", false, 30, gdjs.randomFloatInRange(0.9, 1.1));
}}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects3Objects = Hashtable.newFrom({"Arrow": gdjs.Game_32SceneCode.GDArrowObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects4Objects = Hashtable.newFrom({"Arrow": gdjs.Game_32SceneCode.GDArrowObjects4});
gdjs.Game_32SceneCode.eventsList25 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects4[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects4[i].getVariables().getFromIndex(3)) == "Aiming" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects4[k] = gdjs.Game_32SceneCode.GDPlayerObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects4.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDArrowObjects3, gdjs.Game_32SceneCode.GDArrowObjects4);

gdjs.copyArray(runtimeScene.getObjects("Bow"), gdjs.Game_32SceneCode.GDBowObjects4);
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects4[i].setPosition((( gdjs.Game_32SceneCode.GDBowObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBowObjects4[0].getPointX("ArrowPoint")),(( gdjs.Game_32SceneCode.GDBowObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBowObjects4[0].getPointY("ArrowPoint")));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects4[i].setAngle(((gdjs.Game_32SceneCode.GDPlayerObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects4[0].getVariables()).getFromIndex(4).getAsNumber());
}
}{gdjs.evtsExt__PointAndOrbit__PointAndOrbit.func(runtimeScene, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects4Objects, (( gdjs.Game_32SceneCode.GDBowObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBowObjects4[0].getPointX("ArrowPoint")), (( gdjs.Game_32SceneCode.GDBowObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBowObjects4[0].getPointY("ArrowPoint")), 0, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{



}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)) == "FiringArrow" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects3[k] = gdjs.Game_32SceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDArrowObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects3[i].addPolarForce((gdjs.Game_32SceneCode.GDArrowObjects3[i].getAngle()), 350, 1);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects3[i].getBehavior("Animation").setAnimationName("Launched");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "FireArrow", false, 35, gdjs.randomFloatInRange(0.9, 1.1));
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)).setString("Idle");
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects4Objects = Hashtable.newFrom({"Player": gdjs.Game_32SceneCode.GDPlayerObjects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects4Objects = Hashtable.newFrom({"Arrow": gdjs.Game_32SceneCode.GDArrowObjects4});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects4Objects = Hashtable.newFrom({"Arrow": gdjs.Game_32SceneCode.GDArrowObjects4});
gdjs.Game_32SceneCode.eventsList26 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDArrowObjects3, gdjs.Game_32SceneCode.GDArrowObjects4);

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects4.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDArrowObjects4[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects4[k] = gdjs.Game_32SceneCode.GDArrowObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects4.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects4[i].getBehavior("Animation").getAnimationName() == "Launched" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects4[k] = gdjs.Game_32SceneCode.GDArrowObjects4[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects4Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects4Objects, false, runtimeScene, false);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDArrowObjects4 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects4 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].activateBehavior("PlatformerObject", false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].setPosition((( gdjs.Game_32SceneCode.GDArrowObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDArrowObjects4[0].getAABBCenterX()),(( gdjs.Game_32SceneCode.GDArrowObjects4.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDArrowObjects4[0].getAABBCenterY()));
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("Sticker").Stick(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death", false, 75, 0.8);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects4[i].getBehavior("Animation").setAnimationName("Death");
}
}}

}


};gdjs.Game_32SceneCode.eventsList27 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Game_32SceneCode.GDArrowObjects3);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayerObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects3Objects, 16, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList24(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bow"), gdjs.Game_32SceneCode.GDBowObjects3);
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayerObjects2, gdjs.Game_32SceneCode.GDPlayerObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDBowObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDBowObjects3[i].getBehavior("MultiplayerObject").getPlayerObjectOwnership() == ((gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDBowObjects3[k] = gdjs.Game_32SceneCode.GDBowObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDBowObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariableNumber(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects3[k] = gdjs.Game_32SceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariableString(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(3)) == "Aiming" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects3[k] = gdjs.Game_32SceneCode.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20283092);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDBowObjects3 */
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects3 */
gdjs.Game_32SceneCode.GDArrowObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects3Objects, (( gdjs.Game_32SceneCode.GDBowObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBowObjects3[0].getPointX("ArrowPoint")), (( gdjs.Game_32SceneCode.GDBowObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDBowObjects3[0].getPointY("ArrowPoint")), "");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects3[i].getBehavior("Scale").setScale(0.3);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects3[i].setColor(((gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(2).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects3[i].getBehavior("MultiplayerObject").setPlayerObjectOwnership(((gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects3[i].returnVariable(gdjs.Game_32SceneCode.GDPlayerObjects3[i].getVariables().getFromIndex(1)).sub(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Game_32SceneCode.GDArrowObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects3[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects3[k] = gdjs.Game_32SceneCode.GDArrowObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects3[i].getBehavior("Animation").getAnimationName() == "Ready" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects3[k] = gdjs.Game_32SceneCode.GDArrowObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList25(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Game_32SceneCode.GDArrowObjects2);

for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDArrowObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.Game_32SceneCode.GDArrowObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDArrowObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDArrowObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.Game_32SceneCode.eventsList26(runtimeScene);} //Subevents end.
}
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.Game_32SceneCode.GDArrowObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTileObjects1Objects = Hashtable.newFrom({"Tile": gdjs.Game_32SceneCode.GDTileObjects1});
gdjs.Game_32SceneCode.eventsList28 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

for (gdjs.Game_32SceneCode.forEachIndex3 = 0;gdjs.Game_32SceneCode.forEachIndex3 < gdjs.Game_32SceneCode.GDPlayerObjects2.length;++gdjs.Game_32SceneCode.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("ArrowBar"), gdjs.Game_32SceneCode.GDArrowBarObjects3);
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;


gdjs.Game_32SceneCode.forEachTemporary3 = gdjs.Game_32SceneCode.GDPlayerObjects2[gdjs.Game_32SceneCode.forEachIndex3];
gdjs.Game_32SceneCode.GDPlayerObjects3.push(gdjs.Game_32SceneCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowBarObjects3.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowBarObjects3[i].getBehavior("MultiplayerObject").getPlayerObjectOwnership() == ((gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowBarObjects3[k] = gdjs.Game_32SceneCode.GDArrowBarObjects3[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowBarObjects3.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowBarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowBarObjects3[i].setPosition((( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getPointX("")) - ((gdjs.Game_32SceneCode.GDArrowBarObjects3[i].getWidth()) / 2),(( gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDPlayerObjects3[0].getPointY("")) - 20);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowBarObjects3.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowBarObjects3[i].SetValue(((gdjs.Game_32SceneCode.GDPlayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Game_32SceneCode.GDPlayerObjects3[0].getVariables()).getFromIndex(1).getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() != "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList27(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.Game_32SceneCode.GDArrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.Game_32SceneCode.GDTileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowObjects1[i].getBehavior("Animation").getAnimationName() == "Launched" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowObjects1[k] = gdjs.Game_32SceneCode.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDArrowObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTileObjects1Objects, false, runtimeScene, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDArrowObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowObjects1[i].getBehavior("Animation").setAnimationName("Stopped");
}
}}

}


};gdjs.Game_32SceneCode.eventsList29 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LeaveGameButton"), gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2[k] = gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayerMessageManager.sendCustomMessage("End", gdjs.evtTools.common.toString(gdjs.multiplayer.getCurrentPlayerNumber()));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isPlayerHost();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.multiplayer.getPlayersInLobbyCount() < runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.multiplayerMessageManager.hasCustomMessageBeenReceived("End");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
}
if (isConditionTrue_0) {
{gdjs.multiplayer.endLobbyGame();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustEnded();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lobby", false);
}}

}


};gdjs.Game_32SceneCode.eventsList30 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20302092);
}
}
if (isConditionTrue_0) {
{gdjs.multiplayerVariablesManager.takeVariableOwnership(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20303196);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaveGameButton"), gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PausedGameText"), gdjs.Game_32SceneCode.GDPausedGameTextObjects2);
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 0);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPausedGameTextObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPausedGameTextObjects2[i].getBehavior("Tween").addObjectPositionYTween2("TweenUp", 0, "bouncePast", 0.5, false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2[i].getBehavior("Tween").addObjectPositionYTween2("TweenUp", 112, "bouncePast", 0.5, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20305684);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaveGameButton"), gdjs.Game_32SceneCode.GDLeaveGameButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PausedGameText"), gdjs.Game_32SceneCode.GDPausedGameTextObjects1);
{gdjs.evtTools.camera.setLayerTimeScale(runtimeScene, "", 1);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPausedGameTextObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPausedGameTextObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TweenUp", -(224), "bouncePast", 0.5, false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLeaveGameButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLeaveGameButtonObjects1[i].getBehavior("Tween").addObjectPositionYTween2("TweenUp", -(112), "bouncePast", 0.5, false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList31 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ArrowBar"), gdjs.Game_32SceneCode.GDArrowBarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDArrowBarObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDArrowBarObjects2[i].getBehavior("MultiplayerObject").isObjectOwnedByCurrentPlayer() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDArrowBarObjects2[k] = gdjs.Game_32SceneCode.GDArrowBarObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDArrowBarObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDArrowBarObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDArrowBarObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDArrowBarObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Game_32SceneCode.mapOfEmptyGDPlayerObjects = Hashtable.newFrom({"Player": []});
gdjs.Game_32SceneCode.eventsList32 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariableNumber(gdjs.Game_32SceneCode.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariableNumber(gdjs.Game_32SceneCode.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects1[k] = gdjs.Game_32SceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4").add(1);
}}

}


};gdjs.Game_32SceneCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Game_32SceneCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayerObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayerObjects2[k] = gdjs.Game_32SceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayerObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList31(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfEmptyGDPlayerObjects) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.isLobbyGameRunning();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList32(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList34 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList9(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList21(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList28(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList29(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList30(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList33(runtimeScene);
}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDTileObjects1.length = 0;
gdjs.Game_32SceneCode.GDTileObjects2.length = 0;
gdjs.Game_32SceneCode.GDTileObjects3.length = 0;
gdjs.Game_32SceneCode.GDTileObjects4.length = 0;
gdjs.Game_32SceneCode.GDTileObjects5.length = 0;
gdjs.Game_32SceneCode.GDTileObjects6.length = 0;
gdjs.Game_32SceneCode.GDCameraCenterObjects1.length = 0;
gdjs.Game_32SceneCode.GDCameraCenterObjects2.length = 0;
gdjs.Game_32SceneCode.GDCameraCenterObjects3.length = 0;
gdjs.Game_32SceneCode.GDCameraCenterObjects4.length = 0;
gdjs.Game_32SceneCode.GDCameraCenterObjects5.length = 0;
gdjs.Game_32SceneCode.GDCameraCenterObjects6.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects5.length = 0;
gdjs.Game_32SceneCode.GDPlayerObjects6.length = 0;
gdjs.Game_32SceneCode.GDArrowBarObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrowBarObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrowBarObjects3.length = 0;
gdjs.Game_32SceneCode.GDArrowBarObjects4.length = 0;
gdjs.Game_32SceneCode.GDArrowBarObjects5.length = 0;
gdjs.Game_32SceneCode.GDArrowBarObjects6.length = 0;
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects4.length = 0;
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects5.length = 0;
gdjs.Game_32SceneCode.GDLeaveGameButtonObjects6.length = 0;
gdjs.Game_32SceneCode.GDPausedGameTextObjects1.length = 0;
gdjs.Game_32SceneCode.GDPausedGameTextObjects2.length = 0;
gdjs.Game_32SceneCode.GDPausedGameTextObjects3.length = 0;
gdjs.Game_32SceneCode.GDPausedGameTextObjects4.length = 0;
gdjs.Game_32SceneCode.GDPausedGameTextObjects5.length = 0;
gdjs.Game_32SceneCode.GDPausedGameTextObjects6.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects1.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects2.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects3.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects4.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects5.length = 0;
gdjs.Game_32SceneCode.GDScoreObjects6.length = 0;
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects1.length = 0;
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects2.length = 0;
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects3.length = 0;
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects4.length = 0;
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects5.length = 0;
gdjs.Game_32SceneCode.GDP_9595to_9595pauseObjects6.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDMovementJoystickObjects6.length = 0;
gdjs.Game_32SceneCode.GDAimingJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDAimingJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDAimingJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDAimingJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDAimingJoystickObjects5.length = 0;
gdjs.Game_32SceneCode.GDAimingJoystickObjects6.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects1.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects2.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects3.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects4.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects5.length = 0;
gdjs.Game_32SceneCode.GDArrowObjects6.length = 0;
gdjs.Game_32SceneCode.GDBowObjects1.length = 0;
gdjs.Game_32SceneCode.GDBowObjects2.length = 0;
gdjs.Game_32SceneCode.GDBowObjects3.length = 0;
gdjs.Game_32SceneCode.GDBowObjects4.length = 0;
gdjs.Game_32SceneCode.GDBowObjects5.length = 0;
gdjs.Game_32SceneCode.GDBowObjects6.length = 0;
gdjs.Game_32SceneCode.GDGround3Objects1.length = 0;
gdjs.Game_32SceneCode.GDGround3Objects2.length = 0;
gdjs.Game_32SceneCode.GDGround3Objects3.length = 0;
gdjs.Game_32SceneCode.GDGround3Objects4.length = 0;
gdjs.Game_32SceneCode.GDGround3Objects5.length = 0;
gdjs.Game_32SceneCode.GDGround3Objects6.length = 0;

gdjs.Game_32SceneCode.eventsList34(runtimeScene);

return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
