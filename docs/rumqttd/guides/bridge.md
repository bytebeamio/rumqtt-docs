# Setup Bridge

A MQTT broker bridge is mainly use to connect multiple MQTT broker, and can be used to share messages between each other.

# How to setup Bridge in rumqttd

Bridge setup in rumqttd is a one way connection which bridges all the messages from a particular topic.

To avoid looping in bridge setup you can enable `try_private` to true, which will signal the remote broker that this connection is a bridge connection and not a ordinary MQTT client, which can help avoid message looping in some cases.

Multiple Bridge can be ran at the same time, you can configure bridge in `rumqttd.toml` configuration file in following format.

# Features

- Can run multiple bridges at the same time
- Support tls connection to remote broker with client authentication

# Example configuration structure

```toml
[bridge.1]

# Client id used to make connection to remote server
name = "bridge-1"

addr = "localhost:1883"
qos = 0

# Topic from which you want to bridge messages from
sub_path = "#"

# Incase of any error in BridgeLink after how many seconds to retry the connection.
reconnection_delay = 5

ping_delay = 5
timeout_delay = 5
try_private = true
    [bridge.1.connections]
    connection_timeout_ms = 60000
    max_client_id_len = 256
    throttle_delay_ms = 0
    max_payload_size = 20480
    max_inflight_count = 500
    max_inflight_size = 1024
    dynamic_filters = true
    # [bridge.transport.tls]
    # ca = "ca.cert.pem"
    # client_auth = { certs = "test-1.cert.pem", key = "test-1.key.pem" }

[bridge.2]
name = "bridge-2"
addr = "localhost:9883"
qos = 0
sub_path = "#"
reconnection_delay = 5
ping_delay = 5
timeout_delay = 5
try_private = true
    [bridge.1.connections]
    connection_timeout_ms = 60000
    max_client_id_len = 256
    throttle_delay_ms = 0
    max_payload_size = 20480
    max_inflight_count = 500
    max_inflight_size = 1024
    dynamic_filters = true
    # [bridge.transport.tls]
    # ca = "ca.cert.pem"
    # client_auth = { certs = "test-1.cert.pem", key = "test-1.key.pem" }
```
