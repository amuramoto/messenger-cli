# Messenger Platform CLI

[![NSP Status](https://nodesecurity.io/orgs/alex/projects/4aad36ab-fea7-4497-aaa8-44d8c89e74f9/badge)](https://nodesecurity.io/orgs/alex/projects/4aad36ab-fea7-4497-aaa8-44d8c89e74f9)

This is a CLI for executing common Messenger Platform actions that aren't usually called in application code. The following is supported:

- [__Messenger Profile__](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api): Get, set, and delete Messenger Profile properties.
- [__Messenger Code__](https://developers.facebook.com/docs/messenger-platform/discovery/messenger-codes): Generate static and parametric Messenger Codes.
- [__Built-in NLP__](https://developers.facebook.com/docs/messenger-platform/built-in-nlp): Set configuration options for built-in NLP. ## Usage

```

  Usage: messenger [options] [command]

  A simple CLI for making common Messenger Platform calls.


  Options:

    -V, --version        output the version number
    -t, --token [token]  Page access token. May also be set in MESSENGER_PAGE_TOKEN env var.
    -h, --help           output usage information


  Commands:

    profile [options] <fields...>  Set/get/delete Messenger Profile properties.
    code [options]                 Generates static and parametric Messenger Codes.
    nlp [options] <configs...>     Set config values for built-in NLP. Configs should be in the format config_name=value.
```
### `profile` options

```

  Usage: profile [options] <fields...>

  Set/get/delete Messenger Profile properties.


  Options:

    -s, --set     Set Messenger Profile fields.
    -d, --delete  Delete Messenger Profile fields.
    -g, --get     Retrieve Messenger Profile fields.
    -h, --help    output usage information
```
### `code` options

```

  Usage: code [options]

  Generates static and parametric Messenger Codes.


  Options:

    -s, --size <size>  Set the image size in pixels. Supported range: 100-2000. Defaults to 1000.
    -d, --data <data>  Set the referral payload. Max 250 characters. Valid characters: a-z A-Z 0-9 +/=-.:_
    -h, --help         output usage information
```
### `nlp` options

```

  Usage: nlp [options] <configs...>

  Set config values for built-in NLP. Configs should be in the format config_name=value.


  Options:

    -s, --set  Set Messenger Profile fields.
    -h, --help  output usage information
```
