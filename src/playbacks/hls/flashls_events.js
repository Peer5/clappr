var Mediator = require('../../components/mediator')

class HLSEvents {
  constructor(instanceId) {
    this.instanceId = instanceId
  }
  ready() {
    Mediator.trigger(`${this.instanceId}:flashready`)
  }
  videoSize(width, height) {
    Mediator.trigger(`${this.instanceId}:videosizechanged`, width, height)
  }
  complete() {
    Mediator.trigger(`${this.instanceId}:complete`)
  }
  error(code, url, message) {
    Mediator.trigger(`${this.instanceId}:error`, code, url, message)
  }
  manifest(duration, loadmetrics) {
    Mediator.trigger(`${this.instanceId}:manifestloaded`, duration, loadmetrics)
  }
  audioLevelLoaded(loadmetrics) {
    Mediator.trigger(`${this.instanceId}:audiolevelloaded`, loadmetrics)
  }
  levelLoaded(loadmetrics) {
    Mediator.trigger(`${this.instanceId}:levelloaded`, loadmetrics)
  }
  fragmentLoaded(loadmetrics) {
    Mediator.trigger(`${this.instanceId}:fragmentloaded`, loadmetrics)
  }
  fragmentPlaying(playmetrics) {
    Mediator.trigger(`${this.instanceId}:fragmentplaying`, playmetrics)
  }
  position(timemetrics) {
    Mediator.trigger(`${this.instanceId}:timeupdate`, timemetrics)
  }
  state(newState) {
    Mediator.trigger(`${this.instanceId}:playbackstate`, newState)
  }
  seekState(newState) {
    Mediator.trigger(`${this.instanceId}:seekstate`, newState)
  }
  switch(newLevel) {
    Mediator.trigger(`${this.instanceId}:levelchanged`, newLevel)
  }
  audioTracksListChange(trackList) {
    Mediator.trigger(`${this.instanceId}:audiotracklistchanged`, trackList)
  }
  audioTrackChange(trackId) {
    Mediator.trigger(`${this.instanceId}:audiotrackchanged`, trackId)
  }
  requestPlaylist(instanceId, url, callbackLoaded, callbackFailure) {
    Mediator.trigger(`${this.instanceId}:requestplaylist`, instanceId, url, callbackLoaded, callbackFailure)
  }
  abortPlaylist(instanceId) {
    Mediator.trigger(`${this.instanceId}:abortplaylist`, instanceId)
  }
  requestFragment(instanceId, url, callbackLoaded, callbackFailure) {
    Mediator.trigger(`${this.instanceId}:requestfragment`, instanceId, url, callbackLoaded, callbackFailure)
  }
  abortFragment(instanceId) {
    Mediator.trigger(`${this.instanceId}:abortfragment`, instanceId)
  }
  fpsDrop(realFps, droppedFps) {
    Mediator.trigger(`${this.instanceId}:fpsdrop`, realFps, droppedFps)
  }
}

module.exports = HLSEvents
