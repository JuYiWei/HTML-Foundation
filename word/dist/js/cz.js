/**
 * Created by juyiwei on 2017/8/21.
 */


function addCell(explain, example, translate) {
    $('#content').append('<p style="color: #a35df7; font-size: 18px">' + explain + '</p> <div style="margin: 20px"> <p style="color: darkgray; margin: auto">' + example + '</p> <p style="color: darkgray; margin: auto">' + translate + '</p> </div>');
}

function setWord(word) {
    $('#word').text(word);
    $('#title').text(word);
}

function setWordAudio(audio) {
    $('#word-audio').text(audio);
}