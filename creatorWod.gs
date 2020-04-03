function creatorWod(sheet1, list, dotID, idChatWBot){
    var accessToList = sheet1.getSheetByName(list);
    var lastRow = accessToList.getLastRow();
    var wod = accessToList.getRange(2, 1, lastRow, 7);   
    var wodArray = wod.randomize().getValues();    
    
    var text = encodeURIComponent(list + ': ' + wodArray[0][0]);
    var createLink = "https://api.telegram.org/bot" + dotID + "/sendMessage?chat_id=" + idChatWBot + "&text=" + text;   
    var loadLink = UrlFetchApp.fetch(createLink);  
  
    for (var i=1; i<7; i++){    
      if (wodArray[0][i].length !== 0){
        var text = wodArray[0][i];     
        var createLink = "https://api.telegram.org/bot" + dotID + "/sendMessage?chat_id=" + idChatWBot + "&text=" + text;        
        var loadLink = UrlFetchApp.fetch(createLink);     
      }  
    }
}
