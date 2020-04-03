function start(sheet1, dotID, idChatWBot){    
   var list = [
    'Разминка', 
    'Тренировка пресса', 
    'Тренировка спины', 
    'Тренировка ягодиц', 
    'Тренировка ног', 
    'Комплекс'
  ]
  
  for (var i=0; i<list.length; i++){   
    creatorWod(sheet1, list[i], dotID, idChatWBot)     
    Utilities.sleep(1*500); //задержка отправки блока сообщения в 0,5 секунды
  }    
}
