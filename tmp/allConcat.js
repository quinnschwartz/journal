var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#entry').val();
      var entryObject = new Entry("title", entryText);
      var vowelCount = entryObject.countVowels();
      var wordCount = entryObject.countWords();
      var consonantCount = entryObject.countConsonants();
      var teaser = entryObject.getTeaser();

      $("#teaser").text(teaser);
      $("#consonants").text(consonantCount);
      $("#vowels").text(vowelCount);
  });
});

$(document).ready(function() {
  $('#title-form').submit(function(event) {
      event.preventDefault();
      var entryText = $('#title').val();
      var entryObject = new Entry(title, entryText);
      var vowelCount = entryObject.countVowels();
      var wordCount = entryObject.countWords();
      var consonantCount = entryObject.countConsonants();
  });
});
