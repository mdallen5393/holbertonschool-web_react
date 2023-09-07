import $ from "jquery";

// Append elements to the body
$(() => {
  $('body').append('<div id="logo"></div>');
  $('body').append('<h1>Holberton Dashboard</h1>');
  console.log('Init header');
});
