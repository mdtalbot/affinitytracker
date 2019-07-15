chrome.runtime.onInstalled.addListener(function () {    // add an action here
});


//Initialize affinity object in local storage
let CSE_Challenge={}

const defaultData={
    womens: 0,
    mens: 0,
    home: 0,
    lifestyle: 0,
    beauty: 0
}

chrome.storage.local.get('CSE_Challenge',function(data) {
  if(data) {
    CSE_Challenge=data;
  } else {
    CSE_Challenge[Object.keys(CSE_Challenge).length] = defaultData
  }
})

chrome.storage.local.set({'CSE_Challenge': CSE_Challenge})

//Check utag_data.product_category[0] value and increment affinity

document.addEventListener('DOMContentLoaded',categoryCheck(),false)

categoryCheck=() => {
  switch(utag_data.product_category[0]) {
    case "mens-clothing":
      chrome.storage.local.set({
        'CSE_Challenge.mens': CSE_Challenge.mens+=1
      })
      break;
    case "womens-clothing":
      chrome.storage.local.set({
        'CSE_Challenge.womens': CSE_Challenge.womens+=1
      })
      break;
    case "lifestyle":
      chrome.storage.local.set({
        'CSE_Challenge.lifestyle': CSE_Challenge.lifestyle+=1
      })
      break;
    case "beauty-products":
      chrome.storage.local.set({
        'CSE_Challenge.beauty': CSE_Challenge.beauty+=1
      })
      break;
    case "home":
      chrome.storage.local.set({
        'CSE_Challenge.home': CSE_Challenge.home+=1
      })
      break;
    default:
      console.log("Item type not recognized.")

      break;
  }
}

//Add event listener to "Add to Cart" - for some reason,
//submit listeners on the form don't work?

const trackButton=document.getElementsByClassName("js-add-to-cart");

trackbutton[0].addEventListener('click',logSubmit)

logSubmit=(event) => {
  switch(utag_data.product_category[0]) {
    case "mens-clothing":
      chrome.storage.local.set({
        'CSE_Challenge.mens': CSE_Challenge.mens+=1
      })
      break;
    case "womens-clothing":
      chrome.storage.local.set({
        'CSE_Challenge.womens': CSE_Challenge.womens+=1
      })
      break;
    case "lifestyle":
      chrome.storage.local.set({
        'CSE_Challenge.lifestyle': CSE_Challenge.lifestyle+=1
      })
      break;
    case "beauty-products":
      chrome.storage.local.set({
        'CSE_Challenge.beauty': CSE_Challenge.beauty+=1
      })
      break;
    case "home":
      chrome.storage.local.set({
        'CSE_Challenge.home': CSE_Challenge.home+=1
      })
      break;
    default:
      console.log("Item type not recognized.")
      break;
  }
}


