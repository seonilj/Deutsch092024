$(document).ready(function() {
    all_note = $("li a");
    all_note.on("keyup", function() {
      note_title = $(this).find("h2").text();
      note_content = $(this).find("p").text();
      item = "list_" + $(this).parent().index();
      data = {
        title: note_title,
        content: note_content
      };
      window.localStorage.setItem(item, JSON.stringify(data));
    });
    all_note.each(function(index) {
      data = JSON.parse(window.localStorage.getItem("list_" + index));
      if (data !== null) {
        note_title = data.title;
        note_content = data.content;
        $(this).find("h2").text(note_title);
        $(this).find("p").text(note_content);
      }
    });
  });
  