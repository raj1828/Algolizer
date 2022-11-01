const container = 
document.querySelector(".data-container");
  
// Function to generate bars
function generatebars(num = 20) {
  
   //For loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
  
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 100) + 1;
  
     // To create element "div"
    const bar = document.createElement("div");
  
    // To add class "bar" to "div"
    bar.classList.add("bar");
  
     // Provide height to the bar
    bar.style.height = `${value * 3}px`;
    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${i * 30}px)`;
  
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("bar__id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;
  
    // Append "Label" to "div"
    bar.appendChild(barLabel);
  
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}
  
// Asynchronous function to perform "Insertion Sort"
  async function InsertionSort(delay = 600) {
  let bars = document.querySelectorAll(".bar");
  
  // Provide lightgreen colour to 0th bar
  bars[0].style.backgroundColor = " rgb(49, 226, 13)";
  for (var i = 1; i < bars.length; i += 1) {
  
    // Assign i-1 to j
    var j = i - 1;
  
    // To store the integer value of ith bar to key 
    var key = 
    parseInt(bars[i].childNodes[0].innerHTML);
  
    // To store the ith bar height to height
    var height = bars[i].style.height;
     
    // For selecting section having id "ele"
    var barval=document.getElementById("ele")
  
    // For dynamically Updating the selected element
      barval.innerHTML=
      `<h3>Element Selected is :${key}</h3>`;
  
    //Provide darkblue color to the ith bar 
    bars[i].style.backgroundColor = "darkblue";
      
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
  
    // For placing selected element at its correct position 
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
        
      // Provide darkblue color to the jth bar
      bars[j].style.backgroundColor = "darkblue";
        
      // For placing jth element over (j+1)th element
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = 
      bars[j].childNodes[0].innerText;
  
      // Assign j-1 to j
      j = j - 1;
  
      // To pause the execution of code for 600 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );
        
      // Provide lightgreen color to the sorted part
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
  
    // Placing the selected element to its correct position
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
       
    // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
      
    // Provide light green color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
  
  barval.innerHTML="<h3>Sorted!!!</h3>";
    
  // To enable the button 
  // "Generate New Array" after final(sorted)
  document.getElementById("Button1")
  .disabled = false;
  document.getElementById("Button1")
  .style.backgroundColor = "#6f459e";
  
  // To enable the button 
  // "Insertion Sort" after final(sorted)
  document.getElementById("Button2")
  .disabled = false;
  document.getElementById("Button2")
  .style.backgroundColor = "#6f459e";
}

// Asynchronous function to perform "Selection Sort"

async function SelectionSort(delay = 300) {
  console.log("clicked");
  
    let bars = document.querySelectorAll(".bar");
    // Assign 0 to min_idx
     var min_idx = 0;
     for (var i = 0; i < bars.length; i += 1) {
    
      var key = 
    parseInt(bars[i].childNodes[0].innerHTML);

var barval=document.getElementById("ele")
barval.innerHTML=
      `<h3>Element Selected is :${key}</h3>`;
      // Assign i to min_idx
      min_idx = i;
    
      // Provide darkblue color to the ith bar
      bars[i].style.backgroundColor = "darkblue";
      for (var j = i + 1; j < bars.length; j += 1) {
    
        // Provide red color to the jth bar
        bars[j].style.backgroundColor = "red";
          
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );
    
        // To store the integer value of jth bar to var1 
        var val1 = parseInt(bars[j].childNodes[0].innerHTML);
    
        // To store the integer value of (min_idx)th bar to var2 
        var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
          
        // Compare val1 & val2
        if (val1 < val2) {
          if (min_idx !== i) {
    
            // Provide skyblue color to the (min-idx)th bar
            bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
          }
          min_idx = j;
        } else {
    
          // Provide skyblue color to the jth bar
          bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
        }
      }
    
      // To swap ith and (min_idx)th bar
      var temp1 = bars[min_idx].style.height;
      var temp2 = bars[min_idx].childNodes[0].innerText;
      bars[min_idx].style.height = bars[i].style.height;
      bars[i].style.height = temp1;
      bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
      bars[i].childNodes[0].innerText = temp2;
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
    
      // Provide skyblue color to the (min-idx)th bar
      bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
    
      // Provide lightgreen color to the ith bar
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    
    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("Button1").disabled = false;
    document.getElementById("Button1").style.backgroundColor = "#6f459e";
    
    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("Button3").disabled = false;
    document.getElementById("Button3").style.backgroundColor = "#6f459e";
  }
  
  // Function calculate_gap
function calculate_gap(gap) {
  
  gap = parseInt((gap * 10) / 13, 10);
  if (gap < 1) return 1;
  return gap;
}

// Asynchronous function to perform "Comb Sort"
async function CombSort(delay = 600) {
  console.log("clicked")
  let bars = document.querySelectorAll(".bar");
  
  var gap = 20;

  
  
  let swapped = true;
  
  while (gap != 1 || swapped == true) {
    
    // Calling calculate_gap function
    gap = calculate_gap(gap);
    
  
    // Initializing swapped with false
    swapped = false;
  
    for (var i = 0; i < 20 - gap; i++) {
      
      // Assigning value of ith bar into value1
      var value1 = parseInt(bars[i].childNodes[0].innerHTML);
  
      // Assigning value of i+gapth bar into value2
      var value2 = parseInt(bars[i + gap].childNodes[0].innerHTML);
      if (value1 > value2) {
        
        // Provide red color to the ith bar
        bars[i].style.backgroundColor = "red";
  
        // Provide red color to the i+gapth bar
        bars[i + gap].style.backgroundColor = "red";
  
        // Swap ith bar with (i+gap)th bar
        var temp1 = bars[i].style.height;
        var temp2 = bars[i].childNodes[0].innerText;
  
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );
  
        // Swap ith bar with (i+gap)th bar
        bars[i].style.height = bars[i + gap].style.height;
        bars[i].childNodes[0].innerText = bars[i + gap].childNodes[0].innerText;
        bars[i + gap].style.height = temp1;
        bars[i + gap].childNodes[0].innerText = temp2;
  
        // Set swapped
        swapped = true;
  
        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 300)
        );
      }
      // Provide skyblue color to the ith bar
      bars[i].style.backgroundColor = "rgb(0, 183, 255)";
  
      // Provide skyblue color to the i+gapth bar
      bars[i + gap].style.backgroundColor = "rgb(0, 183, 255)";
  
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
    }
  }
  for (var x = 0; x < 20; x++) {
    bars[x].style.backgroundColor = "rgb(49, 226, 13)";
  }
  
  // To enable the button "Generate New Array" after final(sorted)
  document.getElementById("Button1").disabled = false;
  document.getElementById("Button1").style.backgroundColor = "#6f459e";
  
  // To enable the button "Comb Sort" after final(sorted)
  document.getElementById("Button4").disabled = false;
  document.getElementById("Button4").style.backgroundColor = "#6f459e";
}

// Asynchronous function to perform "Shell Sort"
async function ShellSort(delay = 600) {
  let bars = document.querySelectorAll(".bar");

  for (var i = 10; i > 0; i = Math.floor(i / 2)) {

      // To pause the execution of code
      // for 300 milliseconds
      await new Promise((resolve) =>
          setTimeout(() => {
              resolve();
          }, 300)
      );

      for (var j = i; j < 20; j++) {
          var temp = parseInt(
              bars[j].childNodes[0].innerHTML);
          var k;

          var temp1 = bars[j].style.height;
          var temp2 = bars[j].childNodes[0].innerText;

          for (
              k = j;
              k >= i && parseInt(bars[k - i]
                  .childNodes[0].innerHTML) > temp;
              k -= i
          ) {
              bars[k].style.height 
                      = bars[k - i].style.height;

              bars[k].childNodes[0].innerText = 
                  bars[k - i].childNodes[0].innerText;

              // To pause the execution of code
              // for 300 milliseconds
              await new Promise((resolve) =>
                  setTimeout(() => {
                      resolve();
                  }, 300)
              );
          }

          // Provide darkblue color to the jth bar
          bars[j].style.backgroundColor = "darkblue";

          // Provide darkblue color to the kth bar
          bars[k].style.backgroundColor = "darkblue";
          bars[k].style.height = temp1;
          bars[k].childNodes[0].innerText = temp2;

          // To pause the execution of code for
          // 300 milliseconds
          await new Promise((resolve) =>
              setTimeout(() => {
                  resolve();
              }, 600)
          );

          // Provide skyblue color to the jth bar
          bars[j].style.backgroundColor = "rgb(0, 183, 255)";

          // Provide skyblue color to the kth bar
          bars[k].style.backgroundColor = "rgb(0, 183, 255)";

          // To pause the execution of code for
          // 300 milliseconds
          await new Promise((resolve) =>
              setTimeout(() => {
                  resolve();
              }, 300)
          );
      }
  }
  for (var x = 0; x < 20; x++) {
      bars[x].style.backgroundColor 
          = "rgb(49, 226, 13)";
  }

  // To enable the button "Generate New Array"
  // after final(sorted)
  document.getElementById("Button1")
          .disabled = false;

  document.getElementById("Button1")
      .style.backgroundColor = "#6f459e";

  // To enable the button "Shell Sort"
  // after final(sorted)
  document.getElementById("Button5").disabled = false;
  document.getElementById("Button5")
      .style.backgroundColor = "#6f459e";
}

// Call "generatebars()" function 
generatebars();
  
// Function to generate new random array 
function generate()
{
  window.location.reload();
}
  
// Function to disable the button
function disable()
{
  // To disable the button "Generate New Array"
  document.getElementById("Button1")
  .disabled = true;
  document.getElementById("Button1")
  .style.backgroundColor = "#F1F1F1";
  
  // To disable the button "Insertion Sort"
  document.getElementById("Button2")
  .disabled = true;
  document.getElementById("Button2")
  .style.backgroundColor = "#F1F1F1";  

  document.getElementById("Button3").disabled = true;
  document.getElementById("Button3").style.backgroundColor = "#F1F1F1"; 

  document.getElementById("Button4").disabled = true;
  document.getElementById("Button4").style.backgroundColor = "#F1F1F1";  

  document.getElementById("Button5").disabled = true;
  document.getElementById("Button5").style.backgroundColor = "#F1F1F1";  
}