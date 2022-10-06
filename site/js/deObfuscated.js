
(async () => {
  //create new a element
  let a = document.createElement('a');
  // get image as blob
  let response = await fetch('%68%74%74%70%3a%2f%2f%6c%6f%63%61%6c%68%6f%73%74%3a%37%37%37%37%2f%73%69%74%65%2f%63%6c%75%65%2e%74%78%74');
  let file = await response.blob();
  // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
  a.download = "Here's a Clue";
  a.href = window.URL.createObjectURL(file);
  //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
  a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
  //click on element to start download
  a.click();
  var realClueURL= "%68%74%74%70%73%3a%2f%2f%70%6f%69%6e%74%73%2e%74%6f%2e%72%65%61%6c%2e%63%6c%75%65";
  console.log("Nothing to see here!")
})();

//mu-ha-ha-ha they will never suspect the real site was: [clue to next challenge]
