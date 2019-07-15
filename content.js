document.addEventListener("DOMContentLoaded",sortPageByAffinity(),false)

const tempAffinity={}
const sortedAffinity={}
const wrapper = document.getElementsByClassName('dom-landing-page-modules')
const productRows = document.querySelectorAll('[data-qa-module-length]')

//Grab affinity from local storage
fetchData=() => {
  chrome.storage.local.get('CSE_Challenge',function(data) {
    tempAffinity = data
  })
}

//Sort resulting object by affinity values
sortObjByAffinity=(obj) => {
  sortedAffinity=Object.keys(obj).sort(function(a,b){return obj[a] - obj[b]})
}


sortPageByAffinity=() => {

}
