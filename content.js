document.addEventListener("DOMContentLoaded",sortPageByAffinity(),false)

const tempAffinity={}
const sortedAffinity={}
const wrapper = document.getElementsByClassName('dom-landing-page-modules')
const womens=document.querySelectorAll('[data-index="0"]')
const mens=document.querySelectorAll('[data-index="1"]')
const home=document.querySelectorAll('[data-index="2"]')
const lifestyle=document.querySelectorAll('[data-index="3"]')
const beauty=document.querySelectorAll('[data-index="4"]')

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
