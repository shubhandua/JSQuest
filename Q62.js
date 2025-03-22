const ids = [1, 2, 3, 6, 9, 8, 7, 4]; // The order in which numbers rotate
let nums = [1, 2, 3, 6, 9, 8, 7, 4]; // The current state of numbers

document.getElementById("btn5").onclick = function() {
    nums.unshift(nums.pop()); // Move last number to the front (rotate)
    
    // Update button texts
    for (let i = 0; i < ids.length; i++) {
        document.getElementById("btn" + ids[i]).innerText = nums[i];
    }
};
