// BARRA DE PROGRESSO
let processScroll = () => {
  let docElem = document.documentElement,
    docBody = document.body,
    scrollTop = docElem["scrollTop"] || docBody["scrollTop"],
    scrollBottom =
      (docElem["scrollHeight"] || docBody["scrollHeight"]) - window.innerHeight,
    scrollPercent = (scrollTop / scrollBottom) * 100 + "%";

  // console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);

  document
    .getElementById("progress-bar")
    .style.setProperty("--scrollAmount", scrollPercent);
};

document.addEventListener("scroll", processScroll);

// SCROLLYTELLIGN
function hideNote() {
  d3.selectAll("[data-name='2012']").style("opacity", "20%");
  d3.selectAll("[data-name='2012-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2013']").style("opacity", "20%");
  d3.selectAll("[data-name='2013-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2014']").style("opacity", "20%");
  d3.selectAll("[data-name='2014-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2015']").style("opacity", "20%");
  d3.selectAll("[data-name='2015-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2016']").style("opacity", "20%");
  d3.selectAll("[data-name='2016-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2017']").style("opacity", "20%");
  d3.selectAll("[data-name='2017-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2018']").style("opacity", "20%");
  d3.selectAll("[data-name='2018-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2019']").style("opacity", "20%");
  d3.selectAll("[data-name='2019-ref']").style("opacity", "20%");
}

function showNote() {
  d3.selectAll("[data-name='2012']").style("opacity", "100%");
  d3.selectAll("[data-name='2012-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2013']").style("opacity", "100%");
  d3.selectAll("[data-name='2013-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2014']").style("opacity", "100%");
  d3.selectAll("[data-name='2014-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2015']").style("opacity", "100%");
  d3.selectAll("[data-name='2015-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2016']").style("opacity", "100%");
  d3.selectAll("[data-name='2016-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2017']").style("opacity", "100%");
  d3.selectAll("[data-name='2017-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2018']").style("opacity", "100%");
  d3.selectAll("[data-name='2018-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2019']").style("opacity", "100%");
  d3.selectAll("[data-name='2019-ref']").style("opacity", "100%");
}

/* Scrollytelling code goes under here */
d3.select("#step-one").on("stepout", function (e) {
  if (e.detail.direction === "up") {
    // undo the changes from step one
    showNote();
  }
});

d3.select("#step-one").on("stepin", function (e) {
  console.log("Got to step one");
  // do changes for step one
  d3.selectAll("[data-name='2011']").style("opacity", "100%");
  hideNote();
});

d3.select("#step-two").on("stepout", function (e) {
  if (e.detail.direction === "up") {
    // undo the changes from step two
    d3.selectAll("[data-name='2011']").style("opacity", "100%");
    d3.selectAll("[data-name='2011-ref']").style("opacity", "100%");
    d3.selectAll("[data-name='2018']").style("opacity", "20%");
    d3.selectAll("[data-name='2018-ref']").style("opacity", "20%");
  }
});

d3.select("#step-two").on("stepin", function (e) {
  // do changes for step two
  console.log("Got to step two");
  d3.selectAll("[data-name='2011']").style("opacity", "20%");
  d3.selectAll("[data-name='2011-ref']").style("opacity", "20%");
  d3.selectAll("[data-name='2018']").style("opacity", "100%");
  d3.selectAll("[data-name='2018-ref']").style("opacity", "100%");
});

d3.select("#step-three").on("stepout", function (e) {
  if (e.detail.direction === "up") {
    // undo the changes from step three
    hideNote();
    d3.selectAll("[data-name='2011']").style("opacity", "20%");
    d3.selectAll("[data-name='2011-ref']").style("opacity", "20%");
    d3.selectAll("[data-name='2018-ref']").style("opacity", "100%");
    d3.selectAll("[data-name='2018']").style("opacity", "100%");
    d3.selectAll("[data-name='2020']").style("opacity", "100%");
    d3.selectAll("[data-name='2020-ref']").style("opacity", "100%");
  }
});

d3.select("#step-three").on("stepin", function (e) {
  // do changes for step three
  console.log("Got to step three");
  hideNote();
  d3.selectAll("[data-name='2011']").style("opacity", "20%");
  d3.selectAll("[data-name='2011-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2012-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2013-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2014-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2015-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2016-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2017-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2018-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2019-ref']").style("opacity", "100%");
  d3.selectAll("[data-name='2020']").style("opacity", "20%");
  d3.selectAll("[data-name='2020-ref']").style("opacity", "100%");
});

d3.select("#step-four").on("stepout", function (e) {
  if (e.detail.direction === "up") {
    // undo the changes from step three
    d3.selectAll("#outros").style("opacity", "100%");
    d3.selectAll("#outros-haiti path").style("fill", "#F4D06F");
    d3.selectAll("#outros-ven path").style("fill", "#F4D06F");
    d3.selectAll("#ref-ven path").style("fill", "#F4D06F");
    d3.selectAll("#ref-haiti path").style("fill", "#F4D06F");
  }
});

d3.select("#step-four").on("stepin", function (e) {
  // do changes for step three
  console.log("Got to step three");
  d3.selectAll("#outros").style("opacity", "15%");
  d3.selectAll("#outros-haiti path").style("fill", "#C6EBBE");
  d3.selectAll("#outros-ven path").style("fill", "#C6EBBE");
  d3.selectAll("#ref-ven path").style("fill", "#C6EBBE");
  d3.selectAll("#ref-haiti path").style("fill", "#C6EBBE");
});

d3.select("#step-five").on("stepout", function (e) {
  if (e.detail.direction === "up") {
    // undo the changes from step three
    d3.selectAll("#outros").style("opacity", "15%");
    d3.selectAll("#outros-haiti path")
      .style("fill", "#C6EBBE")
      .style("opacity", "100%");
    d3.selectAll("#outros-ven path")
      .style("fill", "#C6EBBE")
      .style("opacity", "100%");
    d3.selectAll("#ref-ven path")
      .style("fill", "#C6EBBE")
      .style("opacity", "100%");
    d3.selectAll("#ref-haiti path").style("fill", "#C6EBBE");
  }
});

d3.select("#step-five").on("stepin", function (e) {
  // do changes for step three
  console.log("Got to step three");
  d3.selectAll("#outros").style("opacity", "15%");
  d3.selectAll("#outros-haiti path")
    .style("fill", "#F4D06F")
    .style("opacity", "15%");
  d3.selectAll("#outros-ven path")
    .style("fill", "#F4D06F")
    .style("opacity", "15%");
  d3.selectAll("#ref-ven path")
    .style("fill", "#F4D06F")
    .style("opacity", "15%");
  d3.selectAll("#ref-haiti path").style("fill", "#E87461");
});

d3.select("#step-six").on("stepout", function (e) {
  if (e.detail.direction === "up") {
    // undo the changes from step three
    d3.selectAll("#ref-haiti path")
      .style("fill", "#E87461")
      .style("opacity", "100%");
    d3.selectAll("#ref-ven path")
      .style("fill", "#F4D06F")
      .style("opacity", "15%");
  }
});

d3.select("#step-six").on("stepin", function (e) {
  // do changes for step three
  console.log("Got to step three");
  d3.selectAll("#ref-ven path")
    .style("fill", "#E87461")
    .style("opacity", "100%");
  d3.selectAll("#ref-haiti path")
    .style("fill", "#F4D06F")
    .style("opacity", "15%");
});
