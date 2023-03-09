function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}
pr = console.log
/*pr(shout)
pr(whisper)
pr(logShout)*/
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate(string) {
    return string.toLowerCase(string, 'I can\'t hear you!')
}