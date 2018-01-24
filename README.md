# Messenger Platform CLI

This is a CLI for executing common Messenger Platform actions that aren't usually called in application code. The following is supported:

- [__Messenger Profile__](https://developers.facebook.com/docs/messenger-platform/reference/messenger-profile-api): Get, set, and delete Messenger Profile properties.
- [__Messenger Code__](https://developers.facebook.com/docs/messenger-platform/discovery/messenger-codes): Generate static and parametric Messenger Codes.
- [__Built-in NLP__](https://developers.facebook.com/docs/messenger-platform/built-in-nlp): Set configuration options for built-in NLP. 

## Usage

```

  Usage: messenger [options] [command]

  A simple CLI for making common Messenger Platform calls.


  Options:

    -V, --version        output the version number
    -t, --token [token]  Page access token. May also be set in MESSENGER_PAGE_TOKEN env var.
    -h, --help           output usage information


  Commands:

    profile [options] <fields...>  Set/get/delete Messenger Profile properties.
    nlp [options] <configs...>     Set config values for built-in NLP. Configs should be in the format config_name=value.
    code [options]                 Generates static and parametric Messenger Codes.
```
