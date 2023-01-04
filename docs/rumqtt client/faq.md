---
sidebar_position: 4
---

# Frequently Asked Questions

<details>
<summary>Connecting to a broker using raw ip doesn't work</summary>

You cannot create a TLS connection to a bare IP address with a self-signed
certificate. This is a [limitation of rustls](https://github.com/ctz/rustls/issues/184).
One workaround, which only works on certain systems, is to add an
entry to wherever your DNS resolver looks (e.g. `/etc/hosts`) for the bare IP
address and use that name in your code.
</details>
