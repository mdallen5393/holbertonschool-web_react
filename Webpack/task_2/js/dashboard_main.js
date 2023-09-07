import $ from "jquery";
import _ from "lodash";

// Count button clicks
let count = 0;
function updateCounter() {
  count++;
  let clickCountParagraph = document.getElementById('count');
  clickCountParagraph.textContent = `${count} clicks on the button`
}

// Append elements to the body
$(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="clickCount">Click here to get started</button>')
  $('body').append("<p id='count'></p>");
  $('body').append('<p>Copyright - Holberton School</p>');

  // Click event for counting button clicks
  $('#clickCount').on('click', _.debounce(updateCounter, 500));
});
