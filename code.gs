text='На этом видео ^ПРОСМОТРЫ^ просмотров, ^ЛАЙКИ^ лайков, ^КОММЕНТАРИИ^, комментариев, ^ДИЗЛАЙКИ^ дизлайков! Code by @Terminal_Programming' //Текст, который будет написан в названии видео
//ПЕРЕМЕННЫЕ:

//^ПРОСМОТРЫ^ - количество просмотров на видео
//^ЛАЙКИ^ - количество лайков на видео
//^КОММЕНТАРИИ^ - количество комментариев под видео
//^ДИЗЛАЙКИ^ - количество дизлайков на видео

link="https://youtu.be/zf6u9f1HWJ4" //Ссылка на видео, название которого вы хотите менять, либо ID видео
//ПРИМЕЧАНИЕ:
//Ссылка должна быть взята из поля "Поделиться", а не из адресной строки!
//Чтобы получить айди видео, вы можете воспользоваться гайдом по ссылке:
//https://soc-service.com/html/yb_id_video.html

function updateTitle() {
  
  var videoID = link.replace('https://youtu.be/',''); //   

  var part = 'snippet,statistics';
  var params = {'id': videoID};
  
  var response = YouTube.Videos.list(part, params);
  var video = response.items[0];
  var videoViewsCount = video.statistics.viewCount;
  var videoLikeCount = video.statistics.likeCount;
  var videoDislikeCount = video.statistics.dislikeCount;
  var videoCommentCount = video.statistics.commentCount;
  var videoTitle=  (((text.replace('^ПРОСМОТРЫ^',videoViewsCount.toString())).replace('^КОММЕНТАРИИ^',videoCommentCount.toString())).replace('^ЛАЙКИ^',videoLikeCount.toString())).replace('^ДИЗЛАЙКИ^',videoDislikeCount);

  video.snippet.title = videoTitle;
  
  try{
    YouTube.Videos.update(video, part); 
    
  }catch(e){

  }
  
}
