var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "60015",
        "ok": "-",
        "ko": "60015"
    },
    "maxResponseTime": {
        "total": "60147",
        "ok": "-",
        "ko": "60147"
    },
    "meanResponseTime": {
        "total": "60063",
        "ok": "-",
        "ko": "60063"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "-",
        "ko": "31"
    },
    "percentiles1": {
        "total": "60058",
        "ok": "-",
        "ko": "60058"
    },
    "percentiles2": {
        "total": "60084",
        "ok": "-",
        "ko": "60084"
    },
    "percentiles3": {
        "total": "60119",
        "ok": "-",
        "ko": "60119"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "-",
        "ko": "60142"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 200,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.245",
        "ok": "-",
        "ko": "3.245"
    }
},
contents: {
"req_get-request-6d733": {
        type: "REQUEST",
        name: "get request",
path: "get request",
pathFormatted: "req_get-request-6d733",
stats: {
    "name": "get request",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "60015",
        "ok": "-",
        "ko": "60015"
    },
    "maxResponseTime": {
        "total": "60147",
        "ok": "-",
        "ko": "60147"
    },
    "meanResponseTime": {
        "total": "60063",
        "ok": "-",
        "ko": "60063"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "-",
        "ko": "31"
    },
    "percentiles1": {
        "total": "60058",
        "ok": "-",
        "ko": "60058"
    },
    "percentiles2": {
        "total": "60084",
        "ok": "-",
        "ko": "60084"
    },
    "percentiles3": {
        "total": "60119",
        "ok": "-",
        "ko": "60119"
    },
    "percentiles4": {
        "total": "60142",
        "ok": "-",
        "ko": "60142"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 200,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "3.245",
        "ok": "-",
        "ko": "3.245"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
