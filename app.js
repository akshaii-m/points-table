let info = [];

fetch("/data/3978_standings.json")
  .then((res) => res.json())
  .then(
    (data) => (
      (info = data.standings.stages.stage[0].group[0].entities.entity),
      createHtml(info),
      console.log(info)
    )
  )
  .catch((err) => console.log(err));

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "/data/3978_standings.json", true);

// xhr.onload = function () {
//   if (this.status == 200) {
//     var myinfo = JSON.parse(this.responseText);

//     info = myinfo.standings.stages.stage[0].group[0].entities.entity;
//   }
//   createHtml(info);
// };
// xhr.send();

Handlebars.registerHelper("getColor", function (name) {
  if (name == "KXIP") {
    return "linear-gradient(#ea2126, rgba(201, 19, 24, 0.9), #a70409)";
  }
});

Handlebars.registerHelper("url", function (id) {
  
  urlInfo = `url(https://www.punjabkingsipl.in/static-assets/images/teams/${id}.png?v=2.3)`;
  return urlInfo;

  
});

function createHtml(info) {
  let rawTemplate = document.querySelector("#teamTemplate").innerHTML;
  let compiledTemplate = Handlebars.compile(rawTemplate);
  let generatedHtml = compiledTemplate(info);
  let post = document.getElementById("team-data");
  post.innerHTML = generatedHtml;
}
createHtml();
