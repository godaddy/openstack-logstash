
{
  port: "8125"
, address: "127.0.0.1"
, backends: [  "./backends/graphite",
  ]

, debug: false
, mgmt_address: "127.0.0.1"
, mgmt_port: "8126"
, title: "statsd"
, healthStatus: "up"
, dumpMessages: false
, flushInterval: "10000"
, percentThreshold: [90]
, flush_counts: true

, graphitePort: "2003"
, graphiteHost: "<yourserver>"
, graphite: {
    legacyNamespace:  false,
    globalPrefix:     "cloud.openstack.<your env name>",
    prefixCounter:    "counters",
    prefixTimer:      "timers",
    prefixGauge:      "gauges",
    prefixSet:        "sets",
    globalSuffix:     "undef"
  }
}
