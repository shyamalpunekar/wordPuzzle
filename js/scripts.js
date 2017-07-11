$(document).ready(function() {
  $("#puzzle").submit(function(event) {
    var blocks = $("#blocks").val();
    var splits = blocks.toLowerCase().split("");
    $('p').append(splits);
    var vowels = ['a','e','i', 'o' ,'u'];
    var answer =[];

    // function findVowel(split, vowel) {
    //   split === vowel;
    //   return "-";
    // }
    // //
    // function find(split, vowel) {
    //   if (split === vowel) {
    //     splits.splice(0, splits.indexOf(split), '-');
    //     $('#newString').append(splits);
    //   }
    // }
    // function splizz(ind) {
    //   splits.splice(ind, '-');
    // }

    splits.forEach(function(split, vowel) {
      if (split != vowel) {
        answer += split;
      } else if (split === vowel) {
        answer += "-";
      }
    });

    // splits.forEach(function(split) {
    //   vowels.forEach(function(vowel) {
    //     if (split != vowel) {
    //       answer += split;
    //     } else if (split === vowel) {
    //       answer += "-";
    //     }
    //   });
    // });

    $('#newString').append(answer);

    // splits.forEach(function(split) {
    //   vowels.forEach(function(vowel) {
    //
    //     if (split === vowel) {
    //       splits.splice(0, '-')
    //       $('#newString').append(splits);
    //     }
    //   });
    // });

    // for (var index = 0; index <= splits.length; index ++) {
    //   if (index === 'a') {
    //     alert('helloworld');
    //   }
    // }
    // for (var i = 0; i < splits.length; i++ ) {
    //        for ( var e = 0; e < vowels.length; e++ ) {
    //            if (i === e) {
    //               splits.splice(i, '-');
    //               $("#newString").append(splits);
    //                }
    //        }
    //    }
event.preventDefault();

  });
});
