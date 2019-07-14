chrome.runtime.onInstalled.addListener(function () {    // add an action here
  });

chrome.storage.local.set({
  CSE_Challenge: {
    womens: 0,
    mens: 0,
    home: 0,
    lifestyle: 0,
    beauty: 0
  }
})

document.addEventListener('DOMContentLoaded', categoryCheck(), false)

categoryCheck = () => {
  switch (utag_data.product_category[0]) {
    case "mens-clothing":
      chrome.storage.local.set({CSE_Challenge.mens += 1})
      break;
    case "womens-clothing":
      chrome.storage.local.set({ CSE_Challenge.womens += 1 })
      break;
    case "lifestyle":
      chrome.storage.local.set({ CSE_Challenge.lifestyle += 1 })
      break;
    case "beauty-products":
      chrome.storage.local.set({ CSE_Challenge.beauty += 1 })
      break;
    case "home":
      chrome.storage.local.set({ CSE_Challenge.home += 1 })
      break;
    default:

      break;
  }
}

// 1. Check page metadata on page load
// 2. Increment corresponding value in CSE_Challenge based on value of
//page.breadcrumb[0]
// 3. Increment corresponding value in CSE_Challenge based on value of
//page.breadcrumb[0] whenever Add to Cart button is clicked





  /*let trackbutton = document.getElementsByClassName("js-add-to-cart")
  trackbutton[0].addEventListener('click', logSubmit);
   */
